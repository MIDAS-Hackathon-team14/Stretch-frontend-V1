import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../lib/export/data";
import Swal from "sweetalert2";

const EnterCode = () => {
  console.log(sessionStorage.getItem("accessToken"));

  const [code, setCode] = useState("");

  const ChangeInput = (e) => {
    setCode(e.target.value);
  };
  const submit = () => {
    axios({
      method: "post",
      url: BASE_URL + "/companys/invite",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      data: {
        code: code,
      },
    }).then((res) => {
      console.log(res);
      Swal.fire({
        title: "성공",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        window.location.href = "/";
      });
    });
  };
  return (
    <BodyDiv>
      <Box>
        코드를 입력해 주세요.
        <GrayBox>
          <Input onChange={(e) => ChangeInput(e)}></Input>
          <SubmitBtn onClick={() => submit()}>입력</SubmitBtn>
        </GrayBox>
      </Box>
    </BodyDiv>
  );
};

export default EnterCode;

const BodyDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  width: 964px;
  height: 655px;
  background-color: #ffffff;
  display: flex;
  padding-top: 133px;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.24);
  margin-top: 112px;
  margin-left: 478px;
  font-size: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GrayBox = styled.div`
  width: 700px;
  height: 200px;
  margin-top: 125px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 450px;
  border: 0;
  border-bottom: 1px solid;
  margin: 48px;
  font-size: 35px;
  background-color: #f1f1f1;
`;

const SubmitBtn = styled.button`
  width: 130px;
  height: 50px;
  background-color: #27db85;
  color: white;
  border: 0;
  border-radius: 8px;
  font-size: 30px;
`;
