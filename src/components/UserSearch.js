import { Link } from "react-router-dom";
import styled from "styled-components";

export default function UserSearch({user}) {
    const { id, username, picture_url, follows } = user;

    return (
        <Container to={`/user/${id}`}>
            <img src={picture_url} alt="img_user" />
            <p>{username}</p>
            {follows && <p className="following">• following</p>}
            
        </Container>
    );
}

const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        font-family: Lato;
        font-size: 19px;
        line-height: 23px;
    }

    img {
        width: 40px;
        height: 40px;

        border-radius: 50%;

        object-fit: cover;
    }

    .following {
        font-size: 16px;
        color: #C5C5C5;
    }

    &:hover {
        opacity: 0.8;
    }
`;