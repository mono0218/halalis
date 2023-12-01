import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  Flex,
  Badge,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
  Spacer,
  Pressable,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      
      <VStack space={6} alignItems="center">
        <Box alignItems="center" >
          <Pressable onPress={() => console.log("I'm Pressed")} borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">
            <Box>
              <Text color="coolGray.800" fontWeight="medium" fontSize="6xl">
                日本語
              </Text>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center" >
          <Pressable onPress={() => console.log("I'm Pressed")} borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">
            <Box>
              <Link href=""></Link>
              <Text color="coolGray.800" fontWeight="medium" fontSize="6xl">
                English
              </Text>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center" >
          <Pressable onPress={() => console.log("I'm Pressed")} borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">
            <Box>
              <Link href=""></Link>
              <Text color="coolGray.800" fontWeight="medium" fontSize="6xl">
                中文
              </Text>
            </Box>
          </Pressable>
        </Box>
      </VStack>

      
    </NativeBaseProvider>
  );
}