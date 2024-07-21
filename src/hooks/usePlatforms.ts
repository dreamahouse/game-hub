// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
// import platforms from "../data/platforms";
// import apiClient from "../services/api-client";
// import { GetResponse } from "./useData";
import APIClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
