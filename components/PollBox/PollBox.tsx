import { Separator, SizableText, YStack } from "tamagui";
import React from "react";
import PollBoxHead from "@/components/PollBoxHead";
import PollQuestion from "@/components/PollQuestion";
import PollOption from "@/components/PollOption";
import PollTextQuestion from "@/components/PollTextQuestion";

const PollBox = () => {
  return (
    <>
      <YStack
        backgroundColor="$otherWhite"
        borderRadius={"$br16"}
        paddingHorizontal={"$sp20"}
        paddingVertical={"$sp20"}
      >
        <PollBoxHead
          avatarURL={require("../../assets/Avatars/Avatar1.png")}
          fullName={"John Smith"}
          postTimeline={"2 months ago"}
        />
        {/*line*/}
        <Separator marginVertical={10} backgroundColor={"$lineGray"} />
        <YStack marginTop={"$sp12"} marginBottom={"$sp20"}>
          <PollQuestion
            lastVoteTimeline={"LAST VOTED 1 HOUR AGO"}
            questionText={
              "My friend just invited me to his birthday party but I have an exam tomorrow."
            }
          />
        </YStack>

        <PollTextQuestion
          optionPoint={"A"}
          optionText={"This is a no brainer, study!"}
          pollPercentage={"12%"}
        />

        <PollOption></PollOption>
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
