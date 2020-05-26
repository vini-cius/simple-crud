import styled from 'styled-components';

export const Legend = styled.div`
  margin: 20px 0;
`;

export const InputBlock = styled.div`
  margin-top: 20px;

  label {
    color: #000;
    font-size: 14px;
    display: block;
    margin-bottom: 5px;

    span {
      color: tomato;
    }
  }
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
	padding: 5px 10px;
`;

export const Select = styled.select`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  cursor: pointer;

  &:hover {
    background: #6931ca;
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
