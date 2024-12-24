import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Chat_gpt = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };
  return (
    <ChatContainer>
      <Header>
        {" "}
        <Back onClick={clickHandler}>뒤로</Back>개인 유저와 채팅하기
      </Header>
      <Container>
        <ChatBox>
          <div>
            <GptBox>
              <Gpt>
                <MyContent>
                  <div>안녕</div>
                </MyContent>
                <Gptresponse>
                  <GptImg></GptImg>
                  <GptresponseBox>
                    <GptName>가입자 이름</GptName>
                    <GptContent>
                      <div> 오</div>
                      <div> 안녕</div>
                    </GptContent>
                  </GptresponseBox>
                </Gptresponse>
              </Gpt>
            </GptBox>
          </div>
        </ChatBox>
      </Container>
      <InputBoxContainer></InputBoxContainer>
    </ChatContainer>
  );
};

export default Chat_gpt;

const Back = styled.div``;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e3e3e3;
`;
const InputBoxContainer = styled.div`
  width: 100%;
  height: 103px;
  position: sticky;
  bottom: 0;
  display: flex;
  background: #fff;
  padding: 12px 10px;
  /* margin-top: 40px; */
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 130px - 103px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 1000;
  color: black;
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: #e3e3e3;
`;

const ChatBox = styled.div`
  width: 100%;
  /* height: 100vh; */
  padding-left: 20px;
  padding-right: 20px;
  /* margin-top: 35px; */
`;
const GptBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
`;
const GptImg = styled.div`
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 29px;
`;
const GptContent = styled.div`
  max-width: 300px;
  min-width: auto;
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 0px 10px 10px 10px;
  background: var(--white, #fff);
`;
const GptName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: black;
`;
const Gpt = styled.div`
  width: 100%;
`;
const MyContent = styled.div`
  max-width: 220px;
  min-width: auto;
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: var(--white, #fff);
  border-radius: 10px 0px 10px 10px;
  background: #393939;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 10px;
  margin-top: 40px;
`;

const Gptresponse = styled.div`
  width: auto;
  height: auto;
  display: flex;

  gap: 10px;
`;
const GptresponseBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
