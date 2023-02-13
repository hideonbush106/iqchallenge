import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Result = () => {
  const { studentID } = useParams();

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    axios
      .get(`https://iq-api.onrender.com/user/${studentID}`)
      .then((response) => {
        setScore(response.data.data.score);
        setTime(response.data.data.time);
      });
  }, []);

  return (
    <div>
      Result: {score}
      <br></br>
      Time: {time / 1000}
    </div>
  );
};

export default Result;
