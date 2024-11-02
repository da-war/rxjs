import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { from, of, range } from "rxjs";

const observer = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.log("error", error),
  complete: () => console.log("completed"),
};

const index = () => {
  // const source$=fromEvent(document,'click');
  // alternative in react native
  // const source$=fromEvent(document,'click'); is for web

  const handlePress = () => {
    const source$ = from(fetch("https://api.github.com/users/da-war"));
    const mySubscription = source$.subscribe(observer);

    setTimeout(() => {
      console.log("unsubscribing mySubscription");
      mySubscription.unsubscribe();
    }, 3000);
  };

  return (
    <SafeAreaView>
      <Text>index</Text>
      <Button title="click" onPress={() => handlePress()} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
