import styled from "styled-components";
import Header from "./Header";

export default function Main({ title, children }) {
  return (
    <Container>
      <Header></Header>

      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;
  margin-top: 130px;

  width: 600px;

  gap: 15px;
`;

const Title = styled.h1`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  color: #ffffff;

  margin-bottom: 10px;
`;
