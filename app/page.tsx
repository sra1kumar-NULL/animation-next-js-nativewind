"use client";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { BugIcon, BusIcon, CogIcon, EyeIcon, PlusIcon } from "lucide-react-native";
import { Pressable } from "@/components/ui/pressable";
import React from "react";

export default function Home() {
  return (
    <main>
      <Container />
    </main>
  );
}

const Container = () => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  return (
    <Box className="flex-1 bg-black h-[100vh]">
      <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
        <Image src="/gradient.svg" alt="Gradient" fill priority />
      </Box>
      <Box className="flex flex-row justify-end items-center my-16 max-w-[600px] lg:my-24 lg:mx-32 ">
        <Box
          // className={`flex ${
          //   isAnimated
          //     ? "flex-column rounded-full w-[35%] "
          //     : "flex-row rounded-full w-full gap-6 "
          // } items-center   bg-white py-4  transition-width delay-1000 duration-700 ease-in-out relative`}
          className={`flex ${
            isAnimated ? "flex-col " : "flex-row "
          }   items-center bg-white py-4 realtive w-fit rounded-[35px]
            `}
        >
          <Box
            className={`flex flex-row ${
              isAnimated ? "w-[200px] " : "w-[450px] gap-6 "
            } items-center justify-left  transition-width  duration-300 ease-in-out mx-3 overflow-hidden`}
          >
            {isAnimated ? (
              <>
                <Text className="font-normal text-xl text-black p-2 text-left animate-[appear_1s_ease-in-out]">
                  Create
                </Text>
              </>
            ) : (
              <>
                <Box className="w-10 h-10 rounded-full bg-amber-500 ">
                  <Image src="/lightbulb-person.svg" alt="logo" fill priority />
                </Box>
                <Text className="font-normal text-xl text-black p-2">
                  Guilds
                </Text>
                <Text className="font-normal text-xl text-black p-2">
                  Events
                </Text>
                <Text className="font-normal text-xl text-black p-2">
                  Presentations
                </Text>
              </>
            )}
          </Box>
          <Pressable
            className={`z-50 w-10  h-10 rounded-full absolute right-4 top-4 bg-background-50 border border-background-200 hover:cursor-pointer mx-2`}
            onPress={() => setIsAnimated((prev) => !prev)}
          >
            <Box
              className={`delay-100 duration-100 ${
                isAnimated ? "rotate-45" : "rotate-0"
              }`}
            >
              <Icon as={PlusIcon} className={`w-10 h-10`} />
            </Box>
          </Pressable>
          {/* <Box
            className={`${
              isAnimated ? "w-0 h-0" : " w-10 h-10"
            }  rounded-full ml-2 mr-2  bg-amber-500 transition-width duration-300 flex-shrink-0`}
          >
            <Image src="/lightbulb-person.svg" alt="logo" fill priority />
          </Box> */}
          <Box
            className={`${
              isAnimated
                ? "w-[180px] h-full opacity-100"
                : "w-[0px] h-[0px]  opacity-0 hidden"
            } transition-opacity duration-300 delay-300 mt-2`}
          >
            <Box
              className={`flex flex-col gap-4 animate-[appear_1s_ease-in-out]`}
            >
              <Box className="flex flex-row items-center">
                <Icon as={BugIcon} className={`w-8 h-8 `} />
                <Text className="font-normal text-xl text-black p-2 ">
                  Guilds
                </Text>
              </Box>
              <Box className="flex flex-row items-center">
                <Icon as={BusIcon} className={`w-8 h-8 `} />
                <Text className="font-normal text-xl text-black p-2">
                  Events
                </Text>
              </Box>
              <Box className="flex flex-row items-center">
                <Icon as={CogIcon} className={`w-8 h-8 `} />
                <Text className="font-normal text-xl text-black p-2">
                  Presentations
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
