import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import { postSignUp } from "../../services/authService.js";
import { colors } from "../../assets/constants.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

    const body = {
      username,
      email,
      password,
      picture_url: pictureUrl
    }

    if (password.length < 6) {
      setPassword("");
      alert("Password must be 6 digits or more. Try again.");
      setLoading(false);
      return;
    }

    postSignUp(body)
      .then(() => {
        resetForm();
        navigate("/");
        setLoading(false);
      })
      .catch((res) => {
        if (res.response.status === 409) {
          setEmail("");
          alert("This email already exists, try another one.");
          setLoading(false);
          return;
        }

        resetForm();
        alert("Something went wrong. Try again.");
        setLoading(false);
      })
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    setUsername("");
    setPictureUrl("");
  }

  return (
    <AuthContainer>
      <div className="container-title">
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>

      <div className="container-forms">
        <form onSubmit={sendForm}>
          <input
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />

          <input
            placeholder="picture url"
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
            disabled={loading}
          />

          <button disabled={loading}>
            {loading ?
              (<ThreeDots color="#ffffff" height={50} width={50} />) :
              ("Sign Up")}
          </button>
        </form>

        <Link to="/">
          <h3>Switch back to log in</h3>
        </Link>
      </div>
    </AuthContainer>
  );
}

const AuthContainer = styled.div`
  display: flex;

  @media (max-width: 930px) {
    flex-direction: column;
  }

  .container-title {
    width: 60%;
    height: 900px;
    background-color: ${colors.SECONDARY_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 0px 4px 0px #00000040;
    z-index: 5;

    h1 {
      margin-top: 130px;
      font-family: 'Passion One', cursive;
      font-size: 106px;
    }

    h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 43px;
      line-height: 54px;
    }

    h1, h2 {
      width: 55%;
      color: white;
      font-weight: 700;
    }

    @media (max-width: 930px) {
      width: 100%;
      height: 350px;
      justify-content: center;
      box-shadow: 0px 4px 4px 0px #00000040;

      h1, h2 {
        margin-top: 0px;
        width: 70%;
        text-align: center;
      }
    }

    @media (max-width: 435px) {
      height: 200px;

      h1 {
        font-size: 70px;
      }
      h2 {
        font-size: 23px;
        line-height: 1.4;
      }
    }
  }

  .container-forms {
    width: 40%;
    padding: 130px 40px 0px 40px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input {
      font-family: 'Oswald', sans-serif;
      font-size: 20px;
      padding-left: 10px;
    }

    input::placeholder {
      font-family: 'Oswald', sans-serif;
      font-size: 25px;
      font-weight: 700;
      color: #9F9F9F;
      padding-left: 5px;
    }

    input, button {
      width: 100%;
      height: 65px;
      border-radius: 6px;
      margin-bottom: 10px;
      border: 0px;
      font-weight: 700;
    }

    button {
      background-color: ${colors.BUTTON_COLOR};
      font-size: 27px;
      font-family: 'Oswald', sans-serif;
      color: white;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1s ease-out;
      &:hover {
        background-color: ${colors.SECONDARY_COLOR};
        transition: all 0.5s ease-out;
        border: 1px solid ${colors.BUTTON_COLOR};
        border-radius: 20px 20px 0px 20px;
        color: ${colors.BUTTON_COLOR};
      }
      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    h3 {
      font-family: 'Lato', sans-serif;
      font-size: 20px;
      font-weight: 400;
      color: white;
      margin-top: 20px;
      border-bottom: 1px solid white;
      padding-bottom: 5px;
    }

    @media (max-width: 930px) {
      width: 100%;
      padding: 70px 0px 0px 0px;

      form {
        width: 70%;
      }

      h3 {
        margin: 10px 0px 200px 0px;
      }
    }

    @media (max-width: 435px) {
      padding: 40px 0px 0px 0px;

      h1 {
        font-size: 70px;
      }

      h2 {
        font-size: 23px;
        line-height: 1.4;
      }

      h3 {
        font-size: 17px;
      }

      button {
        height: 55px;
        font-size: 22px;
      }

      input {
        height: 55px;
        font-size: 17px;
      }

      input::placeholder {
        font-size: 20px;
      }
    }
  }
`;

export { AuthContainer };