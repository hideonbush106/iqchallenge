import React, { useState } from "react";
import { Question } from "../../components/Question";
import axios from "axios";
import { Form, useParams } from "react-router-dom";

export default function Test() {
  const { name, studentID } = useParams();

  const responseData = JSON.parse(localStorage.getItem("responseData"));

  const [requestBody, setRequestBody] = useState({
    name: name,
    studentID: studentID,
    answer: [],
  });
  console.log((new Date() - responseData.timeStart) / 3600);
  console.log(responseData.questions)
  return (
    <>
      <Form>
        {responseData.questions.map((questions, index) => (
          <Question question={questions} questionIndex={index} key={questions._id} />
        ))}
      </Form>
    </>
  );
}
