import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import RootNavigator from "./_app/components/navigation/RootNavigation/RootNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as PaperProvider } from "react-native-paper";

const queryClient = new QueryClient();
export default function App() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </PaperProvider>
  );
}
