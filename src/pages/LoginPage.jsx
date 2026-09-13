import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../store/actions/clientActions";
import "./LoginPage.css";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  async function submit(values) {
    try {
      await dispatch(login({ credentials: { email: values.email, password: values.password }, rememberMe: values.rememberMe }));
      toast.success("Giriş başarılı.");
      if (history.length > 2) history.goBack();
      else history.push("/");
    } catch (error) {
      toast.error(error.response?.data?.message || error.response?.data?.error || "E-posta veya şifre hatalı.");
    }
  }

  return <main className="login-page"><section className="login-card" aria-labelledby="login-title">
    <button type="button" className="login-back" onClick={() => history.goBack()}>← Mağazaya dön</button>
    <p className="login-kicker">WELCOME BACK</p><h1 id="login-title">Login</h1><p className="login-copy">Hesabına giriş yap ve alışverişe devam et.</p>
    <form onSubmit={handleSubmit(submit)} noValidate>
      <label className="login-field"><span>E-posta</span><input type="email" autoComplete="email" {...register("email", { required: "E-posta zorunludur.", pattern: { value: /^\S+@\S+\.\S+$/, message: "Geçerli bir e-posta girin." } })} />{errors.email && <small>{errors.email.message}</small>}</label>
      <label className="login-field"><span>Şifre</span><input type="password" autoComplete="current-password" {...register("password", { required: "Şifre zorunludur." })} />{errors.password && <small>{errors.password.message}</small>}</label>
      <label className="remember-me"><input type="checkbox" {...register("rememberMe")} /> Beni hatırla</label>
      <button className="login-submit" disabled={isSubmitting} type="submit">{isSubmitting && <i className="login-spinner" />}{isSubmitting ? "GİRİŞ YAPILIYOR" : "GİRİŞ YAP"}</button>
    </form>
  </section></main>;
}

export default LoginPage;
