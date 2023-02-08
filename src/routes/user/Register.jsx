import React from "react";
import {
  RegisterForm,
  RegisterSection,
  RegisterTheme,
  StartButton,
  InputArea,
  FormArea,
  Input,
} from "./Register.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../../components/Toastify";

export default function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    studentID: "",
  });

  const navigate = useNavigate();

  function formHandle(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://iq-api.onrender.com/user/register",
        formData
      );
      notifySuccess("Đăng kí thành công");
      navigate(`/user/start/${formData.name}/${formData.studentID}`);
    } catch (error) {
      notifyError("MSSV đã được đăng kí");
      console.log(`Error: ${error}`);
    }
  };

  return (
    <RegisterSection>
      <RegisterForm>
        <img src="/assets/logo2.svg" alt="" />
        <h1>
          Nhập <strong style={{ color: "#F9AF0B" }}>MSSV</strong> của bạn
        </h1>
        <p>
          Chấp nhận tham gia thử thách bằng cách điền mã số sinh viên và tra cứu
          kết quả sau khi hoàn thành
        </p>
        <FormArea onSubmit={handleSubmit}>
          <InputArea style={{ marginBottom: "1rem" }}>
            <img src="/assets/formicon.svg" alt="" />
            <Input
              placeholder="NGUYEN VAN A"
              type="text"
              required
              name="name"
              onChange={formHandle}
              value={formData.name}
            />
          </InputArea>
          <InputArea style={{ marginTop: "1rem" }}>
            <img src="/assets/formicon.svg" alt="" />
            <Input
              placeholder="SE180000"
              type="text"
              required
              name="studentID"
              onChange={formHandle}
              value={formData.studentID}
            />
          </InputArea>
          <StartButton type="submit">Tiếp tục</StartButton>
        </FormArea>
      </RegisterForm>
      <RegisterTheme src="/assets/register.svg" alt="" />
    </RegisterSection>
  );
}
