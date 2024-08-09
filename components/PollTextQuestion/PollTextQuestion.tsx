import { SizableText, XStack, YStack } from "tamagui";
import React from "react";

const PollTextQuestion = () => {
  return (
    <>
      <XStack
        backgroundColor={"$accent"}
        padding={"$sp8"}
        borderRadius={"$br10"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <XStack alignItems={"center"} gap={"$sp8"}>
          <XStack
            width={26}
            height={26}
            backgroundColor={"$otherWhite"}
            borderRadius={"$br16"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SizableText size={"$large"} fontWeight={"600"}>
              A
            </SizableText>
          </XStack>
          <SizableText size={"$large"} color={"$otherWhite"}>
            This is a no brainer, study!
          </SizableText>
        </XStack>

        <SizableText size={"$small"} fontWeight={"600"} color={"$otherWhite"}>
          12%
        </SizableText>
      </XStack>
    </>
  );
};
export default PollTextQuestion;
