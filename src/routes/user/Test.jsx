import React from "react";
import { Question } from "../../components/Question";

export default function Test() {
  const responseData = JSON.parse(localStorage.getItem("responseData"));

  console.log(responseData);
  return (
    <>
      <Question
        question={responseData.questions[0].question[0]}
        img={`\\${responseData.questions[0].question[1]}.png`}
        option0={responseData.questions[0].multipleChoice[0]}
        option1={responseData.questions[0].multipleChoice[1]}
        option2={responseData.questions[0].multipleChoice[2]}
        option3={responseData.questions[0].multipleChoice[3]}
        option4={responseData.questions[0].multipleChoice[4]}
      />
      <Question
        question={responseData.questions[1].question[0]}
        img={`\\${responseData.questions[1].question[1]}.png`}
        option0={responseData.questions[1].multipleChoice[0]}
        option1={responseData.questions[1].multipleChoice[1]}
        option2={responseData.questions[1].multipleChoice[2]}
        option3={responseData.questions[1].multipleChoice[3]}
        option4={responseData.questions[1].multipleChoice[4]}
      />
      <Question
        question={responseData.questions[2].question[0]}
        img={`\\${responseData.questions[2].question[1]}.png`}
        option0={responseData.questions[2].multipleChoice[0]}
        option1={responseData.questions[2].multipleChoice[1]}
        option2={responseData.questions[2].multipleChoice[2]}
        option3={responseData.questions[2].multipleChoice[3]}
        option4={responseData.questions[2].multipleChoice[4]}
      />
    </>
  );
}
