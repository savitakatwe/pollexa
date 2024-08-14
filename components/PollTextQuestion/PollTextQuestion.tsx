import { SizableText, XStack, YStack } from "tamagui";
import React, { PropsWithChildren, useCallback, useState } from "react";
import { map } from "@firebase/util";

interface IPollTextQuestionProps {
  optionList: string[];
  optionPoint: string;
  optionText: string;
  pollPercentage: string;
}

const PollTextQuestion = ({
  optionList,
  optionPoint,
  optionText,
  pollPercentage,
}: PropsWithChildren<IPollTextQuestionProps>) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleOptionClick = () => {
    setIsSelected(!isSelected);
  };
  const NumberToAlphabet = useCallback((letterIndex: number) => {
    return String.fromCharCode(letterIndex + "A".charCodeAt(0));
  }, []);
  return (
    <>
      {optionList?.map((option, index) => (
        <XStack
          key={index}
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
                {NumberToAlphabet(index)}
              </SizableText>
            </XStack>
            <SizableText
              size={"$large"}
              color={isSelected ? "$optionBg" : "$questionFontColor"}
            >
              {option}
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
      ))}
    </>
  );
};
export default PollTextQuestion;
