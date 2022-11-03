import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../lib/export/data";
import Swal from "sweetalert2";

const Makecompany = () => {
  const [data, setData] = useState({
    name: "",
    flex_time: "",
    flex_place_list: ["SMART_WORK", "HOME"],
  });
  const flex_time = [
    { name: "시차 출퇴근", key: "TIME_DIFFERENCE" },
    { name: "근무 시간 선택", key: "SELECT" },
    { name: "집약 근무", key: "INTENSIVE" },
  ];
  const flex_place = [
    { name: "재택 근무", key: "HOME" },
    { name: "스마크워크 근무", key: "SMART_WORK" },
  ];

  const check = (str, props) => {
    setData({ ...data, [props]: str });
  };

  const inputChange = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const submit = () => {
    axios({
      url: BASE_URL + "/companys",
      method: "post",
      data: data,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res.data);
      Swal.fire({
        title: "성공",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        window.location.href = "/invite";
      });
    });
  };

  return (
    <Body>
      <Box>
        회사를 만들어 주세요.
        <GreenBox>
          <CompanyName
            placeholder="회사 이름"
            onChange={(e) => inputChange(e)}
          ></CompanyName>
        </GreenBox>
        <GreenBox2>
          {flex_time.map((str) => (
            <CheckInputDiv>
              <CheckInput
                type={"checkbox"}
                value={data.flex_time === str.key}
                onChange={(e) => check(str.key, "flex_time")}
              />
              <span>{str.name}</span>
            </CheckInputDiv>
          ))}
        </GreenBox2>
        <GreenBox3>
          {flex_place.map((str) => (
            <CheckInputDiv>
              <CheckInput
                type={"checkbox"}
                value={data.flex_time === str.key}
                onChange={(e) => check(str.key, "flex_place")}
              />
              <span>{str.name}</span>
            </CheckInputDiv>
          ))}
        </GreenBox3>
        <Submit onClick={() => submit()}>만들기</Submit>
      </Box>
    </Body>
  );
};

export default Makecompany;

const Body = styled.div`
  width: 1920px;
  height: 1080px;
`;

const Box = styled.div`
  width: 964px;
  height: 655px;
  background-color: #ffffff;
  display: flex;
  padding-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 212px;
  margin-left: 478px;
  font-size: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompanyName = styled.input`
  font-size: 30px;
  padding-left: 30px;
  margin-top: 40px;
  border: 0;
`;

const GreenBox = styled.div`
  margin-top: 38px;
  width: 800px;
  height: 120px;
  border: 1px solid #27db85;
  border-radius: 5px;
`;

const GreenBox2 = styled.div`
  width: 800px;
  height: 120px;
  border: 1px solid #27db85;
  border-radius: 5px;
  display: flex;
  gap: 230px;
  align-items: center;
  padding-left: 65px;
  padding-right: 65px;
  margin-top: 20px;
`;

const GreenBox3 = styled.div`
  width: 800px;
  height: 120px;
  border: 1px solid #27db85;
  border-radius: 5px;
  display: flex;
  gap: 330px;
  align-items: center;
  padding-left: 130px;
  padding-right: 100px;
  margin-top: 20px;
`;

const Submit = styled.button`
  margin-top: 23px;
  width: 150px;
  height: 60px;
  box-shadow: #cbcbcb 6px 3px 9px, #cbcbcb 0px 4px 9px;
  border: 0;
  border-radius: 8px;
  background-color: white;
  font-size: 30px;
`;

const CheckInput = styled.input`
  position: absolute;
  top: -2px;
  left: -4px;
  cursor: pointer;
  appearance: none;
  width: 11px;
  height: 11px;
  border: 1px solid #fff;

  :checked {
    border: 1px solid #fff;
    background-color: #04cf5c;
  }
`;

const CheckInputDiv = styled.span`
  width: 15px;
  height: 15px;
  position: relative;
  border: 1.5px solid #9b9ea0;
  margin: 0px 0px 0px 5px;
  display: inline-flex;
  font-size: 20px;
  align-items: center;
  > span {
    white-space: nowrap;
    margin-left: 25px;
  }
`;
