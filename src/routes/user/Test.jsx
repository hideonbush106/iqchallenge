import React, { useState } from "react";
import { Question } from "../../components/Question";
import axios from "axios";
import { Form, useNavigate, useParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../components/Toastify";
export default function Test() {
  const { name, studentID } = useParams();

  const responseData = JSON.parse(localStorage.getItem("responseData"));

  const navigate = useNavigate();

  const [requestBody, setRequestBody] = useState({
    name: name,
    studentID: studentID,
    answer: [],
  });
  // console.log((new Date() - responseData.timeStart) / 3600);
  // console.log(responseData.questions);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = [];

    let optionIndex = 0;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type === "radio" && element.checked) {
        data[optionIndex] = element.value;
        optionIndex++;
      }
    }

    setRequestBody({
      ...requestBody,
      answer: data,
    });
    try {
      const response = await axios.put(
        "https://iq-api.onrender.com/user/end",
        requestBody
      );
      notifySuccess("Nộp bài thành công");
      console.log(response);
      navigate(`/user/${name}/${studentID}/result`);
    } catch (error) {
      notifyError("Bạn đã nộp bài trước đó");
    }
  };

  console.log(requestBody);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {responseData.questions.map((questions, index) => (
          <Question
            question={questions}
            questionIndex={index}
            key={questions._id}
          />
        ))}
        <button type="submit">Nộp bài</button>
      </Form>
    </>
  );
}
