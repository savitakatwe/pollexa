import { Button, Image, SizableText, XStack, YStack } from "tamagui";
import { FlatList, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import PollBox from "@/components/PollBox/PollBox";
import ActivePollBox from "@/components/ActivePollBox";
import { Plus } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";
import firebase from "firebase/compat";
import firestore = firebase.firestore;

interface IPoll {
  question: string;
  pollList: string[];
  pollCreatedAt: Date;
}
const Discover = () => {
  const navigation = useNavigation();
  const [polls, setPolls] = useState<IPoll[]>([]);

  const getPolls = useCallback(() => {
    return firestore()
      .collection("Questions")
      .get()
      .then((querySnapshot) => {
        console.log("polls", querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          console.log(documentSnapshot.id, documentSnapshot.data());
          setPolls((prevState) => [
            ...prevState,
            {
              question: documentSnapshot.get("question"),
              pollList: documentSnapshot.get("pollList"),
              pollCreatedAt: documentSnapshot.get("pollCreatedAt"),
            },
          ]);
        });
      });
  }, []);
  useEffect(() => {
    console.log("polls", polls);
  }, [polls]);
  useEffect(() => {
    getPolls();
  }, [getPolls]);
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
            <FlatList
              data={polls}
              renderItem={({ item, index }) => {
                return (
                  <>
                    <PollBox
                      key={index}
                      avatarURL={require("../assets/Avatars/Avatar1.png")}
                      fullName={"John Smith"}
                      postTimeline={item.pollCreatedAt}
                      lastVoteTimeline={"LAST VOTED 1 HOUR AGO"}
                      questionText={item.question}
                      optionList={item.pollList}
                      pollPercentage={"12%"}
                    />
                  </>
                );
              }}
            />
          </YStack>
        </YStack>
      </SafeAreaView>
    </>
  );
};
export default Discover;
