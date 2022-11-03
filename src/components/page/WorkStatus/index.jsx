import styled, { keyframes } from "styled-components";
import { BASE_URL, EmployList } from "../../../lib/export/data";
import SideBar from "../../common/Sidebar";
import guestImg from "../../../asset/image/guest.png";
import { useEffect, useState } from "react";
import axios from "axios";

const WorkStatus = () => {
  const [list, setList] = useState(EmployList);
  useEffect(() => {
    axios({
      url: BASE_URL + "/employees/work/status/list",
      method: "get",
    }).then((res) => {
      setList(res.data);
    });
  }, []);
  return (
    <>
      <MainDiv>
        <SideBar />
        <ListContainer>
          <span>근무 현황</span>
          <Employees>
            {list.week_plan.map((item) => (
              <List>
                <Profile>
                  <img src={guestImg} alt="" />
                  <Dot />
                </Profile>
                <ProfileName>{item.user_name}</ProfileName>
                <Graph>
                  <GraphBar left={200} width={300} />
                </Graph>
                <Working>{item.is_working ? "근무중" : "-"}</Working>
              </List>
            ))}
          </Employees>
        </ListContainer>
      </MainDiv>
    </>
  );
};

export default WorkStatus;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdfdfd;
  display: flex;
  > span {
    margin-left: 52px;
  }
`;

const Working = styled.div`
  width: 240px;
  display: flex;
  font-size: 18px;
  justify-content: center;
`;

const Graph = styled.div`
  width: 648px;
  height: 30px;
  background-color: #efefef;
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
  height: 100%;
  margin-left: ${(props) => props.left}px;
  animation: ${(props) => animationGraph(props.width)} 1s ease-in-out;
  animation-fill-mode: forwards;
  background-color: #5bca7e;
`;

const ListContainer = styled.div`
  margin-top: 183px;
  margin-left: 118px;
`;

const Dot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #5bca7e;
  border-radius: 50%;
`;

const Profile = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  display: inline-flex;
  margin-left: 30px;
  margin-right: 15px;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const ProfileName = styled.div`
  font-size: 24px;
  margin-right: 70px;
`;

const List = styled.div`
  width: 100%;
  height: 100px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #b6b6b6;
  margin-bottom: 25px;
  border-radius: 10px;
`;

const Employees = styled.div`
  width: 1225px;
  margin-top: 10px;
  height: 600px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0px 20px;

  &::-webkit-scrollbar {
    background-color: #f1f1f1;
    border-radius: 7px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5bca7e;
    border-radius: 7px;
    width: 10px;
  }
`;
