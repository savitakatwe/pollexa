import { Redirect } from "expo-router";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
const Index = () => {
  return (
    <>
      <SignedIn>
        <Redirect href={"/discover"} />
      </SignedIn>
      <SignedOut>
        <Redirect href={"/startScreen"} />
      </SignedOut>
      {/*<Redirect href={"/createPoll"} />*/}
      {/*<Redirect href={"/startScreen"} />*/}
    </>
  );
};
export default Index;
