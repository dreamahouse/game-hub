import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton>
        <SkeletonCircle size="10" />
      </Skeleton>
      <SkeletonText noOfLines={2}>
        <Box>ssdasd</Box>
      </SkeletonText>
    </HStack>
  );
};

export default GenreSkeleton;
