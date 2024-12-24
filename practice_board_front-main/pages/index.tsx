import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push("/main");
  };

  return (
    <LogInBox>
      test UI
      <LoginContainer>
        <GoogleBtn onClick={handleClick}>구글 로그인</GoogleBtn>
        <KakaoBtn onClick={handleClick}>카카오 로그인</KakaoBtn>
      </LoginContainer>
    </LogInBox>
  );
};

export default Login;

const LogInBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  gap: 20px;
`;

const GoogleBtn = styled.button`
  padding: 10px 20px;
  width: 150px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;
const KakaoBtn = styled.button`
  padding: 10px 20px;
  width: 150px;
  background-color: #fee500;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;
