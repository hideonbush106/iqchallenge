import React from "react";
import {
  RegisterForm,
  RegisterSection,
  RegisterTheme,
  Title,
  StartButton,
  InputArea,
  FormArea,
  Input,
} from "./Register.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    studentID: "",
  });

  const navigate = useNavigate();

  const notify = () => {
    toast.error("MSSV đã được đăng kí", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  function formHandle(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    const enteredFormData = {
      name: formData.name,
      studentID: formData.studentID,
    };
    props.onSaveFormData(enteredFormData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://iq-api.onrender.com/user/register",
        formData
      );
      console.log(response.data);
      navigate(`/user/start/${formData.name}/${formData.studentID}`);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <RegisterSection>
      <RegisterForm>
        <img src="/assets/logo2.svg" alt="" />
        <Title>
          Nhập <strong style={{ color: "#F9AF0B" }}>MSSV</strong> của bạn
        </Title>
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
          <StartButton type="submit" onClick={notify}>
            Tiếp tục
          </StartButton>
        </FormArea>
      </RegisterForm>
      <RegisterTheme src="/assets/register.svg" alt="" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </RegisterSection>
  );
}
