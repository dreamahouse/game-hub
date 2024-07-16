import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, errors, isLoading } = useGames();

  // const skeleton = createArr(data.length); //创建骨架的个数和返回的数据长度一致
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {skeleton.map(
          (s) =>
            isLoading && (
              <GameCardContainer key={s}>
                <GameCardSkeleton key={s} />
              </GameCardContainer>
            )
        )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
