import styled from "styled-components";
import { useState } from "react";

const Makecompany = () => {

    return (
        <Body>
        <Box>
            회사를 만들어 주세요.
            <GreenBox><CompanyName placeholder="회사 이름"></CompanyName></GreenBox>
            <GreenBox2>
                <RadioBox>
                <input type='radio' id='sicha' value='sicha'/>
                <label>시차 출퇴근</label>
                </RadioBox>
                <RadioBox>
                <input type='radio' id='choosetime' value='choosetime'/>
                <label>근무 시간 선택</label>
                </RadioBox>
                <RadioBox>
                <input type='radio' id='throwwork' value='throwwork'/>
                <label>집약 근무</label>
                </RadioBox>
            </GreenBox2>
            <GreenBox3>
            <RadioBox>
                <input type='radio' id='home' value='home'/>
                <label>재택 근무</label>
            </RadioBox>
            <RadioBox>
                <input type='radio' id='smartwork' value='smartwork'/>
                <label>스마트워크 근무</label>
            </RadioBox>
            </GreenBox3>
            <Submit>만들기</Submit>
        </Box>
        
        </Body>
    );
};

export default Makecompany;

const Body = styled.div`
    width: 1920px;
    height: 1080px;
`

const Box = styled.div `
    width : 964px;
    height : 655px;
    background-color : #ffffff;
    display : flex;
    padding-top: 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 212px;
    margin-left: 478px;
    font-size: 40px;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`

const CompanyName = styled.input`
    font-size: 30px;
    padding-left: 30px;
    margin-top: 40px;
    border: 0;
`

const GreenBox = styled.div`
    margin-top: 38px;
    width: 800px;
    height: 120px;
    border: 1px solid #27DB85;
    border-radius: 5px;
`

const GreenBox2 = styled.div`
    width: 800px;
    height: 120px;
    border: 1px solid #27DB85;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 65px;
    padding-right: 65px;
    margin-top: 20px;
`

const GreenBox3 = styled.div`
    width: 800px;
    height: 120px;
    border: 1px solid #27DB85;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 130px;
    padding-right: 100px;
    margin-top: 20px;
`

const RadioBox = styled.div`
    font-size: 35px;
`

const Submit = styled.button`
    margin-top: 23px;
    width: 150px;
    height: 60px;
    box-shadow: #CBCBCB 6px 3px 9px, #CBCBCB 0px 4px 9px;
    border: 0;
    border-radius: 8px;
    background-color: white;
    font-size: 30px;
`