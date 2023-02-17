import React from "react";
import Option from "./option/Option";
import QuestionTitle from "./questiontitle/QuestionTitle";
import { QuestionSection, Button } from "./Question.styled";
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
      {props.questionIndex + 1 == 15 ? (
        <Button>
          <button type="submit">Nộp bài</button>
        </Button>
      ) : (
        <Button>
          <a href={`#question-${props.questionIndex + 2}`}>Tiếp tục</a>
        </Button>
      )}
    </QuestionSection>
  );
};
export default Question;
