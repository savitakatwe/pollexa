import { SizableText, YStack, XStack, Button } from "tamagui";
import React, { PropsWithChildren } from "react";
import { ArrowRight } from "@tamagui/lucide-icons";

interface IActivePollBoxProps {
  heading: string;
}
const ActivePollBox = ({ heading }: PropsWithChildren<IActivePollBoxProps>) => {
  return (
    <>
      <XStack
        alignItems={"center"}
        backgroundColor={"$accent"}
        borderRadius={"$br16"}
        paddingVertical={"$sp16"}
        paddingHorizontal={"$sp20"}
        justifyContent={"space-between"}
      >
        <YStack>
          <SizableText size={"$xxLarge"} fontWeight={600} color={"white"}>
            {heading}
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
        >
          <Button
            icon={<ArrowRight size={"$sz22"} color={"$accent"} />}
          ></Button>
        </YStack>
      </XStack>
    </>
  );
};
export default ActivePollBox;
