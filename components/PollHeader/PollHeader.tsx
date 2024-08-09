import { Text } from "react-native";
import { Image, SizableText, XStack, YStack } from "tamagui";
import React from "react";

const PollHeader = () => {
  return (
    <>
      <YStack backgroundColor="$otherWhite" borderRadius={"$br16"}>
        <XStack
          paddingHorizontal={"$sp24"}
          paddingTop={"$sp24"}
          justifyContent={"space-between"}
        >
          <XStack alignItems={"center"} gap={"$sp4"}>
            <Image
              source={require("../../assets/Avatars/Avatar1.png")}
              alt="Discover"
              height={34}
              width={34}
            />
            <SizableText size={"$xLarge"}>John Smith</SizableText>
          </XStack>
          <XStack alignItems={"center"}>
            <SizableText size={"$large"} color={"$tertiary"}>
              2 months ago
            </SizableText>
          </XStack>
        </XStack>

        {/*line*/}
        <YStack
          alignContent={"center"}
          height={1}
          backgroundColor={"black"}
          width={"80%"}
          marginVertical={"$sp4"}
        />
      </YStack>
    </>
  );
};
export default PollHeader;
