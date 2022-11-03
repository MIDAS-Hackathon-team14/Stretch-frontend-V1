import styled, { keyframes } from "styled-components";
import { WorkInfo } from "../../../lib/export/data";
import Schedule from "../../common/Schedule";
import SideBar from "../../common/Sidebar";

const MainPage = () => {
  return (
    <>
      <MainDiv>
        <SideBar />
        <Container>
          <Profile>
            <div>
              <img src="" alt="" />
              <ProfileInfo>
                <ProfileText size={24} weight={700}>
                  김코사
                </ProfileText>
                <ProfileText size={18} weight={400}>
                  부장
                </ProfileText>
              </ProfileInfo>
            </div>
            <div>
              <Gauge height={parseInt(WorkInfo.record_sum / 60) * 1.75}>
                <div></div>
                <span>{parseInt(WorkInfo.record_sum / 60)}</span>
                <hr />
                <span>40</span>
              </Gauge>
              <SubmitBtn>출근</SubmitBtn>
            </div>
          </Profile>
          <Schedule />
        </Container>
      </MainDiv>
    </>
  );
};

export default MainPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdfdfd;
  display: flex;
`;

const Container = styled.div`
  width: 1520px;
  padding: 50px 70px;
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-right: 20px;
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #fff;
  }
  > div {
    display: inline-flex;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileText = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  margin-bottom: 5px;
`;

const GaugeAnimation = (props) => keyframes`
    0% {
        height: 0;
    }
    100% {
        height: ${props}px;
    }
`;

const Gauge = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid #101010;
  border-radius: 4px;

  hr,
  span {
    position: absolute;
  }
  div {
    + span {
      top: 5px;
      left: 5px;
    }
    background-color: #04cf5c;
    width: 100%;
    animation: ${(props) => GaugeAnimation(props.height)} 0.5s ease-in-out;
    animation-fill-mode: forwards;
    position: absolute;
    bottom: 0;
  }
  hr {
    width: 60px;
    height: 2px;
    border: none;
    background-color: #000;
    transform: rotateZ(-45deg);
    + span {
      right: 5px;
      bottom: 5px;
    }
  }
`;

const SubmitBtn = styled.button`
  font-size: 20px;
  border-radius: 4px;
  width: 100px;
  margin-left: 15px;
  outline: none;
  cursor: pointer;
  border: 1px solid #101010;
  color: #fdfdfd;
  font-weight: 500;
  background-color: #04cf5c;
`;
