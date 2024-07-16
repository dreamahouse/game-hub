import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenerList = () => {
  const { data, errors, isLoading } = useGenres();
  if (errors) return null;

  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY="5px">
          {isLoading && <Spinner />}
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={gener.image_background}
            />
            <Text fontSize="large">{gener.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
