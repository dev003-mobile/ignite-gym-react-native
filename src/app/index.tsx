import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

export function App() {
   const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

   return (
      <View>
         <StatusBar
            animated
            translucent
            style="light"
            backgroundColor="transparent"
         />
      </View>
   )
}