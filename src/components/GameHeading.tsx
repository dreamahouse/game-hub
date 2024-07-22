import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const { data: plateform } = usePlatforms();
  const genre = data.results.find((g) => g.id === gameQuery.genreId);
  const platform = plateform.results.find((p) => p.id === gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} as={"h1"} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
