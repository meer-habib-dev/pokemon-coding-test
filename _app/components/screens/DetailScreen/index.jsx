import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { useDetailsApi } from "../../../@lib/api/services/useDetailsApi";
import { ActivityIndicator, Card } from "react-native-paper";

const DetailsScreen = ({ route }) => {
  const url = route.params.url;
  const { data, isLoading } = useDetailsApi(url);
  return isLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator size={"large"} />
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Card.Title title={"Name:             " + data?.data?.name} />
          <Card.Title title={"Weight:           " + data?.data?.weight} />
          <Card.Title title={"Height:           " + data?.data?.height} />
          <Card.Title
            title={"Experience:       " + data?.data?.base_experience}
          />
          <Card.Title title={"Name:             " + data?.data?.name} />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: { flex: 1, marginHorizontal: 20, marginTop: 20 },
  card: { backgroundColor: "white" },
});
