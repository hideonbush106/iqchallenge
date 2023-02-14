import React, { useState, useEffect } from "react";
import Question from "../../../components/question/Question";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../../components/Toastify";
import { TestSection, TestForm, FormArea } from "./Test.styled";
import { confirmAlert } from "react-confirm-alert";
import "../../../confirm.css"; // Import css
import TestStat from "../../../components/teststat/TestStat";

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

  const handleSubmit = (event) => {
    const enteredAnswer = [];

    for (let i = 0; i < 15; i++) {
      //Collect data from form
      enteredAnswer[i] = parseInt(event.target.elements[i].value);
    }
    event.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="react-confirm-alert-body">
            <h2>
              Xác nhận hoàn thành thử thách{" "}
              <strong style={{ color: "#33BD64" }}>IQ Challenge</strong>
            </h2>
            <p>
              Bạn nên kiểm tra bài làm trước khi nộp để chắc chắn trả lời đầy đủ
              các câu hỏi. Sau khi{" "}
              <strong style={{ color: "#33BD64" }}>Nộp bài</strong>, hành động
              này không thể hoàn tác.
            </p>
            <p style={{ fontWeight: "600", color: "#7B7B81" }}>
              Bạn chắc chắn muốn nộp bài chứ?
            </p>
            <div className="react-confirm-alert-button-group">
              <button
                type="submit"
                onClick={onClose}
                className="button-reverse"
              >
                QUAY LẠI
              </button>
              <button
                type="submit"
                onClick={async () => {
                  try {
                    const requestBody = {
                      name: name,
                      studentID: studentID,
                      answer: enteredAnswer,
                    };
                    const response = await axios.put(
                      "https://iq-api.onrender.com/user/end",
                      requestBody
                    );
                    notifySuccess("Nộp bài thành công");
                    onClose();
                    navigate(`/user/${name}/${studentID}/result`);
                  } catch (error) {
                    onClose();
                    notifyError("Bạn đã nộp bài trước đó");
                  }
                }}
              >
                NỘP BÀI
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <TestSection>
      <TestForm onSubmit={handleSubmit}>
        <TestStat />
        <FormArea>
          <div style={{}}>
            {responseData.questions.map((questions, index) => (
              <Question
                question={questions}
                questionIndex={index}
                key={questions._id}
                handleChange={handleChange}
                formData={formData}
              />
            ))}
          </div>
          <p
            style={{ color: "#BDBDBD", textAlign: "center", marginTop: "1rem" }}
          >
            Kết thúc phần bài làm
          </p>
        </FormArea>
      </TestForm>
    </TestSection>
  );
}
