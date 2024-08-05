import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendo,
  SiPlaystation5,
  SiPlaystation4,
  SiMacos,
  SiNintendoswitch,
  SiPlaystation3,
  SiPlaystationvita,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Platform from "../entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [name: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    xboxseriesx: FaXbox,
    xboxone: FaXbox,
    xbox360: FaXbox,
    xboxold: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    playstation5: SiPlaystation5,
    playstation4: SiPlaystation4,
    macos: SiMacos,
    nintendoswitch: SiNintendoswitch,
    playstation3: SiPlaystation3,
    psvita: SiPlaystationvita,
  };

  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug.split("-").join("")]}
          color="gray.500"
          fontSize={"18px"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
