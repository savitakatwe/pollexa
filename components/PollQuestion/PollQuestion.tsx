import { SizableText, YStack } from "tamagui";
import React, { PropsWithChildren } from "react";
interface IPollQuestionProps {
  lastVoteTimeline: string;
  questionText: string;
}
const PollQuestion = ({
  lastVoteTimeline,
  questionText,
}: PropsWithChildren<IPollQuestionProps>) => {
  return (
    <>
      <YStack gap={"$sp5"}>
        <SizableText
          size={"$small"}
          fontWeight={"500"}
          color={"$timeFontColor"}
        >
          {lastVoteTimeline}
        </SizableText>
        <SizableText
          size={"$large"}
          color={"$questionFontColor"}
          fontWeight={"600"}
        >
          {questionText}
        </SizableText>
      </YStack>
    </>
  );
};
export default PollQuestion;
