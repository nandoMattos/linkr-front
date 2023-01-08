import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { colors } from "../assets/constants";
import { getTrendingTopics } from "../services/hashtagService";

export default function TrendingBar({loading}) {
  const [trendings, setTrendings] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    getTrendings();
  }, []);
  
  
  async function getTrendings() {
    try {
      const res = await getTrendingTopics();
      setTrendings(res?.data);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  function getTrendPage(trendName) {
    navigate(`/hashtags/${trendName}`);
  }

  if(error) return ;
  return (
    <Container display={loading ? "none" : "flex"}>
      <Title>trending</Title>
      <Content>
        {trendings?.map((t) => (
          <Trend onClick={()=> getTrendPage(t.name)} key={t.id}>#{t.name}</Trend>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.aside`
  display: ${({display})=>display};
  flex-direction: column;
  height: 400px;
  width: 40vh;
  position: sticky;
  right: 15vh;
  top: 75px;
  margin-top: 200px;
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
