import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";

interface Board {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  viewCount: number;
  user: {
    id: number;
    nickname: string;
    email: string;
  };
}

const boards = [
  { id: 1, name: "김씨" },
  { id: 2, name: "이씨" },
  { id: 1, name: "최씨" },
];

export default function Page() {
  const router = useRouter();
  let { token } = router.query; // 쿼리에서 token 가져오기

  if (Array.isArray(token)) {
    token = token[0]; // token이 배열인 경우 첫 번째 값 사용
  }

  return (
    <MainListContainer>
      <Header> 소셜 로그인 가입자 목록 </Header>
      {boards.map((board) => (
        <MainBox
          key={board.id}
          onClick={() => router.push(`/chat`)} // token과 함께 navigate
        >
          <Content>
            <MainTitle></MainTitle>
            <MainCont>{board.name}</MainCont>
          </Content>
          <MainContainerLine />
        </MainBox>
      ))}
    </MainListContainer>
  );
}

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainListContainer = styled.div`
  width: 100%;
`;

const MainBox = styled.div`
  width: 100%;
  height: 100px;
`;

const MainContainerLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1px;
  background: #f4f4f4;
  margin: 5px auto 0 auto;
  cursor: pointer;
`;

const MainTitle = styled.h3`
  margin-left: 2%;
  padding-top: 20px;
  background: gray;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  font-size: 10px;
`;

const MainCont = styled.div`
  margin-left: 2%;
  padding-top: 5px;
`;

const MainDetail = styled.div`
  margin-left: 2%;
  padding-top: 6px;
  display: flex;
  font-size: 15px;
  color: #bebfc2;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const MainDate = styled.div``;

const MainViewCount = styled.div``;
