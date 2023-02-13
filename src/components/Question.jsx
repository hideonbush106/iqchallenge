import React from "react";
import Option from "./Option";
import QuestionTitle from "./QuestionTitle";
import { QuestionSection } from "./Question.styled";
export const Question = (props) => {
  const question = props.question;

  return (
    <QuestionSection>
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
// TODO: lưu form data vào local
