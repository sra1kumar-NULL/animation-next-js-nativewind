"use client";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { EyeIcon, PlusIcon } from "lucide-react-native";
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
      <Box className="flex flex-row justify-end items-center my-16 max-w-[700px] lg:my-24 lg:mx-32 ">
        <Box
          className={`flex ${
            isAnimated
              ? "flex-col rounded-3xl w-[35%]"
              : "flex-row rounded-full w-full gap-6"
          } items-center justify-center  bg-white py-4 transition-width duration-300 ease-in-out relative`}
        >
          {isAnimated ? (
            <>
              <Text className="font-normal text-xl text-black p-2 w-[80%]">
                Create
              </Text>
            </>
          ) : (
            <>
              <Box className="w-10 h-10 rounded-full bg-amber-500 mr-6">
                <Image src="/lightbulb-person.svg" alt="logo" fill priority />
              </Box>
              <Text className="font-normal text-xl text-black p-2">Guilds</Text>
              <Text className="font-normal text-xl text-black p-2">Events</Text>
              <Text className="font-normal text-xl text-black p-2">
                Presentations
              </Text>
            </>
          )}
          <Pressable
            className={`w-10 absolute h-10 rounded-full  bg-background-50 border border-background-200 hover:cursor-pointer ${
              isAnimated ? "right-[30%] top-[7%]" : "right-[12%]"
            }`}
            onPress={() => setIsAnimated((prev) => !prev)}
          >
            <Box
              className={`delay-200 ${
                isAnimated ? "duration-300 rotate-45" : "duration-300 rotate-0"
              }`}
            >
              <Icon as={PlusIcon} className={`w-10 h-10`} />
            </Box>
          </Pressable>
          <Box
            className={`w-10 h-10 rounded-full absolute right-[2%] bg-amber-500 ${
              isAnimated ? "hidden" : "flex"
            } `}
          >
            <Image src="/lightbulb-person.svg" alt="logo" fill priority />
          </Box>
          <Box
            className={`flex flex-col gap-4 mt-4  ${
              isAnimated
                ? "w-[180px] h-full"
                : "w-[0px] h-[0px] overflow-hidden"
            } transition-width duration-300 delay-300`}
          >
            <Box className="flex flex-row items-center">
              <Icon as={EyeIcon} className={`w-8 h-8 `} />
              <Text className="font-normal text-xl text-black p-2">Guilds</Text>
            </Box>
            <Box className="flex flex-row items-center">
              <Icon as={EyeIcon} className={`w-8 h-8 `} />
              <Text className="font-normal text-xl text-black p-2">Events</Text>
            </Box>
            <Box className="flex flex-row items-center">
              <Icon as={EyeIcon} className={`w-8 h-8 `} />
              <Text className="font-normal text-xl text-black p-2">
                Presentations
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
