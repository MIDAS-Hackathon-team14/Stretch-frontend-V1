import styled from "styled-components";
import { useState } from "react";

const enterCode = () => {

    return (
        <body>
        <Box>
            코드를 입력해 주세요.
            <GrayBox>
                <Input></Input>
                <SubmitBtn>입력</SubmitBtn>
            </GrayBox>
        </Box>
        </body>
    );
};

export default enterCode;

const body = styled.div`
    width: 100%;
    height: 100%;
`

const Box = styled.div `
    width : 964px;
    height : 655px;
    background-color : #ffffff;
    display : flex;
    padding-top: 133px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 212px;
    margin-left: 478px;
    font-size: 40px;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`

const GrayBox = styled.div`
    width: 700px;
    height: 200px;
    margin-top: 125px;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
`

const Input = styled.input`
    width: 450px;
    border: 0;
    border-bottom : 1px solid;
    margin: 48px;
    font-size: 35px;
    background-color: #F1F1F1;
`

const SubmitBtn = styled.button`
    width: 130px;
    height: 50px;
    background-color: #27DB85;
    color: white;
    border: 0;
    border-radius:8px;
    font-size:30px;
`