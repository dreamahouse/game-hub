// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
// import apiClient from "../services/api-client";
// import { GetResponse } from "./useData";
import APIClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, next: "", results: genres },
  });

export default useGenres;
