import React, { useState, useEffect } from "react";
import { Question } from "../../components/Question";
import axios from "axios";
import { Form, useNavigate, useParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../components/Toastify";

export default function Test() {
  const { name, studentID } = useParams();

  const responseData = JSON.parse(localStorage.getItem("responseData"));

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem(`formDataFor${studentID}`)) || [
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
      { answer: null },
    ]
  );

  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: { answer: e.target.value } });
  };

  useEffect(() => {
    const formDataFromLocalStorage = JSON.parse(
      localStorage.getItem(`formDataFor${studentID}`)
    );
    if (formDataFromLocalStorage) {
      setFormData(formDataFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`formDataFor${studentID}`, JSON.stringify(formData));
  }, [formData]);

  // console.log((new Date() - responseData.timeStart) / 3600);
  // console.log(responseData.questions);

  const handleSubmit = async (event) => {
    const enteredAnswer = [];

    for (let i = 0; i < 15; i++) {
      //Collect data from form
      enteredAnswer[i] = parseInt(
        event.target.elements[i].value
      );
    }
    console.log(enteredAnswer);

    event.preventDefault();
    try {
      const requestBody = {
        name: name,
        studentID: studentID,
        answer: enteredAnswer,
      };
      console.log(requestBody);
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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {responseData.questions.map((questions, index) => (
          <Question
            question={questions}
            questionIndex={index}
            key={questions._id}
            handleChange={handleChange}
            formData={formData}
          />
        ))}
        <button type="submit">Nộp bài</button>
      </Form>
    </>
  );
}
