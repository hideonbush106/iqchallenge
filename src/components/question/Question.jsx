import React from "react";
import Option from "./option/Option";
import QuestionTitle from "./questiontitle/QuestionTitle";
import { QuestionSection } from "./Question.styled";
const Question = (props) => {
  const question = props.question;

  return (
    <QuestionSection id={`question-${props.questionIndex + 1}`}>
      <QuestionTitle
        questionTitle={question}
        questionIndex={props.questionIndex}
      />
      <Option
        options={question}
        questionIndex={props.questionIndex}
        handleChange={props.handleChange}
        formData={props.formData}
      />
    </QuestionSection>
  );
};
// TODO: css lại câu hỏi
// TODO: làm mobile
export default Question