import React from "react";
import { Welcome, WelcomeText, StartButton, WelcomeInfo } from "./Root.styled";

export default function Root() {
  return (
    <Welcome>
      <img src={"./src/assets/logo.svg"} alt="" />
      <WelcomeInfo>
        <WelcomeText>
          Chào mừng các bạn tân sinh viên K18 đến với{" "}
          <strong style={{ color: "#33BD64", fontWeight: "700" }}>
            IQ Challange
          </strong>{" "}
          do CLB F-Code tổ chức
        </WelcomeText>
        <StartButton to="/register">Bắt đầu</StartButton>
      </WelcomeInfo>
    </Welcome>
  );
}
