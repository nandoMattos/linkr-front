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

  );
}


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
    margin-left: 20px;
  }

  @media (min-width: 705px) {
    display: ${props => props.mobile ? "none" : "flex"};
  }


`;

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    position: absolute;
    z-index: 999;
    transform: translateY(-5px);
    
    padding: 20px;

    width: 450px;
    background-color: #E7E7E7;
    border-radius: 0px 0px 8px 8px;

    @media (max-width: 705px) {
        margin-left: 20px;
    }

    
`;