import styled from "styled-components";
import "./App.css";
import * as S from "./taebongStyle";
import coworkers from "./data";
import { TbPencil, TbTrash } from "react-icons/tb";

const Wrapper = styled.div`
  // 태봉 스타일 속성---------------------
  // border: 1px solid red;
  padding: 5px;

  width: 50vw; //원하는 width로 주면 될듯
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ItemDiv = styled.div`
  // 태봉 스타일 속성---------------------
  // border: 1px solid blue;
  border-bottom: 1px solid #b3b3b3;
  padding-bottom: 5px;

  display: flex;
  align-items: center;
`;

function App() {
  return (
    <S.Container>
      <Wrapper className="wrapper">
        <S.TitleContainer>
          <S.Title>사원 관리</S.Title>
          <S.RegistBtn>등록</S.RegistBtn>
        </S.TitleContainer>
        {coworkers.map((coworker) => {
          return (
            <ItemDiv className="itemdiv" key={coworker.id}>
              <S.ItemName>{coworker.name}</S.ItemName>
              <S.ItemGrade>{coworker.grade}</S.ItemGrade>
              <S.ButtonContainer>
                <S.RoundBtn>
                  <TbPencil color="#485682" />
                </S.RoundBtn>
                <S.RoundBtn>
                  <TbTrash color="#485682" />
                </S.RoundBtn>
              </S.ButtonContainer>
            </ItemDiv>
          );
        })}
      </Wrapper>
    </S.Container>
  );
}

export default App;
