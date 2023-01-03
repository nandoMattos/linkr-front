import styled from "styled-components";
import { colors } from "../assets/constants";

export default function Header() {
  return <Container></Container>;
}

const Container = styled.div`
  height: 72px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: ${colors.SECONDARY_COLOR};
`;
