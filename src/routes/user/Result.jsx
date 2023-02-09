import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Result = () => {
  let { studentID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://iq-api.onrender.com/user/${studentID}`
      );
      localStorage.setItem("userStat", JSON.stringify(response.data));
    };
    fetchData();
  }, []);

  const resultData = JSON.parse(localStorage.getItem("userStat"));

  return (
    <>
      <h1>Điểm: {resultData.data.score}</h1>
    </>
  );
};

export default Result;
