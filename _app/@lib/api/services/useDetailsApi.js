import useApi from "../../hooks/useApi";

export const useDetailsApi = (url) => {
  const api = useApi();
  const { isLoading, data, error } = api.useGet(url);
  return { isLoading, data, error };
};
