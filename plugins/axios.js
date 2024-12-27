import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

  let api = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true,
    headers: {
      common: {
        Accept: "application/json",
      },
    },
  });

  return {
    provide: {
      axios: api,
    },
  };
});
