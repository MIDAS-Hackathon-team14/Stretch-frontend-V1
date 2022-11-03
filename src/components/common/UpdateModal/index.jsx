import styled, { keyframes } from "styled-components";

const UpdateModal = () => {
  return (
    <>
      <MainDiv>
        <Profile>
          <img src="" alt="" />
        </Profile>
        <InputContainer>
          <Input width={200}>
            <input placeholder="김코사" />
            <hr />
          </Input>
          <Input width={200}>
            <input placeholder="부장" />
            <hr />
          </Input>
          <Input width={500}>
            <input placeholder="ldh7228@gmail.com" />
            <hr />
          </Input>
        </InputContainer>
        <BtnContainer>
          <SubmitBtn color="#616161">취소하기</SubmitBtn>
          <SubmitBtn color="#5BCA7E">수정하기</SubmitBtn>
        </BtnContainer>
      </MainDiv>
    </>
  );
};

export default UpdateModal;

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
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  width: 100%;
  padding: 20px 120px;
  display: inline-flex;
  justify-content: space-between;
  button {
    width: 200px;
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

const Profile = styled.div`
  margin-top: 168px;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const InputContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.div`
  input {
    width: ${(props) => props.width}px;
    border: none;
    margin-bottom: 10px;
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    &::placeholder {
      color: black;
    }
  }
  hr {
    width: ${(props) => props.width}px;
    height: 1px;
    background-color: #b6b6b6;
    border: none;
    margin: 0 0 45px 0;
  }
`;
