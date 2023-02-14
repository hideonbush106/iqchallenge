import React from "react";
import {
  StartSection,
  StartTheme,
  StartNote,
  StartButton,
  LogoMobile
} from "./Start.styled";
import { Form, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { notifyError } from "../../../components/Toastify";

const Start = () => {
  let { name, studentID } = useParams();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://iq-api.onrender.com/user/start/${name}/${studentID}`
      );
      localStorage.setItem("responseData", JSON.stringify(response.data.data));
      navigate(`/user/start/${name}/${studentID}/test`);
    } catch (error) {
      notifyError("Bạn đã nộp bài trước đó");
    }
  }

  return (
    <>
      <StartSection>
        <LogoMobile src="/assets/logo2.svg" alt="" />
        <StartTheme src="/assets/start.svg" />
        <StartNote>
          <img src="/assets/logo2.svg" alt="" />
          <h2>Chuẩn bị sẵn sàng</h2>
          <div>
            <img src="/assets/timer.svg" alt="" />
            <p>Hệ thống sẽ tính thời gian hoàn thành của bạn</p>
          </div>
          <div>
            <img src="/assets/questionmark.svg" alt="" />
            <p>Tổng cộng là 15 câu hỏi cần hoàn thành</p>
          </div>
          <div>
            <img src="/assets/checkmark.svg" alt="" />
            <p>Chỉ chọn một đáp án đúng duy nhất</p>
          </div>
          <Form onSubmit={handleSubmit} style={{width: "100%"}}>
            <StartButton type="submit">Bắt đầu thử thách</StartButton>
          </Form>
        </StartNote>
      </StartSection>
    </>
  );
};

export default Start;
