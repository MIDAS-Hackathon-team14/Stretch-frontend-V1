import styled from "styled-components";

const SideBar = () => {
  return (
    <>
      <SideBarDiv>
        <CompanyInfo>
          <img src="" alt="" />
          <CompanyInfoText>
            <span>마이다스 아이티</span>
            <div>
              <span>중견기업</span>
              <span>ㅤ</span>
              <span>직업 10명</span>
            </div>
            <span>시차 출퇴근 형</span>
          </CompanyInfoText>
        </CompanyInfo>
        <hr />
        <SideNav>
          <div>근무 일정</div>
          <div>근무 현황</div>
        </SideNav>
      </SideBarDiv>
    </>
  );
};

export default SideBar;

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
    font-size: 18px;
    margin-bottom: 15px;
  }
`;
