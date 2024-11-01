import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Observable } from "rxjs";

const observer = {
  next: (value: any) => console.log(value + " World"),
  error: (error: any) => console.log(error),
  complete: () => console.log("completed"),
};

const index = () => {
  const observable = new Observable((subscriber) => {
    let count = 0;
    const id = setInterval(() => {
      subscriber.next(count);
      count++;
      if (count > 5) {
        subscriber.complete();
      }
    }, 1000);

    return () => {
      console.log("unsubscribed");
      clearInterval(id);
    };
  });
  console.log("before");
  const subscription = observable.subscribe(observer);
  const subscriptionTwo = observable.subscribe(observer);
  subscription.add(subscriptionTwo);
  setTimeout(() => {
    subscription.unsubscribe();
  }, 3500);
  console.log("after");
  return (
    <SafeAreaView>
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
