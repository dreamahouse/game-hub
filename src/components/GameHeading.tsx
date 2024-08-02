import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data } = useGenres();
  const { data: plateform } = usePlatforms();
  const genre = data?.results.find((g) => g.id === gameQuery.genreId);
  const platform = plateform?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} as={"h1"} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
