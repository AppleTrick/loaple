import styled from "styled-components"
import icons from "../../assets/icon/icon.png"

type CardItemProps = {
    scheduleName: string
    time ?: string
}

const CardDiv = styled.div`
  position : relative;
  background: var(--white);
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: var(--blue);
  }

  &:hover div{
    color: var(--white);
  }
` 

const CardNameDiv = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 1.5em;
    color: var(--blue);
`

const CardTimeDiv = styled.div`
    color: var(--black2);
    font-size: 1em;
    margin-top: 5px;
`

const CardIconDiv = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
`

const Card = ({scheduleName, time } : CardItemProps) => {
    return (
        <CardDiv>
            <div>
                <CardNameDiv>{scheduleName}</CardNameDiv>
                <CardTimeDiv>{time ? time : "NextTime"}</CardTimeDiv>
            </div>
            <CardIconDiv src={icons} />
        </CardDiv>
    )
}

export default Card