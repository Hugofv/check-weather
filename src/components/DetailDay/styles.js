import { Box } from "@mui/material";
import styled from "styled-components";

export const BackgroundBlur = styled.div`
    filter: blur(3px);
    -webkit-filter: blur(3px);
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: #fff;
    opacity: 0.2;
    position: absolute;
`

export const WrapperContent = styled(Box)`
  color: white;
  font-weight: bold;
  z-index: 2;
  padding: 20px;
  text-align: center;
`

export const WrapperWeekDay = styled.span`
    font-size: 3rem;
    font-weight: bold;
`

export const WrapperDay = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`

export const BoxMax = styled.span`
    font-size: 1.4rem;
`

export const BoxMin = styled.span`
    font-size: 1.2rem;
`