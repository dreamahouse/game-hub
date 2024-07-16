import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenerList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
function App() {
  const [selectedGenre, setSlectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSlectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      color="blackAlpha"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenerList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSlectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSlectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
