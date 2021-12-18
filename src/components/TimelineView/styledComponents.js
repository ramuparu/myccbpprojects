// Style your elements here

import styled from 'styled-components'

export const TimelineViewPage = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
`

export const TimelineViewMainCon = styled(TimelineViewPage)`
  width: 350px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    width: 750px;
  }
`
export const MyJourneyHead = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 28px;
  }
`

export const CCbpHead = styled(MyJourneyHead)`
  font-size: 23px;
  color: #2b237c;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
export const ChronoContainer = styled.div`
  min-height: 60vh;

  width: 100%;
`
