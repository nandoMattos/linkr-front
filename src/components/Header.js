import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/constants";

export default function Header() {
  return (
  <Container>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>

      <div className="right">
        <ion-icon name="chevron-down-outline"></ion-icon>
        <img src="http://encurtador.com.br/gLMP9" alt="user_img"></img>
      </div>
  </Container>
  );
}

const Container = styled.div`
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${colors.SECONDARY_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  box-shadow: 0px 4px 4px 0px #00000040;

  h1 {
    font-family: 'Passion One', cursive;
    font-size: 49px;
    font-weight: 700;
    color: white;
  }

  .right {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
      font-size: 35px;
      color: white;
    }

    img {
      height: 53px;
      width: 53px;
      border-radius: 30px;
    }
  }
`;