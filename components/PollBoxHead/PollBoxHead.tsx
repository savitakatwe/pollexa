import { Button, Image, SizableText, XStack } from "tamagui";
import { CircleEllipsis } from "@tamagui/lucide-icons";
import React from "react";

const PollBoxHead = () => {
  return (
    <>
      <XStack paddingTop={"$sp20"} justifyContent={"space-between"}>
        <XStack alignItems={"center"} gap={"$sp5"}>
          <Image
            source={require("../../assets/Avatars/Avatar1.png")}
            alt="Discover"
            height={34}
            width={34}
          />
          <SizableText size={"$xLarge"}>John Smith</SizableText>
        </XStack>
        <XStack alignItems={"center"} gap={"$sp5"}>
          <SizableText size={"$large"} color={"$tertiary"}>
            2 months ago
          </SizableText>
          <Button
            icon={<CircleEllipsis size={"$sz22"} color={"$tertiary"} />}
          ></Button>
        </XStack>
      </XStack>
    </>
  );
};
export default PollBoxHead;
