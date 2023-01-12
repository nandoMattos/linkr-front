import styled from "styled-components";
import { colors } from "../assets/constants";
import RefreshIcon from "../assets/images/RefreshIcon.png";

export default function RefreshPosts() {
  return (
    <ContainerRefreshPosts>
      <h1>x new posts, load more!</h1>
      <img src={RefreshIcon} alt="Load more" />
    </ContainerRefreshPosts>
  )
}

const ContainerRefreshPosts = styled.div`
  width: 100%;
  height: 61px;
  margin-top: 20px;
  background-color: ${colors.BUTTON_COLOR};
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  h1 {
    margin-right: 10px;
  }
`