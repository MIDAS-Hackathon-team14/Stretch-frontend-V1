import styled from "styled-components";
import SelectContainer from "./SelectContainer";
import companyImg from "../../../../asset/image/building.png";
import employeeImg from "../../../../asset/image/employee.png";

const Select = () => {
  const data = [
    {
      img: employeeImg,
      title: "직원으로 소속되기",
      description: (
        <>
          회사에 소속되어 간편한 출퇴근을 <br /> 누려보세요!
        </>
      ),
    },
    {
      img: companyImg,
      title: "회사 생성하기",
      description: (
        <>
          직원들을 모니터링 하면서 <br /> 손쉽게 관리해보세요!
        </>
      ),
    },
  ];
  return (
    <>
      <MainDiv>
        {data.map((item) => (
          <SelectContainer
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </MainDiv>
    </>
  );
};

export default Select;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1742.29 -275.938L2364.29 549.505L1246.63 631.019L1742.29 -275.938Z' fill='%2327DB85'/%3E%3Cellipse cx='274.5' cy='976' rx='359.5' ry='355' fill='%2327DB85'/%3E%3C/svg%3E%0A");
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
