import axios from "axios";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BASE_URL } from "../../../../lib/export/data";

const InviteCode = () => {
  const [code, setCode] = useState("");
  useEffect(() => {
    console.log("asd");
    axios({
      url: BASE_URL + "/companys/invite",
      method: "get",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      setCode(res.data.code);
    });
  }, []);

  return (
    <>
      <MainDiv>
        <CenterDiv>
          <CenterTitle>회사가 성공적으로 생성되었습니다!✔️</CenterTitle>
          <CenterSubTitle>회사 초대 코드</CenterSubTitle>
          <CodeContainer>
            <Code>{code}</Code>
          </CodeContainer>
        </CenterDiv>
      </MainDiv>
    </>
  );
};

export default InviteCode;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  width: 700px;
  height: 400px;

  box-shadow: 0px 0px 2px 2px lightgray;
  border-radius: 20px 20px;
`;

const CenterTitle = styled.p`
  margin-top: 10%;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const CenterSubTitle = styled.p`
  margin-top: 0;
  text-align: center;
  font-size: 23px;
  font-weight: 400;
`;

const CodeContainer = styled.div`
  width: 60%;
  height: 20%;
  margin: 2% auto;

  box-shadow: 0px 0px 2px 2px lightgray;
  border-radius: 20px 20px;
`;

const Code = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  top: 50%;
  transform: translateY(40%);
`;
