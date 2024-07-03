import "react-native-gesture-handler";
import Game from "./src/components/Game";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const App = () => (
  <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#365314" }}>
    <Game />
    <StatusBar style="light" />
  </GestureHandlerRootView>
);

export default App;
