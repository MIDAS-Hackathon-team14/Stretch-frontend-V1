import { WorkInfo } from "../../../lib/export/data";
import styled, { keyframes } from "styled-components";
import vacationImage from "../../../asset/image/plane.png";

const Schedule = () => {
  const week = ["월", "화", "수", "목", "금", "토", "일"];

  const getTime = (str, plan, index) => {
    return parseInt(
      WorkInfo.week_plan[str][plan].substring(11, 16).split(":")[index]
    );
  };

  const getGraphWidth = (str, plan) => {
    return getTime(str, plan, 0) * 60 + getTime(str, plan, 1);
  };

  return (
    <ScheduleDiv>
      <span>근무 일정</span>
      <Table>
        {week.map((str, i) => (
          <>
            <div>
              <ScheduleText right={34}>
                {WorkInfo.week_plan[i].date.substring(5).replace("-", "/")}
              </ScheduleText>
              <ScheduleText
                right={63}
                color={
                  str === "토" ? "#0C43B7" : str === "일" ? "#E63E70" : "#000"
                }
              >
                {str}
              </ScheduleText>
              <Graph>
                {WorkInfo.week_plan[i].is_planed !== false ? (
                  <>
                    {WorkInfo.week_plan[i].out_of_office_type !== "휴가" ? (
                      <>
                        <GraphBar
                          delay={0}
                          width={
                            (getGraphWidth(i, "plan_end") -
                              getGraphWidth(i, "plan_start")) *
                            0.45
                          }
                          left={getGraphWidth(i, "plan_start") * 0.45}
                          color="rgba(91, 202, 126, 0.4)"
                        />
                        <GraphBar
                          delay={1}
                          width={
                            (getGraphWidth(i, "record_end") -
                              getGraphWidth(i, "record_start")) *
                            0.45
                          }
                          left={getGraphWidth(i, "record_start") * 0.45}
                          color={
                            WorkInfo.week_plan[i].out_of_office_type === "출장"
                              ? "rgb(236, 122, 136)"
                              : "rgba(91, 202, 126, 0.7)"
                          }
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </Graph>
              {WorkInfo.week_plan[i].out_of_office_type !== "휴가" ? (
                <>
                  <ScheduleText left={30}>
                    {!WorkInfo.week_plan[i].is_out_of_office ? (
                      <>
                        <div>
                          {WorkInfo.week_plan[i].is_planed !== false ? (
                            <>
                              {WorkInfo.week_plan[i].record_start ? (
                                <ScheduleText>
                                  {WorkInfo.week_plan[i].record_start.substring(
                                    11,
                                    16
                                  )}{" "}
                                  출근
                                </ScheduleText>
                              ) : (
                                <ScheduleText color={"#828282"}>
                                  {WorkInfo.week_plan[i].plan_start.substring(
                                    11,
                                    16
                                  )}{" "}
                                  출근
                                </ScheduleText>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div>
                          {WorkInfo.week_plan[i].is_planed !== false ? (
                            <>
                              {WorkInfo.week_plan[i].record_end ? (
                                <ScheduleText>
                                  {WorkInfo.week_plan[i].record_end.substring(
                                    11,
                                    16
                                  )}{" "}
                                  퇴근
                                </ScheduleText>
                              ) : (
                                <ScheduleText color={"#828282"}>
                                  {WorkInfo.week_plan[i].plan_end.substring(
                                    11,
                                    16
                                  )}{" "}
                                  퇴근
                                </ScheduleText>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
                    ) : (
                      <ScheduleText left={25} right={25} color={"#DA2C61"}>
                        출장
                      </ScheduleText>
                    )}
                  </ScheduleText>
                  <ScheduleText left={44} width={100}>
                    <span>
                      <span>
                        {WorkInfo.week_plan[i].is_planed !== false ? (
                          <>
                            {String(
                              parseInt(
                                (getGraphWidth(i, "record_end") -
                                  getGraphWidth(i, "record_start")) /
                                  60
                              )
                            ).padStart(2, "0")}
                            :
                            {String(
                              (getGraphWidth(i, "record_end") -
                                getGraphWidth(i, "record_start")) %
                                60
                            ).padStart(2, "0")}
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                      <span>{WorkInfo.week_plan[i].place}</span>
                    </span>
                  </ScheduleText>
                </>
              ) : (
                <>
                  <VacationEmoji src={vacationImage} alt="" />
                  <ScheduleText color={"#0740B8"}>휴가</ScheduleText>
                </>
              )}
            </div>
            {i !== week.length - 1 ? <hr /> : <></>}
          </>
        ))}
      </Table>
    </ScheduleDiv>
  );
};

export default Schedule;

const VacationEmoji = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 115px;
  object-fit: cover;
`;

const ScheduleDiv = styled.div`
  width: 1250px;
  margin-left: 47px;
  margin-top: 63px;
  > span {
    margin-left: 37px;
    font-size: 20px;
  }
`;

const Table = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 650px;
  border: 2px solid #b6b6b6;
  border-radius: 8px;
  padding: 31px 68px;

  > div {
    display: inline-flex;
    align-items: center;
    margin-bottom: 20px;
  }

  hr {
    width: 1100px;
    height: 2px;
    border-radius: 4px;
    border: none;
    background-color: #cccccc;

    margin: 0 0 20px 0;
  }
`;

const ScheduleText = styled.div`
  font-size: 19px;
  font-weight: 500;
  width: ${(props) => props.width}px;
  margin-left: ${(props) => props.left}px;
  margin-right: ${(props) => props.right}px;
  color: ${(props) => props.color};
  div {
    font-size: 17px;
    display: flex;
    flex-direction: column;
  }

  span {
    display: flex;
    flex-direction: column;
    text-align: center;
    + span {
      font-size: 13px;
    }
  }
`;

const Graph = styled.div`
  width: 648px;
  height: 30px;
  background-color: #efefef;
  position: relative;
`;

const animationGraph = (width) => keyframes`
    0% {
      width: 0px;
    }
    100% {
      width: ${width}px;
    }
  `;
const GraphBar = styled.div`
  position: absolute;
  height: 100%;
  margin-left: ${(props) => props.left}px;
  background-color: ${(props) => props.color};
  animation: ${(props) => animationGraph(props.width)} 1s ease-in-out;
  animation-delay: ${(props) => props.delay}s;
  animation-fill-mode: forwards;

  @keyframes animationGraph {
    0% {
      width: 0px;
    }
    100% {
      width: ${(props) => props.width}px;
    }
  }
`;
