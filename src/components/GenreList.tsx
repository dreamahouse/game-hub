import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenerList = ({ onSelectedGenre }: Props) => {
  const { data, errors, isLoading } = useGenres();
  if (errors) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={gener.image_background}
            />
            <Button
              onClick={() => onSelectedGenre(gener)}
              variant="link"
              fontSize="large"
            >
              {gener.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
