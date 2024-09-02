import React, { useCallback, useEffect } from "react";
import { Dimensions, FlatList, SafeAreaView } from "react-native";
import { Button, H3, Image, SizableText, XStack, YStack } from "tamagui";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import { useNavigation } from "expo-router";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import { db } from "@/firebaseConfig"; // Ensure the correct path to your Firebase config
import { doc, getDoc, setDoc } from "firebase/firestore";

interface IData {
  id: number;
  imageSrc: string;
  title: string;
  subTitle: string;
}

const Data: IData[] = [
  {
    id: 1,
    imageSrc: "onboardingImage1",
    title: "Engaging Polls",
    subTitle:
      "Craft your polls, unlock a world of opinion with multiple choices.",
  },
  {
    id: 2,
    imageSrc: "onboardingImage2",
    title: "Visually Appealing",
    subTitle: "Enhance with visuals; limitless creativity, endless options.",
  },
  {
    id: 3,
    imageSrc: "onboardingImage3",
    title: "Discover Insights",
    subTitle: "Uncover the story behind polls; clarity meets depth in reports.",
  },
];

const imageSources: { [key: string]: any } = {
  onboardingImage1: require("../assets/images/onboardingImage1.png"),
  onboardingImage2: require("../assets/images/onboardingImage2.png"),
  onboardingImage3: require("../assets/images/onboardingImage3.png"),
};
const { width } = Dimensions.get("window");

const StartScreen = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const navigation = useNavigation();
  const { user } = useUser();
  const firestore = firebase.firestore();

  useEffect(() => {
    const checkAndInsertUser = async () => {
      try {
        console.log(user);
        // @ts-ignore
        const userDocRef = doc(db, "users", user.id);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          // User doesn't exist, so add them to the Firestore
          await setDoc(userDocRef, {
            // @ts-ignore
            id: user.id,
            // @ts-ignore
            email: user.emailAddresses[0].emailAddress,
            // @ts-ignore
            username: user.fullName,
            // @ts-ignore
            imageUrl: user.imageUrl,
            // @ts-ignore
            createdAt: user.createdAt,
            updatedAt: new Date(),
          });
          console.log("User added to Firestore");
        } else {
          console.log("User already exists in Firestore");
        }
      } catch (error) {
        console.error("Error checking or adding user: ", error);
      }
    };

    if (user) {
      checkAndInsertUser();
    }
  }, [user]);

  const signIn = useCallback(async () => {
    const { createdSessionId, setActive } = await startOAuthFlow();
    if (createdSessionId) {
      setActive?.({ session: createdSessionId });
    }
    navigation.navigate("discover");
  }, [navigation, startOAuthFlow]);

  return (
    <>
      <SafeAreaView>
        <FlatList
          pagingEnabled={true}
          horizontal={true}
          data={Data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <YStack width={width} alignItems={"center"} padding={32}>
                <YStack gap={"$sp12"}>
                  <H3 textAlign="center">{item.title}</H3>
                  <SizableText textAlign="center" size={"$xxLarge"}>
                    {item.subTitle}
                  </SizableText>
                </YStack>
                <Image
                  source={imageSources[item.imageSrc]}
                  height={428}
                  width={428}
                />
              </YStack>
            </>
          )}
        />
        <XStack justifyContent={"center"}>
          <Button
            backgroundColor={"$accent"}
            flexGrow={1}
            fontSize={"$large"}
            marginHorizontal={"$sp20"}
            borderRadius={"$br16"}
            color={"$otherWhite"}
            onPress={signIn}
          >
            Sign in with Google
          </Button>
        </XStack>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;
