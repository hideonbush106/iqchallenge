import { Link, useParams } from "react-router-dom";
import { Home, RankSection } from "./Rank.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { getRank } from "../../../utils/IQAPI";
const Rank = () => {
  const { studentID } = useParams();
  const [rank, setRank] = useState({
    studentRank: '',
    users: [
      {
        rank: "",
        name: "",
        studentID: "",
        score: "",
        time: "",
      },
    ],
  });

  const milisecToTime = (time) => {
    if (!time) return "";
    else {
      const secs = time / 1000;
      const hr = Math.floor(secs / 60 / 60);
      const min = Math.floor((secs - hr * 3600) / 60);
      const sec = Math.floor(secs - hr * 3600 - min * 60);

      const hrStr = hr.toString().padStart(2, "0");
      const minStr = min.toString().padStart(2, "0");
      const secStr = sec.toString().padStart(2, "0");
      return `${hrStr}:${minStr}:${secStr}`;
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://iqapi.hdang09.site/user/scoreboard", {
    //     headers: { studentID },
    //   })
      getRank(studentID)
      .then((response) => {
        setRank((prevState) => ({
          ...prevState,
          studentRank: response.data.data.studentRank,
          users: response.data.data.users,
        }));
      });
  }, []);
  return (
    <RankSection>
      <img src="/assets/logo2.svg" alt="" />
      <h1>
        Bảng xếp hạng <strong style={{ color: "#33bd64" }}>IQ Challenge</strong>
      </h1>
      <h3>
        Bạn đang ở{" "}
        <strong style={{ color: "#F9AF0B" }}>hạng {rank.studentRank}</strong>
      </h3>
      <Home to="/">Trang chủ</Home>
      <table>
        <thead>
          <tr>
            <th>Top</th>
            <th>Họ tên</th>
            <th>MSSV</th>
            <th>Điểm</th>
            <th>Th.gian</th>
          </tr>
        </thead>
        <tbody>
          {rank.users.map((value, index) => {
            if (value.rank == rank.studentRank)
              return (
                <tr key={index}>
                  <td style={{ color: "#33bd64", background: "#FAFAFA" }}>
                    {value.rank}
                  </td>
                  <td style={{ color: "#33bd64", background: "#FAFAFA" }}>
                    {value.name}
                  </td>
                  <td style={{ color: "#33bd64", background: "#FAFAFA" }}>
                    {value.studentID}
                  </td>
                  <td style={{ color: "#33bd64", background: "#FAFAFA" }}>
                    {value.score}
                  </td>
                  <td style={{ color: "#33bd64", background: "#FAFAFA" }}>
                    {milisecToTime(value.time)}
                  </td>
                </tr>
              );
            else
              return (
                <tr key={index}>
                  <td>{value.rank}</td>
                  <td>{value.name}</td>
                  <td>{value.studentID}</td>
                  <td>{value.score}</td>
                  <td>{milisecToTime(value.time)}</td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </RankSection>
  );
};

export default Rank;
