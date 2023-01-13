import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { colors } from "../assets/constants";
import UserContext from "../context/UserContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const { showLogout, setShowLogout } = useContext(UserContext);

  const profileImg = JSON.parse(localStorage.getItem("profileImg"));

  const navigate = useNavigate();

  function logout() {
    setShowLogout(false)
    localStorage.clear();
    navigate("/");
  }



  return (
    <>
      <HeaderContainer>
        <Link to="/timeline">
          <h1>linkr</h1>
        </Link>

        <SearchBar />
        <div className="right" onClick={() => setShowLogout(!showLogout)}>
          {showLogout ?
            (<ion-icon name="chevron-up-outline"></ion-icon>) :
            (<ion-icon name="chevron-down-outline"></ion-icon>)}

          <img src={profileImg} alt="user_img"></img>
        </div>
      </HeaderContainer>

      <LogoutContainer showLogout={showLogout} onClick={logout}>
        <h2>Logout</h2>
      </LogoutContainer>
    </>
  );
}

const HeaderContainer = styled.div`
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
    width: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
      font-size: 35px;
      color: white;
      margin-right: 8px;
    }

    img {
      height: 53px;
      width: 53px;
      border-radius: 30px;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

const LogoutContainer = styled.div`
  width: 160px;
  height: 52px;
  border-radius: 0px 0px 0px 20px;
  background-color: #171717;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 72px;
  right: 0px;
  z-index: 998;
  transform: ${(props) => (props.showLogout ? "translateY(0)" : "translateY(-100px)")};    
  transition: all 0.5s ease-out;
  cursor: pointer;
  position: fixed;
`;

