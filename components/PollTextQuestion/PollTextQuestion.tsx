import { SizableText, XStack } from "tamagui";
import React, { PropsWithChildren, useCallback, useState } from "react";

interface IPollTextQuestionProps {
  optionList: string[];
  pollPercentage: string;
}

const PollTextQuestion = ({
  optionList,
  pollPercentage,
}: PropsWithChildren<IPollTextQuestionProps>) => {
  const [isSelectedIndex, setIsSelectedIndex] = useState<number>();
  const handleOptionClick = (index: number) => {
    setIsSelectedIndex(index);
  };
  const NumberToAlphabet = useCallback((letterIndex: number) => {
    return String.fromCharCode(letterIndex + "A".charCodeAt(0));
  }, []);
  return (
    <>
      {optionList?.map((option, index) => (
        <XStack
          key={index}
          backgroundColor={isSelectedIndex === index ? "$accent" : "$optionBg"}
          padding={"$sp8"}
          borderRadius={"$br10"}
          alignItems={"center"}
          justifyContent={"space-between"}
          onPress={() => handleOptionClick(index)} // Handle click event
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
              color={
                isSelectedIndex === index ? "$optionBg" : "$questionFontColor"
              }
            >
              {option}
            </SizableText>
          </XStack>

          <SizableText
            size={"$small"}
            fontWeight={"600"}
            color={
              isSelectedIndex === index ? "$optionBg" : "$questionFontColor"
            }
          >
            {pollPercentage}
          </SizableText>
        </XStack>
      ))}
    </>
  );
};
export default PollTextQuestion;
