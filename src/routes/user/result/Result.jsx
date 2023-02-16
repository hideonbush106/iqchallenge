import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  RankButton,
  ResultInfo,
  ResultSection,
  ResultTheme,
  UserStat,
  ClubFanpage,
  LogoMobile,
} from "./Result.styled";

const Result = () => {
  const { name, studentID } = useParams();

  const [score, setScore] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    axios
      .get(`https://iqapi.hdang09.site/user/${studentID}`)
      .then((response) => {
        setScore(response.data.data.score);
        setTime(() => {
          const secs = response.data.data.time / 1000;
          const hr = Math.floor(secs / 60 / 60);
          const min = Math.floor((secs - hr * 3600) / 60);
          const sec = Math.floor(secs - hr * 3600 - min * 60);

          const hrStr = hr.toString().padStart(2, "0");
          const minStr = min.toString().padStart(2, "0");
          const secStr = sec.toString().padStart(2, "0");
          if (hrStr == "00") {
            if (minStr == "00") {
              return `${secStr}s`;
            } else return `${minStr}m${secStr}s`;
          } else return `${hrStr}h${minStr}m${secStr}s`;
        });
      });
  }, []);

  return (
    <ResultSection>
      <LogoMobile src="/assets/logo2.svg" alt="" />
      <ResultTheme src="/assets/trophy.svg" />
      <ResultInfo>
        <img src="/assets/logo2.svg" alt="" />
        <h1>
          Chúc mừng bạn đã hoàn thành thử thách{" "}
          <strong style={{ color: "#33bd64" }}>IQ Challenge</strong>
        </h1>
        <p>Kết quả bạn đã đạt được:</p>
        <UserStat>
          <div>
            <p>Thời gian hoàn thành</p>
            <h3>{time}</h3>
          </div>
          <div>
            <p>Số câu trả lời đúng</p>
            <h3>
              {score}
              <strong style={{ color: "#979DA8", fontWeight: "500" }}>
                /15
              </strong>
            </h3>
          </div>
          <div style={{ borderBottom: "1px solid #E0E0E0" }}>
            <p>Vị trí xếp hạng</p>
            <h3>
              <RankButton to={`/user/${name}/${studentID}/rank`}>
                Xem BXH
              </RankButton>
            </h3>
          </div>
        </UserStat>

        <ClubFanpage>
          <p>Tìm hiểu thêm về CLB tại:</p>
          <a href="https://www.facebook.com/fcodefpt" target="_blank">
            <img src="/assets/facebook.svg" alt="" />
            <p>Facebook fanpage F-Code</p>
          </a>
        </ClubFanpage>
      </ResultInfo>
    </ResultSection>
  );
};

export default Result;
