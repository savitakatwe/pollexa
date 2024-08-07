import React from "react";
import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native";
import { Button, H1, H6, Heading, Image, XStack, YStack } from "tamagui";

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
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          pagingEnabled={true}
          horizontal={true}
          data={Data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <YStack width={width} alignItems={"center"} padding={32}>
                <Heading textAlign="center">{item.title}</Heading>

                <XStack>
                  <H6 textAlign="center" width={width * 0.8}>
                    {item.subTitle}
                  </H6>
                </XStack>

                <Image
                  source={imageSources[item.imageSrc]}
                  height={428}
                  width={428}
                />
              </YStack>
            </>
          )}
        />
        <Button>Sign in with Google</Button>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;
