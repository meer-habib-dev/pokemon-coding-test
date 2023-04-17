import useApi from "../../hooks/useApi";

export const usePokemonApi = () => {
  const api = useApi();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    api.useLoadMore("pokemon");
  const handleLoadMore = () => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  };
  return { handleLoadMore, data, isFetchingNextPage, isLoading };
};
