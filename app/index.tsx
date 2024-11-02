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
    let count = 0;
    const id = setInterval(() => {
      subscriber.next(count++);
      if (count > 5) {
        subscriber.complete();
      }
    }, 1000);

    return () => {
      console.log("Unsubscribed");
      clearInterval(id);
    };
  });

  const mysubscription = observerable.subscribe(myObserver);
  const mysubscription2 = observerable.subscribe(myObserver);

  setTimeout(() => {
    mysubscription.unsubscribe();
  }, 3500);

  return (
    <SafeAreaView>
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
