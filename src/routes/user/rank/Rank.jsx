import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RankSection } from "./Rank.styled";

const Rank = () => {
  const { name, studentID } = useParams();
  const rank = JSON.parse(localStorage.getItem(`rankFor${studentID}`));

  const milisecToTime = (time) => {
    const secs = time / 1000;
    const hr = Math.floor(secs / 60 / 60);
    const min = Math.floor((secs - hr * 3600) / 60);
    const sec = secs - hr * 3600 - min * 60;

    const hrStr = parseInt(hr.toString().padStart(2, "00"));
    const minStr = parseInt(min.toString().padStart(2, "00"));
    const secStr = parseInt(sec.toString().padStart(2, "00"));
    return `${hrStr}:${minStr}:${secStr}`;
  };

  console.log(rank);
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
