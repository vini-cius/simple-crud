import styled from 'styled-components';

export const Table = styled.table`

  background-color: #fff;
  border: 1px solid #333;
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  td {
    border-bottom: 1px solid #333;
    padding: 3px;
  }

  th {
    background-color: #1F334B;
    border: 1px solid #333;
    color: #fff;
    font-weight: bold;
    padding: 5px;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

`;

export const DivButton = styled.div`

  display: flex;
  flex-direction: row-reverse;

  button {
    background-color: #7d40e7;
    color: #fff;
    padding: 5px;
    border: 0;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    background: #6931ca;
  }
  
`;