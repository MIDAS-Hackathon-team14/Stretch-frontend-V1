import axios from "axios";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BASE_URL, WorkInfo } from "../../../lib/export/data";
import Schedule from "../../common/Schedule";
import SideBar from "../../common/Sidebar";
import PlanModal from "../../common/PlanModal";
import UpdateModal from "../../common/UpdateModal";
import WorkModal from "../../common/WorkModal";
import guestImg from "../../../asset/image/guest.png";
import { useSelector, useDispatch } from "react-redux";
import { settingUpdate } from "../../../store/setPlan";
import Swal from "sweetalert2";

const MainPage = () => {
  const dispatch = new useDispatch();
  const plan = useSelector((state) => state.plan.setPlan);
  const admin = false;
  const [update, setUpdate] = useState(false);
  const [work, setWork] = useState(WorkInfo);

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    axios({
      url: BASE_URL + "/users",
      method: "get",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  useEffect(() => {
    axios({
      url: BASE_URL + "/employees/work/info",
      method: "get",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      setWork(res.data);
    });
  }, [setWork]);

  const onWork = () => {
    axios({
      url: BASE_URL + "/employees/work/go",
      method: "post",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      Swal.fire({
        title: "성공",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        window.location.reload();
      });
    });
  };

  return (
    <>
      <MainDiv>
        <SideBar />
        <Container>
          <Profile>
            <div>
              <img src={guestImg} alt="" />
              <ProfileInfo>
                <ProfileText size={24} weight={700}>
                  {user.name}
                </ProfileText>
                {admin ? (
                  <ProfileText size={18} weight={400}>
                    {user.email}
                  </ProfileText>
                ) : (
                  <ProfileText
                    style={{ cursor: "pointer" }}
                    size={18}
                    weight={400}
                    onClick={() => {
                      setUpdate(!update);
                    }}
                  >
                    수정하기
                  </ProfileText>
                )}
              </ProfileInfo>
            </div>
            <div>
              <Gauge height={parseInt(work.record_sum / 60) * 1.75}>
                <div></div>
                <span>{parseInt(work.record_sum / 60)}h</span>
                <hr />
                <span>40h</span>
              </Gauge>
              <SubmitBtn onClick={() => onWork()}>출근</SubmitBtn>
            </div>
          </Profile>
          <Schedule work={work} />
        </Container>
      </MainDiv>
      {plan ? <PlanModal /> : <></>}
      {update ? <UpdateModal /> : <></>}
      {/* <WorkModal /> */}
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
  font-size: 15px;
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
    animation: ${(props) => GaugeAnimation(props.height)} 1s ease-in-out;
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
