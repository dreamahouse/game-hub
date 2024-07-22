import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import sliceWord from "../utilities/slice-word";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenerList = ({ selectedGenreId, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              // color={genre.id === selectedGenre?.id ? "#9AE6B4" : "white"}
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="large"
              title={genre.name}
            >
              {sliceWord(genre.name, 10)}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
