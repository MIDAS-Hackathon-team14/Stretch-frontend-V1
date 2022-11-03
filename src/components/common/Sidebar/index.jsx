import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL, EmployList } from "../../../lib/export/data";
import CompanyLogo from "../../../asset/image/companyLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { settingPlan } from "../../../store/setPlan";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan.setPlan);
  const update = useSelector((state) => state.plan.setUpdate);

  const admin = true;
  const [company, setCompany] = useState({
    company_id: 1,
    name: "마이다스IT",
    flex_time: "SELECT",
    employees_count: 15,
  });
  const [employList, setEmployList] = useState(EmployList);

  useEffect(() => {
    axios({
      url: BASE_URL + "/companys",
      method: "get",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      setCompany(res.data);
    });
    axios({
      url: BASE_URL + "/employees/work/status/list",
      method: "get",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res.data);
      setEmployList(res.data);
    });
  }, [setEmployList]);
  return (
    <>
      <SideBarDiv>
        <CompanyInfo>
          <img src={CompanyLogo} alt="" />
          <CompanyInfoText>
            <span>{company.name}</span>
            <div>
              <span>직원 {company.employees_count}명</span>
            </div>
            <span>
              {company.flex_time === "SELECT"
                ? "근무시간 선택형"
                : company.flex_time === "TIME_DIFFERENCE"
                ? "시차 출퇴근형"
                : "집약근무형"}
            </span>
          </CompanyInfoText>
        </CompanyInfo>
        <hr />
        <SideNav>
          <div>근무 일정</div>
          <Link to={"/status"}>
            <div>
              <a>근무 현황</a>
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(settingPlan(!plan));
            }}
          >
            계획하기
          </div>
          {admin ? (
            <Employees>
              {employList.week_plan.map((item) => (
                <div>{item.user_name}</div>
              ))}
            </Employees>
          ) : (
            <></>
          )}
        </SideNav>
      </SideBarDiv>
    </>
  );
};

export default SideBar;

const Employees = styled.div`
  margin-left: 10px;
`;

const SideBarDiv = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fdfdfd;
  border-right: 2px solid #9b9ea0;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  hr {
    width: 300px;
    height: 2px;
    border: none;
    background-color: #9b9ea0;
  }
`;

const CompanyInfo = styled.div`
  display: inline-flex;
  gap: 20px;
  margin: 30px 30px 55px 30px;
  img {
    border-radius: 50%;
  }
`;
const CompanyInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > span {
    font-size: 19px;
  }
  div {
    margin-bottom: 18px;
    font-size: 14px;
  }
`;

const SideNav = styled.div`
  padding: 80px 50px;
  div {
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 15px;
  }
`;
