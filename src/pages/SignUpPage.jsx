import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiClient from "../services/apiClient";
import { fetchRoles } from "../store/actions/clientActions";
import "./SignUpPage.css";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const phonePattern = /^(?:\+90|0)?5\d{9}$/;
const taxNumberPattern = /^T\d{4}V\d{6}$/;
const ibanPattern = /^TR\d{2}(?:\s?\d{4}){5}\s?\d{2}$/;

function FormField({ label, error, children }) {
  return <label className="signup-field"><span>{label}</span>{children}{error && <small>{error.message}</small>}</label>;
}

function SignUpPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);
  const [rolesError, setRolesError] = useState("");
  const [apiError, setApiError] = useState("");
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm({ defaultValues: { role_id: "" } });
  const roleId = watch("role_id");
  const selectedRole = roles.find((role) => String(role.id) === String(roleId));
  const isStore = selectedRole?.code === "store";

  useEffect(() => {
    async function getRoles() {
      try {
        const fetchedRoles = await dispatch(fetchRoles());
        const customer = fetchedRoles.find((role) => role.code === "customer");
        if (customer) setValue("role_id", String(customer.id));
      } catch {
        setRolesError("Roller yüklenemedi. Lütfen sayfayı yenileyin.");
      }
    }
    if (!roles.length) getRoles();
    else {
      const customer = roles.find((role) => role.code === "customer");
      if (customer && !roleId) setValue("role_id", String(customer.id));
    }
  }, [dispatch, roles, roleId, setValue]);

  async function submit(values) {
    setApiError("");
    const data = { name: values.name, email: values.email, password: values.password, role_id: Number(values.role_id) };
    if (isStore) {
      data.store = {
        name: values.store_name,
        phone: values.phone.replace(/\s/g, ""),
        tax_no: values.tax_no,
        bank_account: values.bank_account.replace(/\s/g, ""),
      };
    }
    try {
      await apiClient.post("/signup", data);
      toast.warn("You need to click link in email to activate your account!");
      history.goBack();
    } catch (error) {
      setApiError(error.response?.data?.message || error.response?.data?.error || "Kayıt oluşturulamadı. Bilgilerinizi kontrol edin.");
    }
  }

  return <main className="signup-page"><section className="signup-card">
    <button className="signup-back" type="button" onClick={() => history.goBack()}>← Mağazaya dön</button>
    <p className="signup-kicker">CREATE ACCOUNT</p><h1>Sign Up</h1><p className="signup-copy">Yeni hesabını oluştur ve koleksiyonları keşfet.</p>
    {apiError && <p className="signup-alert" role="alert">{apiError}</p>}
    <form onSubmit={handleSubmit(submit)} noValidate>
      <FormField label="Ad Soyad" error={errors.name}><input {...register("name", { required: "Ad Soyad zorunludur.", minLength: { value: 3, message: "En az 3 karakter girin." } })} /></FormField>
      <FormField label="E-posta" error={errors.email}><input type="email" {...register("email", { required: "E-posta zorunludur.", pattern: { value: /^\S+@\S+\.\S+$/, message: "Geçerli bir e-posta girin." } })} /></FormField>
      <FormField label="Şifre" error={errors.password}><input type="password" {...register("password", { required: "Şifre zorunludur.", pattern: { value: passwordPattern, message: "8+ karakter; büyük/küçük harf, sayı ve özel karakter kullanın." } })} /></FormField>
      <FormField label="Şifre Tekrarı" error={errors.password_confirm}><input type="password" {...register("password_confirm", { required: "Şifre tekrarı zorunludur.", validate: (value) => value === watch("password") || "Şifreler eşleşmiyor." })} /></FormField>
      <FormField label="Hesap türü" error={errors.role_id}><select {...register("role_id", { required: "Rol seçin." })} disabled={!roles.length}><option value="">Rol seçin</option>{roles.map((role) => <option key={role.id} value={role.id}>{role.name}</option>)}</select></FormField>
      {rolesError && <p className="signup-error">{rolesError}</p>}
      {isStore && <fieldset><legend>Mağaza Bilgileri</legend>
        <FormField label="Mağaza adı" error={errors.store_name}><input {...register("store_name", { required: "Mağaza adı zorunludur.", minLength: { value: 3, message: "En az 3 karakter girin." } })} /></FormField>
        <FormField label="Mağaza telefonu" error={errors.phone}><input placeholder="05321234567" {...register("phone", { required: "Telefon zorunludur.", pattern: { value: phonePattern, message: "Geçerli Türkiye cep telefonu girin." } })} /></FormField>
        <FormField label="Vergi numarası" error={errors.tax_no}><input placeholder="T1234V123456" {...register("tax_no", { required: "Vergi numarası zorunludur.", pattern: { value: taxNumberPattern, message: "TXXXXVXXXXXX formatını kullanın." } })} /></FormField>
        <FormField label="IBAN" error={errors.bank_account}><input placeholder="TR00 0000 0000 0000 0000 0000 00" {...register("bank_account", { required: "IBAN zorunludur.", pattern: { value: ibanPattern, message: "Geçerli bir TR IBAN girin." } })} /></FormField>
      </fieldset>}
      <button className="signup-submit" type="submit" disabled={isSubmitting || !roles.length}>{isSubmitting && <i className="signup-spinner" />} {isSubmitting ? "KAYIT OLUŞTURULUYOR" : "KAYIT OL"}</button>
    </form>
  </section></main>;
}

export default SignUpPage;
