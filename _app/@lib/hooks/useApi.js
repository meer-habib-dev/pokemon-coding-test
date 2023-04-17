import { useQuery,  useInfiniteQuery } from "react-query";
import api from "../api/config";
const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
function useApi() {
  function useLoadMore(query_key, options = {}) {
    return useInfiniteQuery(
      query_key,
      async ({ key, nextPageUrl = API_ENDPOINT }) => {
        try {
          const r = await api.get(nextPageUrl);
          return r;
        } catch (error) {
          return error;
        }
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage?.data?.next;
        },
      }
    );
  }
  function useGet(url, options = {}) {
    return useQuery([url, options], async () => {
      try {
        return await api.get(url, options);
      } catch (error) {
        return error;
      }
    });
  }

  return { useGet, useLoadMore };
}

export default useApi;
