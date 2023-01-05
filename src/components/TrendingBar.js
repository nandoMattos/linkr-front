import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../assets/constants";

export default function TrendingBar() {
  const [trendings, setTrendings] = useState([]);

  async function getTrendings() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/hashtags/trendings`
      );
      setTrendings(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTrendings();
  }, []);

  return (
    <Container>
      <Title>trending</Title>
      <Content>
        {trendings.map((t) => (
          <Trend key={t.id}>#{t.name}</Trend>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 40vh;
  position: sticky;
  right: 15vh;
  top: 200px;
  background-color: ${colors.SECONDARY_COLOR};
  border-radius: 16px;

  @media (max-width: 1160px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "Oswald";
  color: white;
  font-size: 27px;
  font-weight: 700;
  padding: 20px;
  border-bottom: 2px solid #484848;
`;

const Content = styled.ul`
  color: white;
  padding: 10px 0 0 20px;
  font-family: "Lato";
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
`;

const Trend = styled.li`
  cursor: pointer;
`;