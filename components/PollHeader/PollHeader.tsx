import { Text } from "react-native";
import { Button, Image, Separator, SizableText, XStack, YStack } from "tamagui";
import React from "react";
import { CircleEllipsis } from "@tamagui/lucide-icons";
import PollBoxHead from "@/components/PollBoxHead";
import PollQuestion from "@/components/PollQuestion";

const PollHeader = () => {
  return (
    <>
      <YStack
        backgroundColor="$otherWhite"
        borderRadius={"$br16"}
        paddingHorizontal={"$sp20"}
      >
        <PollBoxHead />
        {/*line*/}
        <Separator marginVertical={10} backgroundColor={"$lineGray"} />
        <PollQuestion />
      </YStack>
    </>
  );
};
export default PollHeader;
