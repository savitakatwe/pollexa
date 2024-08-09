import { Button, Image, SizableText, XStack } from "tamagui";
import { CircleEllipsis } from "@tamagui/lucide-icons";
import React, { PropsWithChildren } from "react";
import { ImageSourcePropType } from "react-native";

interface IPollBoxHeadProps {
  avatarURL: ImageSourcePropType;
  fullName: string;
  postTimeline: string;
}
const PollBoxHead = ({
  avatarURL,
  fullName,
  postTimeline,
}: PropsWithChildren<IPollBoxHeadProps>) => {
  return (
    <>
      <XStack justifyContent={"space-between"}>
        <XStack alignItems={"center"} gap={"$sp5"}>
          <Image source={avatarURL} alt="Discover" height={34} width={34} />
          <SizableText size={"$xLarge"}>{fullName}</SizableText>
        </XStack>
        <XStack alignItems={"center"} gap={"$sp5"}>
          <SizableText size={"$large"} color={"$tertiary"}>
            {postTimeline}
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
