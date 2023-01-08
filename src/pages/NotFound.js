import styled from "styled-components";
import notFound from "../assets/images/notFound.png";

export default function NotFound() {
  return (
    <ScreenNotFound>
      <img src={notFound} alt="notFound" />
    </ScreenNotFound>
  );
}

const ScreenNotFound = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
