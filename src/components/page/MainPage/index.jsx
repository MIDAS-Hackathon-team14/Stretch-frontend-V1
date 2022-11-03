import styled from "styled-components";

const MainPage = () => {
  const days = ["mon", "tue", "wed", "thu", "fri"];
  return (
    <>
      <MainDiv>
        <SideBar></SideBar>
        <Container>
          <div>마이다스 아이티</div>
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
            <div>ads</div>
          </Profile>
          <div>asddsa</div>
        </Container>
      </MainDiv>
    </>
  );
};

export default MainPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9d9d9;
  display: flex;
`;

const SideBar = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Container = styled.div`
  width: 1520px;
  padding: 30px 50px;
`;

const Profile = styled.div`
  width: 100%;
  margin-top: 47px;
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
