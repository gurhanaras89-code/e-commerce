import { SET_LANGUAGE, SET_ROLES, SET_THEME, SET_USER } from "../actionTypes";
import apiClient, { clearAuthorizationToken, setAuthorizationToken } from "../../services/apiClient";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

let rolesRequest = null;

// The request runs only when a page actually needs roles and the store is empty.
export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length) return Promise.resolve(roles);
  if (rolesRequest) return rolesRequest;

  rolesRequest = apiClient.get("/roles")
    .then(({ data }) => {
      const fetchedRoles = Array.isArray(data) ? data : data.roles || [];
      dispatch(setRoles(fetchedRoles));
      return fetchedRoles;
    })
    .finally(() => { rolesRequest = null; });

  return rolesRequest;
};

export const login = ({ credentials, rememberMe }) => async (dispatch) => {
  const { data } = await apiClient.post("/login", credentials);
  setAuthorizationToken(data.token);
  if (rememberMe) localStorage.setItem("token", data.token);
  else localStorage.removeItem("token");
  dispatch(setUser(data));
  return data;
};

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    setAuthorizationToken(token);
    const { data } = await apiClient.get("/verify");
    const renewedToken = data.token || token;
    localStorage.setItem("token", renewedToken);
    setAuthorizationToken(renewedToken);
    dispatch(setUser(data));
    return data;
  } catch {
    localStorage.removeItem("token");
    clearAuthorizationToken();
    dispatch(setUser({}));
    return null;
  }
};
