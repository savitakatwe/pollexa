import { SizableText, XStack, YStack } from "tamagui";
import React, { PropsWithChildren } from "react";
interface IPollTextQuestionProps {
  optionPoint: string;
  optionText: string;
  pollPercentage: string;
}
const PollTextQuestion = ({
  optionPoint,
  optionText,
  pollPercentage,
}: PropsWithChildren<IPollTextQuestionProps>) => {
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
              {optionPoint}
            </SizableText>
          </XStack>
          <SizableText size={"$large"} color={"$otherWhite"}>
            {optionText}
          </SizableText>
        </XStack>

        <SizableText size={"$small"} fontWeight={"600"} color={"$otherWhite"}>
          {pollPercentage}
        </SizableText>
      </XStack>
    </>
  );
};
export default PollTextQuestion;
