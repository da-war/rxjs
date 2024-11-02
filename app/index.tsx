import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Observable } from "rxjs";

const myObserver = {
  next: (value: any) => console.log(value + 1),
  error: (error: any) => console.log(error),
  complete: () => console.log("Completed"),
};

const index = () => {
  const observerable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  });

  observerable.subscribe(myObserver);

  return (
    <SafeAreaView>
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
