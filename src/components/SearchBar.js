import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useOutsideClick } from "../hooks/useClickOutside";
import { findUsersByName } from "../services/user";
import UserSearch from "./UserSearch";
import styled from "styled-components";

export default function SearchBar({mobile}) {
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

  function onClickOutsideTheContainer () {
    setActiveInput(false);
  }

  const containerRef = useOutsideClick(onClickOutsideTheContainer);


  return (
    <Centralize>
    <div ref={containerRef}>
    <Bar onFocus={() => setActive()} mobile={mobile} >
      <DebounceInput
        type="text"
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        onChange={e => handleInput(e)}
      />
      <ion-icon name="search-outline"></ion-icon>
    </Bar>

    { activeInput && listUser.length > 0 &&
      (
        <Dropdown>
          {listUser.map((u, idx) => <UserSearch key={idx} user={u} />)}
        </Dropdown>
      )
    }

  </div>
  </Centralize>
  );
}


const Centralize = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Bar = styled.div`
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
    display: ${props => props.mobile ? "flex" : "none"};
    width: 550px;
  }

  @media (min-width: 705px) {
    display: ${props => props.mobile ? "none" : "flex"};
  }

  @media (max-width: 608px) {
    width: 340px;
  }
`;

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    position: absolute;
    z-index: 995;
    transform: translateY(-5px);
    
    padding: 20px;

    width: 450px;
    background-color: #E7E7E7;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0px 4px 4px 0px #00000040;

    @media (max-width: 705px) {
      width: 550px;
    }

    @media (max-width: 608px) {
      width: 340px;
    }
`;