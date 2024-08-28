import React, { useCallback } from "react";
import { Dimensions, FlatList, SafeAreaView } from "react-native";
import { Button, H3, Image, SizableText, XStack, YStack } from "tamagui";
import { useOAuth } from "@clerk/clerk-expo";

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

  const signIn = useCallback(async () => {
    const { createdSessionId, setActive } = await startOAuthFlow();
    if (createdSessionId) {
      setActive?.({ session: createdSessionId });
    }
  }, [startOAuthFlow]);

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
        <XStack paddingHorizontal={24}>
          <Button onPress={signIn}>Sign in with Google</Button>
        </XStack>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;
