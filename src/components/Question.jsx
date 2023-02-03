import React from "react";

export const Question = (props) => {
  return (
    <>
      <div>{props.question}</div>
      <img src={props.img} alt="" />
      <div>{props.option0}</div>
      <div>{props.option1}</div>
      <div>{props.option2}</div>
      <div>{props.option3}</div>
      <div>{props.option4}</div>
    </>
  );
};
