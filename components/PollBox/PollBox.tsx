import { Separator, SizableText, YStack } from "tamagui";
import React, { PropsWithChildren } from "react";
import PollBoxHead from "@/components/PollBoxHead";
import PollQuestion from "@/components/PollQuestion";
import PollOption from "@/components/PollOption";
import PollTextQuestion from "@/components/PollTextQuestion";
import { ImageSourcePropType } from "react-native";

interface IPollBoxProps {
  avatarURL: ImageSourcePropType;
  fullName: string;
  postTimeline: string;
  lastVoteTimeline: string;
  questionText: string;
  optionPoint: string;
  optionText: string;
  pollPercentage: string;
}
const PollBox = ({
  avatarURL,
  fullName,
  postTimeline,
  lastVoteTimeline,
  questionText,
  optionPoint,
  optionText,
  pollPercentage,
}: PropsWithChildren<IPollBoxProps>) => {
  return (
    <>
      <YStack
        backgroundColor="$otherWhite"
        borderRadius={"$br16"}
        paddingHorizontal={"$sp20"}
        paddingVertical={"$sp20"}
      >
        <PollBoxHead
          avatarURL={avatarURL}
          fullName={fullName}
          postTimeline={postTimeline}
        />
        {/*line*/}
        <Separator marginVertical={10} backgroundColor={"$lineGray"} />
        <YStack marginTop={"$sp12"} marginBottom={"$sp20"}>
          <PollQuestion
            lastVoteTimeline={lastVoteTimeline}
            questionText={questionText}
          />
        </YStack>

        <PollTextQuestion
          optionPoint={optionPoint}
          optionText={optionText}
          pollPercentage={pollPercentage}
        />

        <YStack marginTop={"$sp12"}>
          <SizableText size={"$small"} color={"$tertiary"}>
            62 Total Votes
          </SizableText>
        </YStack>
      </YStack>
    </>
  );
};
export default PollBox;
