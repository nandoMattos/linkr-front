import styled from "styled-components"


export function CreatePost(myPhoto) {

    return (
        <Container>
            <Photo>
                <img src="https://http2.mlstatic.com/D_NQ_NP_846593-MLB50471350726_062022-W.jpg" alt="user_img"></img>
            </Photo>
                <Content>
                    <p>What are you going to share today?</p>
                    <FormPost>
                        <form>
                            <InputUrl>
                                <input
                                    name="url"
                                    type="url"
                                    // value={a}
                                    // onChange={a}
                                    placeholder="http://..."
                                    required
                                >
                                </input>
                            </InputUrl>
                            <InputDescription>
                                <input
                                    name="description"
                                    type="text"
                                    // value={a}
                                    // onChange={a}
                                    placeholder="Awesome article about #javascript"
                                >
                                </input>
                            </InputDescription>
                            <PostButton>
                                <button type="submit">Publish</button>
                            </PostButton>
                        </form>
                    </FormPost>
                </Content>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  background-color: #ffffff;
  height: 220px;

  border-radius: 16px;

  padding: 15px 20px;

  color: #ffffff;
  font-family: Lato;
`;

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
 

  img {
    width: 50px;
    border-radius: 50%;

    margin-bottom: 10px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  p {
    color: #707070;
    padding-top: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }
`;

const FormPost = styled.div`
    width: 480px;
    display: flex;
    flex-direction: column;
    input {
        width: 100%;
        background: #EFEFEF;
        margin-bottom: 8px;
        padding-left: 10px;
        border: none;
        border-radius: 5px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }
`
const InputUrl = styled.div`
    input {
    height: 30px;
    }
`
const InputDescription = styled.div`
    input {
    height: 66px;
    }
`
const PostButton = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
    width: 112px;
    height: 31px;
    background: #1877F2;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    :hover{
        cursor: pointer;
    }
    }
`