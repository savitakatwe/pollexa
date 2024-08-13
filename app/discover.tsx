import { Button, Image, SizableText, XStack, YStack } from "tamagui";
import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import PollBox from "@/components/PollBox/PollBox";
import ActivePollBox from "@/components/ActivePollBox";
import { Plus } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";

const Discover = () => {
  const navigation = useNavigation();
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
            <Button
              icon={
                <Plus
                  size={"$sz22"}
                  color={"$accent"}
                  onPress={() => {
                    navigation.navigate("createPoll");
                  }}
                />
              }
            ></Button>
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
            <PollBox
              avatarURL={require("../assets/Avatars/Avatar1.png")}
              fullName={"John Smith"}
              postTimeline={"2 months ago"}
              lastVoteTimeline={"LAST VOTED 1 HOUR AGO"}
              questionText={
                "My friend just invited me to his birthday party but I have an exam tomorrow."
              }
              optionPoint={"A"}
              optionText={"This is a no brainer, study!"}
              pollPercentage={"12%"}
            />
          </YStack>
        </YStack>
      </SafeAreaView>
    </>
  );
};
export default Discover;
