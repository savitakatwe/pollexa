import { Text } from "react-native";
import { Redirect } from "expo-router";
const Index = () => {
  return (
    <>
      <Text>Hello World!</Text>
      <Redirect href={"/startScreen"} />
    </>
  );
};
export default Index;
