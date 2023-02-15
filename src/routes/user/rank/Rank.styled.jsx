import styled from "styled-components";

export const RankSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin: 5rem 0 1rem 0;
  }
  h1 {
    margin: 0.5rem 0 1rem 0;
  }
  h3 {
    color: #7b7b81;
    margin: 0.5rem 0 3rem 0;
  }
  table {
    text-align: center;
    font-weight: 500;
    border-collapse: collapse;
    margin-bottom: 15rem;
    thead {
      background: #33bd64;
      color: #ecf0ff;
      tr {
        th {
          padding: 1rem;
          border: 1px solid #ecf0ff;
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 1rem 2rem;
          border-bottom: 1px solid #ecf0ff;
          background: #fff;
          color: #2b3c5f;
        }
      }
    }
  }
`;
