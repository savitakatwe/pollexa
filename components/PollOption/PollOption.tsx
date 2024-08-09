import { SizableText, YStack } from "tamagui";
import React, { PropsWithChildren } from "react";

const PollOption = () => {
  return (
    <>
      <YStack></YStack>
      <SizableText size={"$small"} color={"$tertiary"}>
        62 Total Votes
      </SizableText>
    </>
  );
};
export default PollOption;
