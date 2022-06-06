import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const WrapperNotLocation = styled.div`
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;

  svg {
    font-size: 4rem;
  }
`
