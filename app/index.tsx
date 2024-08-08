import { Text } from "react-native";
import { Redirect } from "expo-router";
import Discover from "@/app/discover";
const Index = () => {
  return (
    <>
      <Text>Hello World!</Text>
      <Redirect href={"/discover"} />
      <Redirect href={"/startScreen"} />
    </>
  );
};
export default Index;
