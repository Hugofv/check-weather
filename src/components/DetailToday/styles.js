import styled from "styled-components";

export const BoxContent = styled.div`
    color: #fff;
    padding: 2rem;
`

export const BoxTitle = styled.h4`
    font-size: 1.6rem;
    margin-bottom: 0;
`

export const BoxTemperature = styled.h2`
    font-weight: bold;
    font-size: 4rem;
`

export const BoxCondition = styled.span`
    font-size: 1.3rem;
`

export const BoxDate = styled.p`
    font-size: 1rem;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    svg {
        fill: #fff;
    }
`