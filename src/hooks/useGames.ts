import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../store";
import APIClient from "../services/api-client";
import { GetResponse } from "../services/api-client";
import ms from "ms";
import Game from "../entities/Game";

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
    getNextPageParam: (lastPage, allPages) => {
      //lastPage:{next:"...",results:[page...]}每一页的数据
      //allPages是所有页面的数据：allPages:[page:[],page:[]]
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGames;
