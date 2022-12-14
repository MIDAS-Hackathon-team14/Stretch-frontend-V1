import axios from "axios";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import CalendarImg from "../../../asset/image/calendar.png";
import { BASE_URL } from "../../../lib/export/data";
import { settingPlan } from "../../../store/setPlan";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const PlanModal = () => {
  const work = ["근무", "외근", "출장", "휴가"];
  const pos = ["회사", "재택", "스마트 워크"];

  const dispatch = useDispatch();
  const planBool = useSelector((state) => state.plan.setPlan);
  const [data, setData] = useState({
    is_out_of_office: false,
    place: "COMPANY",
    // plan_start: "2022-07-18T09:12:00",
    // plan_end: "2022-07-18T18:12:00",
  });
  const [plan, setPlan] = useState({
    date1: "",
    date2: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
  });
  const submit = () => {
    console.log({
      is_out_of_office: data.is_out_of_office,
      place: data.place,
      out_of_office_type: null,
      plan_start: plan.date1 + "T" + plan.time1 + ":" + plan.time2 + ":00",
      plan_end: plan.date2 + "T" + plan.time3 + ":" + plan.time4 + ":00",
    });
    axios({
      url: BASE_URL + "/employees/work/plan",
      method: "post",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      data: {
        is_out_of_office: data.is_out_of_office,
        place: data.place,
        out_of_office_type: null,
        plan_start: plan.date1 + "T" + plan.time1 + ":" + plan.time2 + ":00",
        plan_end: plan.date2 + "T" + plan.time3 + ":" + plan.time4 + ":00",
      },
    }).then((res) => {
      Swal.fire({
        title: "성공",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        dispatch(settingPlan(!planBool));
      });
    });
  };
  return (
    <>
      <MainDiv>
        <Title>계획하기</Title>
        <Day>11/01 (화)</Day>
        <Container padding={75}>
          {work.map((str, i) => (
            <div>
              <CheckInputDiv>
                <CheckInput
                  type={"checkbox"}
                  onClick={() => {
                    setData({ ...data, is_out_of_office: false });
                  }}
                />
                <span>{str}</span>
              </CheckInputDiv>
            </div>
          ))}
        </Container>
        <span>근무 위치</span>
        <Container padding={115}>
          {pos.map((str) => (
            <div>
              <CheckInputDiv>
                <CheckInput
                  type={"checkbox"}
                  onClick={() => setData({ ...data, place: "COMPANY" })}
                />
                <span>{str}</span>
              </CheckInputDiv>
            </div>
          ))}
        </Container>
        <span>근무 시간</span>
        <Container padding={42}>
          <TimeContainer>
            <InputDate>
              <input
                type="date"
                onChange={(e) => {
                  setPlan({ ...plan, date1: e.target.value });
                }}
              />
            </InputDate>
            <InputTime
              type={"number"}
              onChange={(e) => {
                setPlan({ ...plan, time1: e.target.value });
              }}
            />
            <span>:</span>
            <InputTime
              type={"number"}
              onChange={(e) => {
                setPlan({ ...plan, time2: e.target.value });
              }}
            />
          </TimeContainer>
        </Container>
        <WidthHr />
        <Container padding={42}>
          <TimeContainer>
            <InputDate>
              <input
                type="date"
                onChange={(e) => {
                  setPlan({ ...plan, date2: e.target.value });
                }}
              />
            </InputDate>
            <InputTime
              type={"number"}
              onChange={(e) => {
                setPlan({ ...plan, time3: e.target.value });
              }}
            />
            <span>:</span>
            <InputTime
              type={"number"}
              onChange={(e) => {
                setPlan({ ...plan, time4: e.target.value });
              }}
            />
          </TimeContainer>
        </Container>
        <BtnContainer>
          <SubmitBtn
            color="#616161"
            onClick={() => {
              dispatch(settingPlan(!planBool));
            }}
          >
            취소
          </SubmitBtn>
          <SubmitBtn color="#5BCA7E" onClick={() => submit()}>
            완료
          </SubmitBtn>
        </BtnContainer>
      </MainDiv>
    </>
  );
};

export default PlanModal;

const MoveModal = keyframes`
    0% {
        transform: translateX(800px);
    }
    100% {
        transform: translateX(0);
    }
`;

const MainDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #fdfdfd;
  width: 800px;
  height: 100vh;
  right: 0;
  border-left: 2px solid #b6b6b6;
  padding: 30px 28px;
  animation: ${MoveModal} 1s ease-in-out;
`;

const BtnContainer = styled.div`
  width: 100%;
  padding: 20px 120px;
  display: inline-flex;
  justify-content: space-between;
  button {
    width: 170px;
    height: 80px;
    border-radius: 8px;
    font-size: 20px;
    border: none;
    color: #fdfdfd;
    cursor: pointer;
  }
`;

const SubmitBtn = styled.button`
  background-color: ${(props) => props.color};
`;

const WidthHr = styled.hr`
  width: 40px;
  height: 5px;
  border: none;
  background-color: #101010;
  transform: rotateZ(90deg);
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-left: 43px;
`;

const TimeContainer = styled.div`
  gap: 34px;
  display: inline-flex;
  align-items: center;
  margin-top: 15px;
  span {
    font-size: 80px;
  }

  input,
  span {
    margin-top: 15px;
  }
`;

const Day = styled.div`
  margin-top: 30px;
  font-size: 24px;
  margin-bottom: 30px;
  margin-left: 43px;
`;

const Container = styled.div`
  padding: 0px ${(props) => props.padding}px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 750px;
  height: 100px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 31px;
  > div {
    margin-top: -20px;
    width: 100px;
  }
`;

const CheckInput = styled.input`
  position: absolute;
  top: -3px;
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
  margin: 25px 0px 0px 5px;
  display: inline-flex;
  align-items: center;
  > span {
    white-space: nowrap;
    margin-left: 25px;
  }
`;

const InputDate = styled.div`
  input {
    padding-left: 10px;
    font-family: "Gowun Batang", serif;
    width: 170px;
    font-size: 16px;
    background: none;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
    border: 1px solid #e8e8e8;
    outline: none;
    position: relative;
    height: 70px;
    color: #101010;
  }

  input[type="date"]::-webkit-clear-button,
  input[type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    cursor: pointer;
    z-index: 1;
    margin-right: 25px;
  }

  input:after {
    position: absolute;
    top: 50%;
    right: 25px;
    content: "";
    width: 20px;
    height: 20px;

    background-image: url(${CalendarImg});
    background-size: cover;
    transform: translateY(-50%);
    z-index: 0;
  }
`;

const InputTime = styled.input`
  padding-left: 80px;
  width: 185px;
  height: 70px;
  border: 1px solid #e8e8e8;
  background-color: #fdfdfd;
  font-size: 30px;
`;
