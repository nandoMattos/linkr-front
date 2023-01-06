import styled from "styled-components";

export default function OverlayLogout({ showLogout, setShowLogout }) {
  return (
    <Overlay 
    showLogout={showLogout}
    onClick={() => setShowLogout(false)}
    />
  );
}

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 997;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${props => props.showLogout ? "initial" : "none"};
`;