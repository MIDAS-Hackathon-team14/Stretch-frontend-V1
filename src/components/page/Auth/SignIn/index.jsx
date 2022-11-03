import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const str = [
    {
      name: "Email",
      placeholder: "Enter to Email",
      key: "email",
    },
    {
      name: "Password",
      placeholder: "Enter to Password",
      key: "password",
    },
  ];

  const changeInput = (e, props) => {
    setData({ ...data, [props]: e.target.value });
  };

  const submit = () => {
    if (!Object.values(data).includes("")) {
      axios({
        method: "post",
        url: "http://52.55.240.35:8080/users/auth",
        data: {
          email: data.email,
          password: data.password,
        },
      }).then((res) => {
        const { access_token, refresh_token } = res.data;
        console.log(res.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        sessionStorage.setItem("accessToken", access_token);
        Swal.fire({
          title: "성공",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          window.location.href = "select";
        });
      });
    } else alert("내용을 입력해주세요");
  };
  return (
    <>
      <MainDiv>
        <Container>
          <Banner>
            <Title>
              <TitleText size={40} weight={700}>
                Login
              </TitleText>
              <TitleText size={24} weight={400}>
                Welcome to our <br /> Stretch!
              </TitleText>
            </Title>
          </Banner>
          <Auth>
            <>
              {str.map((item) => (
                <Input>
                  <span>{item.name}</span>
                  <input
                    placeholder={item.placeholder}
                    onChange={(e) => changeInput(e, item.key)}
                    type={
                      item.name.substring(0, 8) === "Password"
                        ? "password"
                        : "text"
                    }
                  />
                  <hr />
                </Input>
              ))}
            </>

            <Submit>
              <button onClick={() => submit()}>Login</button>
              <HighlightText>or</HighlightText>
              <HighlightText>
                <Link to={"/signup"}>
                  <a>SignUp</a>
                </Link>
              </HighlightText>
            </Submit>
          </Auth>
        </Container>
      </MainDiv>
    </>
  );
};

export default Login;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1742.29 -275.938L2364.29 549.505L1246.63 631.019L1742.29 -275.938Z' fill='%2327DB85'/%3E%3Cellipse cx='274.5' cy='976' rx='359.5' ry='355' fill='%2327DB85'/%3E%3C/svg%3E%0A");
`;

const Container = styled.div`
  width: 964px;
  height: 655px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fdfdfd;
  display: flex;
`;

const Banner = styled.div`
  width: 392px;
  height: 655px;
  background-image: url("data:image/svg+xml,%3Csvg width='392' height='655' viewBox='0 0 392 655' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8.00002C0 3.58174 3.58172 0 8 0H384C388.418 0 392 3.58172 392 8V647C392 651.418 388.418 655 384 655H8C3.58172 655 0 651.418 0 647V8.00002Z' fill='url(%23paint0_linear_0_1)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M205.024 655H8C3.58172 655 0 651.418 0 647V449.654C24.1886 432.865 53.7248 423 85.6098 423C167.563 423 234 488.173 234 568.569C234 600.932 223.234 630.829 205.024 655Z' fill='%23A6FFD4' fill-opacity='0.3'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M331.678 0H384C388.418 0 392 3.58173 392 8V179.181L178.042 127.813L331.678 0Z' fill='%239BFFCF' fill-opacity='0.3'/%3E%3Crect x='297.069' y='286' width='50' height='48' rx='6' transform='rotate(56.5927 297.069 286)' fill='%239BFFCF' fill-opacity='0.3'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_1' x1='202' y1='1.63766e-07' x2='196' y2='791.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2386DC73'/%3E%3Cstop offset='1' stop-color='%231DB18F'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  padding-top: 127px;
  box-sizing: border-box;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 53px;
`;

const TitleText = styled.div`
  text-align: center;
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: #fdfdfd;
`;

const Auth = styled.div`
  margin-top: 186px;
  padding-left: 114px;
  width: 572px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  span {
    color: #9b9ea0;
    font-size: 14px;
    margin-bottom: 5px;
    margin-left: 5px;
  }
  input {
    font-size: 18px;
    margin-bottom: 5px;
    padding-left: 5px;
    border: none;
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: #9b9ea0;
    border: none;
    margin: 0;
  }
`;

const HighlightText = styled.span`
  color: #9b9ea0;
  font-size: 18px;
  a {
    cursor: pointer;
    text-decoration: none;
    color: #04cf5c;
  }
`;

const Submit = styled.div`
  margin-top: 106px;
  font-size: 18px;
  font-weight: 500;
  button {
    border: none;
    background-color: #55cf82;
    color: #fdfdfd;
    font-size: 18px;
    font-weight: 500;
    width: 153px;
    height: 42px;
    border-radius: 6px;
    cursor: pointer;
  }
  > span {
    margin-left: 13px;
  }
`;
