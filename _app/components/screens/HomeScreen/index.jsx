import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { usePokemonApi } from "../../../@lib/api/services/usePokemonApi";
import { ActivityIndicator, Card } from "react-native-paper";
import { stylesHomeScreen as styles } from "./styles/stylesHomeScreen";
export default function HomeScreen({ navigation }) {
  const { data, handleLoadMore, isLoading, isFetchingNextPage } =
    usePokemonApi();
  const flatlistData = data?.pages?.flatMap((page) => page?.data?.results);
  const renderItem = ({ item }) => {
    return (
      <Card style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { url: item?.url })}
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      </Card>
    );
  };
  const ListEmptyComponent = () =>
    isLoading ? (
      <View style={styles.emptyList}>
        <ActivityIndicator size={"large"} />
      </View>
    ) : null;
  const ListFooterComponent = () => {
    return isFetchingNextPage ? (
      <View style={styles.footer}>
        <ActivityIndicator size={"large"} />
      </View>
    ) : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.empty}
        data={flatlistData || []}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
}
