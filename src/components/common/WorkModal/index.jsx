import axios from "axios";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BASE_URL, WorkInfo } from "../../../lib/export/data";

const WorkModal = () => {
  const [work, setWork] = useState(WorkInfo);
  useEffect(() => {
    axios({
      url: BASE_URL + "/employees/work/info",
      method: "get",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      setWork(res.data.week_plan[4]);
    });
  });

  const getTime = (str, plan, index) => {
    return parseInt(
      String(WorkInfo.week_plan[str][plan]).substring(11, 16).split(":")[index]
    );
  };
  return (
    <>
      <MainDiv>
        <Day>11/04 (금)</Day>
        <WorkText left={43}>계획한 근무 시간</WorkText>
        <TimeContainer>
          <div>
            {String(work.plan_start).substring(11, 16)}-
            {String(work.plan_end).substring(11, 16)}
          </div>
          <div>
            {parseInt(String(work.plan_end).substring(11, 16)) -
              parseInt(String(work.plan_start).substring(11, 16))}
          </div>
        </TimeContainer>
        <WorkText left={43}>근무 시간</WorkText>
        <TimeContainer>
          <div>
            {String(work.record_start).substring(11, 16)}-
            {String(work.record_end).substring(11, 16)}
          </div>
          <div>{parseInt(String(work.plan_start).substring(11, 16)) - 3}</div>
        </TimeContainer>
        <WorkText left={43}>
          8시간 기준{" "}
          <WorkText left={0} color="#EC7A88">
            미달
          </WorkText>{" "}
          근무하셨습니다
        </WorkText>
        <Graph>
          <GraphBar
            width={parseInt(String(work.plan_start).substring(11, 16)) * 60}
          />
        </Graph>
        <SubmitBtn>
          <button>확인</button>
        </SubmitBtn>
      </MainDiv>
    </>
  );
};

export default WorkModal;

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

const Graph = styled.div`
  width: 676px;
  height: 45px;
  border: 1px solid #d0d0d0;
  margin-left: 27px;
  margin-top: 10px;
  margin-bottom: 80px;
`;

const MoveGraph = (width) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${width}px;
    }
`;

const GraphBar = styled.div`
  width: 0px;
  height: 100%;
  background-color: #ec7a88;
  animation: ${(props) => MoveGraph(props.width)} 1s ease-in-out;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
`;

const WorkText = styled.span`
  margin-left: ${(props) => props.left}px;
  font-size: 18px;
  color: ${(props) => props.color};
`;

const SubmitBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 150px;
    height: 60px;
    text-align: center;
    border: none;
    background-color: #616161;
    color: #fff;
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Day = styled.div`
  margin-top: 30px;
  font-size: 24px;
  margin-bottom: 60px;
  margin-left: 43px;
`;

const TimeContainer = styled.div`
  margin-left: 22px;
  display: inline-flex;
  gap: 30px;
  margin-top: 10px;
  margin-bottom: 53px;
  div {
    width: 320px;
    height: 144px;
    border-radius: 8px;
    border: 1px solid #aaaaaa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;
