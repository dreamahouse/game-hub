import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GetResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<GetResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
  });
// useData<Game>(
//   "/games",
//   {
//     params: {
//       genres: gameQuery.genre?.id,
//       platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText,
//     },
//   },
//   [gameQuery]
// );
export default useGames;
