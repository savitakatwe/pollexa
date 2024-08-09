import { SizableText, YStack } from "tamagui";
import React from "react";

const PollQuestion = () => {
  return (
    <>
      <YStack gap={"$sp5"}>
        <SizableText
          size={"$small"}
          fontWeight={"500"}
          color={"$timeFontColor"}
        >
          LAST VOTED 1 HOUR AGO
        </SizableText>
        <SizableText
          size={"$large"}
          color={"$questionFontColor"}
          fontWeight={"600"}
        >
          Which way would you choose for your next vacation?
        </SizableText>
      </YStack>
    </>
  );
};
export default PollQuestion;
