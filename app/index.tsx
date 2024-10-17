import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Observable } from "rxjs";

const index = () => {
  const notError = false;
  const numberObservable = new Observable((subscriber) => {
    if (notError) {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    } else {
      subscriber.error("An error occurred");
    }
  });

  // Subscribe to the observable
  numberObservable.subscribe({
    next: (value) => console.log(`Received value: ${value}`),
    error: (error) => console.log(`Error: ${error}`),
    complete: () => console.log("Observable completed"),
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;
