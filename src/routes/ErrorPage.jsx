import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const Error = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 2rem;
    h1 {
      margin: 1rem 0;
    }

    p {
      margin: 0.5rem 0;
    }

  `;

  return (
    <>
      <Error>
        <img src="/assets/logo.svg" alt="" />
        <h1>Oops! This page doesn't exist </h1>
        <h1>{error.status || error.message}</h1>
      </Error>
    </>
  );
}
