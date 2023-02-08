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

  console.log(responseData);

  return (
    <>
      <Form>
        {responseData.questions.map((questions, index) => {
          if (questions.isLong) {
            return (
              <>
                <h1>{index + 1}</h1>
                {questions.question.map((title, index) => {
                  if (title.match("/images"))
                    return (
                      <div key={index}>
                        <img src={title} alt="" srcset="" />
                      </div>
                    );
                  else
                    return (
                      <div key={index}>
                        <p>{title}</p>
                      </div>
                    );
                })}
                {questions.multipleChoice.map((option, index) => (
                  <div key={index}>
                    <input type="radio" name={questions._id} value={index + 1} />
                    <label htmlFor={index}>{option}</label>
                  </div>
                ))}
              </>
            );
          } else {
            return (
              <>
                <h1>{index + 1}</h1>
                {questions.question.map((title, index) => {
                  if (title.match("/images"))
                    return (
                      <div key={index}>
                        <img src={title} alt="" srcset="" />
                      </div>
                    );
                  else
                    return (
                      <div key={index}>
                        <h1>{title}</h1>
                      </div>
                    );
                })}
                {questions.multipleChoice.map((option, index) => (
                  <div key={index}>
                    <input type="radio" name={questions._id} value={index + 1} />
                    <label htmlFor={index}>{option}</label>
                  </div>
                ))}
              </>
            );
          }
        })}
      </Form>
    </>
  );
}

// {/* {responseData.questions.map((questions) => (
//   <Question
//     isLong={questions.isLong}
//   />
// ))} */}

/*
  TODO : đáp án sẽ dùng 2 component, loại 4 và 5 đáp án, hoặc .map() 
  
*/
