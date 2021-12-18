// Style your elements here

import styled from 'styled-components'

export const CourseCardCon = styled.div`
  display: flex;
  flex-direction: column;
`

export const CourseTitleCard = styled(CourseCardCon)`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const CourseTitleHead = styled.h1`
  color: #171f46;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 25px;
  }
`

export const IconCard = styled.div`
  display: flex;
  align-items: center;
`

export const TimePara = styled(CourseTitleHead)`
  font-size: 12px;
  margin-left: 4px;
`
export const TagItemsCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const TagItemsList = styled.p`
  list-style-type: none;
  background-color: gray;
  border-radius: 5px;
  padding: 10px;
  margin-right: 3px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
`
