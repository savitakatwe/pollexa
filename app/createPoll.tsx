import { Input, SizableText, XStack, YStack } from "tamagui";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Plus, Trash2 } from "@tamagui/lucide-icons";

const createPoll = () => {
  const navigation = useNavigation();
  const [optionList, setOptionList] = useState<string[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={navigation.goBack}>
            <SizableText>Done</SizableText>
          </TouchableOpacity>
        );
      },
    });
  }, []);
  const NumberToAlphabet = useCallback((letterIndex: number) => {
    return String.fromCharCode(letterIndex + "A".charCodeAt(0));
  }, []);

  return (
    <>
      <SafeAreaView>
        <YStack padding={"$sp20"} gap={"$sp12"}>
          <SizableText
            paddingTop={"$sp20"}
            paddingLeft={"$sp16"}
            size={"$xLarge"}
            fontWeight={600}
            color={"$questionFontColor"}
          >
            Question
          </SizableText>
          <Input
            placeholder={"Ask Question"}
            size={"xLarge"}
            borderRadius={"$br10"}
            backgroundColor={"$otherWhite"}
          />
          <SizableText
            paddingTop={"$sp20"}
            paddingLeft={"$sp16"}
            size={"$xLarge"}
            fontWeight={600}
            color={"$questionFontColor"}
          >
            Options
          </SizableText>
          {/*Options Display*/}
          <YStack>
            {optionList.map((item, index) => {
              return (
                <XStack
                  backgroundColor={"$otherWhite"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingHorizontal={"$sp16"}
                  borderRadius={"$br10"}
                >
                  <XStack
                    width={26}
                    height={26}
                    borderRadius={"$br16"}
                    backgroundColor={"$greyScale100"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <SizableText
                      size={"$large"}
                      color={"$accent"}
                      fontWeight={600}
                    >
                      {NumberToAlphabet(index)}
                    </SizableText>
                  </XStack>
                  <Input
                    flexGrow={1}
                    borderWidth={0}
                    backgroundColor={"$otherWhite"}
                    placeholder={"Option Text"}
                    value={item}
                    onChangeText={(value) => {
                      setOptionList((prevState) => {
                        prevState[index] = value;
                        return [...prevState];
                      });
                    }}
                  />
                  <TouchableOpacity
                    onPress={(e) => {
                      setOptionList((prevState) => {
                        prevState.splice(index, 1);
                        return [...prevState];
                      });
                    }}
                  >
                    <Trash2 color={"$tertiary"} />
                  </TouchableOpacity>
                </XStack>
              );
            })}
          </YStack>

          {/*Add New*/}
          <TouchableOpacity
            onPress={() => {
              setOptionList((prevState) => {
                prevState.push("");
                return [...prevState];
              });
            }}
          >
            <XStack
              backgroundColor={"$otherWhite"}
              paddingHorizontal={"$sp16"}
              paddingVertical={"$sp8"}
              borderRadius={"$br10"}
              alignItems={"center"}
              gap={"$sp8"}
            >
              <XStack
                width={31}
                height={31}
                backgroundColor={"$accent"}
                borderRadius={"$br16"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Plus color={"$otherWhite"} />
              </XStack>
              <SizableText size={"$xLarge"} fontWeight={500} color={"$accent"}>
                Add New
              </SizableText>
            </XStack>
          </TouchableOpacity>
        </YStack>
      </SafeAreaView>
    </>
  );
};
export default createPoll;
