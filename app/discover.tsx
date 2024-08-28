import { Button, Image, SizableText, XStack, YStack } from "tamagui";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { PollBox } from "@/components";
import { ActivePollBox } from "@/components";
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

  const getPolls = useCallback(async () => {
    const querySnapshot = await firestore().collection("Questions").get();
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
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <>
            <Image
              source={require("../assets/Avatars/Avatar1.png")}
              alt="Avatar1"
              height={34}
              width={34}
            />
          </>
        );
      },
      headerRight: () => {
        return (
          <Plus
            size={"$sz22"}
            color={"$accent"}
            onPress={() => {
              navigation.navigate("createPoll");
            }}
          />
        );
      },
    });
  }, [navigation]);
  useEffect(() => {
    getPolls();
  }, [getPolls]);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <YStack>
          <YStack gap={"$sp16"}>
            <FlatList
              ListHeaderComponent={
                <>
                  <YStack paddingHorizontal={"$sp16"}>
                    <SizableText
                      paddingVertical={"$sp8"}
                      size={"$xxLarge"}
                      fontWeight={"700"}
                    >
                      Discover
                    </SizableText>
                    <ActivePollBox heading={"2 Active Polls"} />
                  </YStack>
                </>
              }
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
