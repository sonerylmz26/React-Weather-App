import { styled } from "styled-components";
import {Container} from "../styles/Home.styled"


export const FormContainer = styled(Container)`
  width: 100%;
  padding: 0.5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  gap:.5rem;

`

export const Form = styled.form`

width:600px;
height:600px;
padding:2rem;
margin-top:2rem;

@media (max-width: ${({ theme }) => theme.screens.lg}) {
    width:200px;
    height:300px;
    padding:.5rem;
  }

`

export const Img = styled.img`
width:600px;
height:600px;
@media (max-width: ${({ theme }) => theme.screens.lg}) {
    width:200px;
    height:300px;
  }
`

export const Label = styled.label`
font-size:1.1rem;
margin-left:.5rem;
color: ${({theme}) => theme.colors.color};


`


