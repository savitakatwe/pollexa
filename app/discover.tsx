import { Button, Image, SizableText, XStack, YStack } from "tamagui";
import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import PollHeader from "@/components/PollHeader";
//import IconRight from "../assets/icons/arrowRight.svg";

const Discover = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <YStack paddingHorizontal={"$sp16"}>
          <XStack
            paddingVertical={"$sp4"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image
              source={require("../assets/Avatars/Avatar1.png")}
              alt="Discover"
              height={34}
              width={34}
            />
            <SizableText color={"$accent"} size={"$xxLarge"}>
              +
            </SizableText>
          </XStack>
          <YStack gap={"$sp16"}>
            <SizableText
              paddingVertical={"$sp8"}
              size={"$xxLarge"}
              fontWeight={"700"}
            >
              Discover
            </SizableText>
            <XStack
              alignItems={"center"}
              backgroundColor={"$accent"}
              borderRadius={"$br16"}
              paddingVertical={"$sp16"}
              paddingHorizontal={"$sp24"}
              justifyContent={"space-between"}
            >
              <YStack>
                <SizableText size={"$xxLarge"} fontWeight={600} color={"white"}>
                  2 Active Polls
                </SizableText>
                <SizableText size={"$large"} color={"#FFFFFF50"}>
                  See Details
                </SizableText>
              </YStack>
              <YStack
                backgroundColor={"white"}
                width={30}
                height={30}
                borderRadius={"$br5"}
                alignItems={"center"}
                justifyContent={"center"}
              ></YStack>
            </XStack>
            <PollHeader />
          </YStack>
        </YStack>
      </SafeAreaView>
    </>
  );
};
export default Discover;
