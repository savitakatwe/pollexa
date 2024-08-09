import { SizableText, XStack, YStack } from "tamagui";
import React, { PropsWithChildren, useState } from "react";
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
  const [isSelected, setIsSelected] = useState(false);
  const handleOptionClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <XStack
      backgroundColor={isSelected ? "$accent" : "$optionBg"}
      padding={"$sp8"}
      borderRadius={"$br10"}
      alignItems={"center"}
      justifyContent={"space-between"}
      onPress={handleOptionClick} // Handle click event
      cursor="pointer" // Add pointer cursor to indicate clickable area
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
        <SizableText
          size={"$large"}
          color={isSelected ? "$optionBg" : "$questionFontColor"}
        >
          {optionText}
        </SizableText>
      </XStack>

      <SizableText
        size={"$small"}
        fontWeight={"600"}
        color={isSelected ? "$optionBg" : "$questionFontColor"}
      >
        {pollPercentage}
      </SizableText>
    </XStack>
  );
};
export default PollTextQuestion;
