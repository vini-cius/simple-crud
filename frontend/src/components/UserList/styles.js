import styled from 'styled-components';

export const Container = styled.div`
	overflow-x: auto;
`;

export const Table = styled.table`

  background-color: #fff;
  border: thin solid #ccc;
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  td {
    border-bottom: thin solid #ccc;
    padding: 3px;
		white-space: nowrap;
  }

  th {
    background-color: #1F334B;
    border: thin solid #fff;
    color: #fff;
    font-weight: bold;
    padding: 5px;
  }

	tr:nth-child(even) {
		background-color: #f2f2f2
	}

  tr:hover {
    background-color: #f5f5f5;
  }

	.link {
		color: #7d40e7;
		text-decoration:underline;

		&:hover {
			color: #6931ca;
			cursor: pointer;
		}
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
		font-size: 12px;
  }

  button:hover {
    background: #6931ca;
  }

`;
