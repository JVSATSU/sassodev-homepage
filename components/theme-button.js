import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Mudar tema"
      colorScheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  );
};
export default ThemeButton
