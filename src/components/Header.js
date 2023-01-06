import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/constants";
import { findUsersByName } from "../services/user";
import UserSearch from "./UserSearch";

export default function Header() {
  const [activeInput, setActiveInput] = useState(false);
  const [listUser, setListUser] = useState([]);

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


  return (
  <Container>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>

    <div>
      <SearchBar onFocus={() => setActive()} onBlur={() => setActive()}>
        <DebounceInput
          type="text" 
          placeholder="Search for people" 
          minLength={3}
          debounceTimeout={300}
          onChange={e => handleInput(e)}
        />
        <ion-icon name="search-outline"></ion-icon>
      </SearchBar>

      {activeInput && listUser.length > 0 &&
      (
        <Dropdown>
          {listUser.map((u, idx) => <UserSearch key={idx} user={u}/>)}
        </Dropdown>
      )}

    </div>

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