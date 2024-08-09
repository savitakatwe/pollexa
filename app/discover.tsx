import { Button, Image, SizableText, XStack, YStack } from "tamagui";
import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import PollHeader from "@/components/PollHeader/PollHeader";
import ActivePollBox from "@/components/ActivePollBox";
import { Plus } from "@tamagui/lucide-icons";

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
              alt="Avatar1"
              height={34}
              width={34}
            />
            <Button icon={<Plus size={"$sz22"} color={"$accent"} />}></Button>
          </XStack>
          <YStack gap={"$sp16"}>
            <SizableText
              paddingVertical={"$sp8"}
              size={"$xxLarge"}
              fontWeight={"700"}
            >
              Discover
            </SizableText>
            <ActivePollBox heading={"2 Active Polls"} />
            <PollHeader />
          </YStack>
        </YStack>
      </SafeAreaView>
    </>
  );
};
export default Discover;
