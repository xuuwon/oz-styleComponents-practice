// Header.jsx
import React from "react";
import styled from "styled-components";
import { flexMixin, fontMixin } from "../styles"; // mixins.js에서 불러오기

const HeaderContainer = styled.div`
  ${flexMixin("row", "space-between", "center")};
  padding: 20px 20px;
  background-color: black;

  ul {
    ${flexMixin("row", "center", "center", "20px")};
    list-style: none;

    li {
      ${fontMixin("16px", 400)};
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
