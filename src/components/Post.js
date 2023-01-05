import styled from "styled-components";

export default function Post({ likedPosts, setLikedPosts }) {
  return (
    <Container>
      <Header>
        <img src="http://encurtador.com.br/gLMP9" alt="user_img"></img>
        <ion-icon name="heart-outline"></ion-icon>
        <p>13 likes</p>
      </Header>

      <Content>
        <BoxHeader>
          <h1>Juvenal Juvêncio</h1>

          <BoxSettings>
            <ion-icon name="pencil-outline"></ion-icon>
            <ion-icon name="trash"></ion-icon>
          </BoxSettings>
        </BoxHeader>

        <p>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!{" "}
          <span>#react #material</span>
        </p>

        <BoxInfo>
          <Info>
            <h1>Como aplicar o Material UI em um projeto React</h1>
            <h2>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page.
            </h2>
            <p>https://medium.com/@pshrmn/a-simple-react-router</p>
          </Info>

          <img
            src="https://blog.logrocket.com/wp-content/uploads/2021/06/react-icons-comprehensive-tutorial-examples.png"
            alt="img_link"
          />
        </BoxInfo>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  background-color: #171717;
  height: 270px;

  border-radius: 16px;

  padding: 15px 20px;

  color: #ffffff;
  font-family: Lato;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 50px;
    border-radius: 50%;

    margin-bottom: 10px;
  }

  ion-icon {
    font-size: 22px;
  }

  p {
    font-size: 11px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;

  p {
    color: #b7b7b7;

    span {
      color: #ffffff;
    }
  }
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 19px;
`;

const BoxSettings = styled.div`
  display: flex;
  gap: 10px;
  font-size: 15px;
`;

const BoxInfo = styled.div`
  height: 100%;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  display: flex;

  img {
    width: 200px;
    border-radius: 0px 12px 12px 0px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  width: 65%;

  padding: 20px 15px;

  font-size: 11px;

  h1 {
    font-size: 16px;
    color: #cecece;
  }

  h2 {
    color: #9b9595;
  }

  p {
    color: #cecece;
  }
`;
