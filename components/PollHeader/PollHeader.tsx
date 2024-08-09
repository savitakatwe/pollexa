import { Text } from "react-native";
import { Button, Image, Separator, SizableText, XStack, YStack } from "tamagui";
import React from "react";
import { CircleEllipsis } from "@tamagui/lucide-icons";
import PollBoxHead from "@/components/PollBoxHead";
import PollQuestion from "@/components/PollQuestion";
import PollOption from "@/components/PollOption";
import PollTextQuestion from "@/components/PollTextQuestion";

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
        <PollTextQuestion />
        <PollOption></PollOption>
      </YStack>
    </>
  );
};
export default PollHeader;
