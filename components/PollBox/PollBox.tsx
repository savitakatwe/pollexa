import { Separator, SizableText, YStack } from "tamagui";
import React, { PropsWithChildren } from "react";
import { PollBoxHead } from "@/components";
import { PollQuestion } from "@/components";
import { PollTextOptions } from "@/components";
import { ImageSourcePropType } from "react-native";

interface IPollBoxProps {
  avatarURL: ImageSourcePropType;
  fullName: string;
  postTimeline: Date;
  lastVoteTimeline: string;
  questionText: string;
  optionList: string[];
  pollPercentage: string;
}
const PollBox = ({
  avatarURL,
  fullName,
  postTimeline,
  lastVoteTimeline,
  questionText,
  optionList,
  pollPercentage,
}: PropsWithChildren<IPollBoxProps>) => {
  return (
    <>
      <YStack
        marginBottom={"$sp16"}
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

        <PollTextOptions
          optionList={optionList}
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
