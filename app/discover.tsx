import { Image, SizableText, XStack, YStack } from "tamagui";
import { SafeAreaView, Text, View } from "react-native";
import React from "react";

const Discover = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <YStack paddingHorizontal={"$sp16"}>
          <XStack paddingVertical={"$sp4"}>
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
          <YStack gap={"$sp24"}>
            <SizableText
              paddingVertical={"$sp8"}
              size={"$xxLarge"}
              fontWeight={"700"}
            >
              Discover
            </SizableText>
            <XStack
              backgroundColor={"$primary100"}
              borderRadius={"$br16"}
              paddingVertical={"$sp16"}
              paddingHorizontal={"$sp24"}
            >
              <YStack>
                <SizableText size={"$xxLarge"} fontWeight={600} color={"white"}>
                  2 Active Polls
                </SizableText>
                <SizableText size={"$large"} color={"white"}>
                  See Details
                </SizableText>
              </YStack>
              <View>
                <SizableText></SizableText>
              </View>
            </XStack>
          </YStack>
        </YStack>
      </SafeAreaView>
    </>
  );
};
export default Discover;
