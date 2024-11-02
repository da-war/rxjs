import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { from, of } from "rxjs";

const observer = {
  next: (value: any) => console.log(value),
  error: (error: any) => console.log(error),
  complete: () => console.log("completed"),
};

const index = () => {
  // const source$=fromEvent(document,'click');
  // alternative in react native
  // const source$=fromEvent(document,'click'); is for web

  const handlePress = () => {
    const source$ = of(1, 2, 3, 4, 5);
    const mySubscription = source$.subscribe(observer);
    const mySubscription2 = source$.subscribe(observer);

    setTimeout(() => {
      console.log("unsubscribing mySubscription");
      mySubscription.unsubscribe();
    }, 3000);

    setTimeout(() => {
      console.log("unsubscribing mySubscription2");
      mySubscription2.unsubscribe();
    }, 5000);
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
