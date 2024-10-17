import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Observable } from "rxjs";

const index = () => {
  const notError = false;
  // Create an observable
  const numberObservable: Observable<number> = new Observable<number>(
    (subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    }
  );

  // Subscribe to the observable with inline observer
  numberObservable.subscribe({
    next: (value: number) => console.log(`Received value: ${value}`),
    complete: () => console.log("Observable completed"),
  });

  // Define an observer with explicit types
  const observer = {
    next: (value: number) => console.log(`Observer received: ${value}`),
    error: (err: any) => console.error(`Observer error: ${err}`),
    complete: () => console.log("Observer received completion"),
  };

  // Subscribe using the defined observer
  numberObservable.subscribe(observer);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;
