import styled from "styled-components";
import Header from "./Header";
import TrendingBar from "./TrendingBar";

export default function Main({ title, children, loading }) {

  return (
    <Container>
      <Header></Header>
      <Content>
        {loading ? <TextInfo>Loading ...</TextInfo> : (
          <>
            <Title>{title}</Title>
            {children}
          </>
        )}
      </Content>


      <TrendingBar loading={loading}/>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

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

  @media (max-width: 425px) {
    margin-left: 20px;
  }
`;


const TextInfo = styled.h1`
  font-family: Oswald;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;
