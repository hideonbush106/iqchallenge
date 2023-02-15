import React, { useState, useEffect } from "react";
import Question from "../../../components/question/Question";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../../components/Toastify";
import { TestSection, TestForm, FormArea } from "./Test.styled";
import { confirmAlert } from "react-confirm-alert";
import "../../../confirm.css"; // Import css
import TestStat from "../../../components/teststat/TestStat";
import { useMediaQuery } from "react-responsive";

export default function Test() {
  
  const { name, studentID } = useParams();

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 767.98px)",
  });

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

  const [time, setTime] = useState("");

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

  const milisecToTime = () => {
    const secs = (new Date() - responseData.timeStart) / 1000 + 15;
    const hr = Math.floor(secs / 60 / 60);
    const min = Math.floor((secs - hr * 3600) / 60);
    const sec = secs - hr * 3600 - min * 60;

    const hrStr = parseInt(hr.toString().padStart(2, "0"));
    const minStr = parseInt(min.toString().padStart(2, "0"));
    const secStr = parseInt(sec.toString().padStart(2, "0"));
    setTime(`${hrStr}:${minStr}:${secStr}`);
  };

  useEffect(() => {
    let timeID = setInterval(() => milisecToTime(), 1000);
    return function cleanup() {
      clearInterval(timeID);
    };
  },[]);

  const handleSubmit = (event) => {
    const enteredAnswer = [];

    for (let i = 0; i < 15; i++) {
      //Collect data from form
      enteredAnswer[i] = parseInt(formData[i].answer);
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
                    console.log(requestBody);
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
  console.log(formData)
  if (isMobileOrTablet) {
    return <div>Mobile not supported</div>;
  } else
    return (
      <TestSection>
        <TestForm onSubmit={handleSubmit}>
          <TestStat navTo={formData} time={time} />
          <FormArea>
            <div>
              {responseData.questions.map((questions, index) => (
                <Question
                  question={questions}
                  questionIndex={index}
                  key={index}
                  handleChange={handleChange}
                  formData={formData}
                />
              ))}
            </div>
            <p
              style={{
                color: "#BDBDBD",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Kết thúc phần bài làm
            </p>
          </FormArea>
        </TestForm>
      </TestSection>
    );
}