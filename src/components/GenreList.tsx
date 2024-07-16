import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenerList = () => {
  const { data } = useGenres();
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
            <Text fontSize="large">{gener.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
