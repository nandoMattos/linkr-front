import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { colors } from "../assets/constants";
import { findUsersByName } from "../services/user";
import UserSearch from "./UserSearch";
import UserContext from "../context/UserContext";
import { useOutsideClick } from "../hooks/useClickOutside";

export default function Header() {
  const { showLogout, setShowLogout } = useContext(UserContext);
  const [activeInput, setActiveInput] = useState(false);
  const [listUser, setListUser] = useState([]);

  const profileImg = JSON.parse(localStorage.getItem("profileImg"));

  const navigate = useNavigate();

  function logout() {
    setShowLogout(false)
    localStorage.clear();
    navigate("/");
  }

  function setActive() {
    setActiveInput(!activeInput);
  }

  async function handleInput(e) {
    const name = e.target.value;
    try {
      const res = await findUsersByName(name);
      setListUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  function onClickOutsideTheContainer () {
    setActiveInput(false);
  }

  const containerRef = useOutsideClick(onClickOutsideTheContainer);

  return (
    <>
      <HeaderContainer>
        <Link to="/timeline">
          <h1>linkr</h1>
        </Link>

        <div ref={containerRef}>
          <SearchBar onFocus={() => setActive()} >
            <DebounceInput
              type="text"
              placeholder="Search for people"
              minLength={3}
              debounceTimeout={300}
              onChange={e => handleInput(e)}
            />
            <ion-icon name="search-outline"></ion-icon>
          </SearchBar>

          { activeInput && listUser.length > 0 &&
            (
              <Dropdown>
                {listUser.map((u, idx) => <UserSearch key={idx} user={u} />)}
              </Dropdown>
            )
          }

        </div>

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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  background-color: #ffffff;
  height: 45px;
  width: 450px;

  border-radius: 8px;
  padding-left: 15px;


  input {
    font-family: Lato;
    font-size: 19px;
    width: 90%;
    border: none;

    outline: none;

    &::placeholder {
      color: #C6C6C6;
    }
  }

  ion-icon {
    font-size: 22px;
    color: #C6C6C6;
  }

  @media (max-width: 705px) {
    display: none;
  }
`;

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    position: absolute;
    z-index: -1;
    transform: translateY(-5px);
    
    padding: 20px;

    width: 450px;
    background-color: #E7E7E7;
    border-radius: 0px 0px 8px 8px;
`;