// Style your elements here

import styled from 'styled-components'

export const ProjectCardCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProjectImage = styled.img`
  height: 200px;
  width: 100%;
`

export const ProjectTitle = styled.h1`
  color: #171f46;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 25px;
  }
`

export const ProjectTitleCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const IconCard = styled.div`
  display: flex;
  align-items: center;
`
export const TimePara = styled(ProjectTitle)`
  font-size: 12px;
  margin-left: 4px;
`

export const VisitAnchor = styled.a`
  color: #0967d2;
  font-size: 13px;
  font-family: 'Roboto';
  text-decoration: none;
`
