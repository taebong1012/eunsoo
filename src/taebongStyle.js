import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  // border: 1px solid purple;

  width: 100%;
  display: flex;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const RegistBtn = styled.button`
  margin-left: auto;
  border: none;
  width: 50px;
  border-radius: 8px;
  color: white;
  background-color: #91a5f8;
`;

export const ItemName = styled.div`
  font-size: 20px;
  margin-right: 8px;
`;
export const ItemGrade = styled.div`
  font-size: 15px;
  color: grey;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

export const RoundBtn = styled.div`
  height: 35px;
  width: 35px;
  border: none;
  border-radius: 100px;
  background-color: #f5f6fe;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
