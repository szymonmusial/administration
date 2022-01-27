import { useCookies } from "@vueuse/integrations";

const COOKIE_NAME: string = "JwtCookie";
const cookies = useCookies([COOKIE_NAME]);

export const setTokenToCookie = (val: string) => {
  cookies.set(COOKIE_NAME, val);
};

export const getTokenFromCookie = (): string => {
  return cookies.get(COOKIE_NAME) || "";
};

export const removeTokenFromCookie = () => {
  return cookies.remove(COOKIE_NAME);
};
