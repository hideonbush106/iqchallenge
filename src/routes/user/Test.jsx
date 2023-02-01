import React from "react";
import { useStore } from "react-redux";

export default function Test() {
  const store = useStore();

  const responseData = store.getState().data.testData;
  console.log(responseData);
  return (
    <div>Hello</div>
  )
}
