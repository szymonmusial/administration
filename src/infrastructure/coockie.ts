import { useCookies } from "@vueuse/integrations";

const COOKIE_NAME = "JwtCookie";
const cookies = useCookies([COOKIE_NAME]);

export const setTokenToCookie = (val) => {
  cookies.set(COOKIE_NAME, val);
};

export const getTokenFromCookie = () => {
  return cookies.get(COOKIE_NAME) || "";
};

export const removeTokenFromCookie = () => {
  return cookies.remove(COOKIE_NAME);
};
