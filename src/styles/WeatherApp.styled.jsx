import { styled } from "styled-components";
import {Container} from "../styles/Home.styled"
import {Form} from "../styles/Login.styled";

export const WeatherContainer  = styled(Container)`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


` 

export const FormWeather = styled(Form)`

display:flex;
height:100px;
gap:.5rem;
@media (max-width: ${({ theme }) => theme.screens.lg}) {
    width:350px;
  gap:.5rem;
    padding:.5rem;
  }



`
export const  FormInput  = styled.input`
width:400px;

@media (max-width: ${({ theme }) => theme.screens.lg}) {
    width:200px;
    
  }

`

export const WeatherButton = styled.button`

width:100px;
height:45px;

`

export const WeatherCards = styled.section`
margin-top:20px;
height:800px;
text-align:center;
color:${({theme})=> theme.colors.color};

@media (max-width: ${({ theme }) => theme.screens.lg}) {
width:370px;
height:950px;
  }


`
