import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}
interface GetGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GetGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setErrors(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, errors, isLoading };
};
export default useGames;
