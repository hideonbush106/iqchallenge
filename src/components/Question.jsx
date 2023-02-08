import React from "react";

export const Question = (props) => {

  const title = props.title;

  if (props.isLong) {
    if (props.img)
      return (
        <>
          
        </>
      );
    else
      return (
        <>
          {title.map((question) => (<p>{question.question}</p>))}
        </>
      );
  } else {
    if (props.img)
      return (
          <>
            
          </>
      );
    else
      return (
        <>
          {props.question.map((question) => (<h1>{question.question}</h1>))}
        </>
      );
  }
};
