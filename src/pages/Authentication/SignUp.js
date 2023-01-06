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
      <div className="left">
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>

      <div className="right">
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
              (<ThreeDots color="#ffffff" height={40} width={40} />) :
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

  .left {
    width: 850px;
    height: 900px;
    background-color: ${colors.SECONDARY_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 0px 4px 0px #00000040;

    h1 {
      margin-top: 160px;
      font-family: 'Passion One', cursive;
      font-size: 106px;
    }

    h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 43px;
      line-height: 54px;
    }

    h1, h2 {
      width: 442px;
      color: white;
      text-align: left;
      font-weight: 700;
    }
  }

  .right {
    height: 900px;
    padding-top: 140px;
    margin-left: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input {
      width: 370px;
      height: 65px;
      border-radius: 6px;
      margin-bottom: 10px;
      border: 0px;
      font-family: 'Oswald', sans-serif;
      font-size: 20px;
      font-weight: 700;
      padding-left: 10px;
    }

    input::placeholder {
      font-family: 'Oswald', sans-serif;
      font-size: 25px;
      font-weight: 700;
      color: #9F9F9F;
      padding-left: 5px;
    }

    button {
      height: 65px;
      width: 370px;
      border: 0px;
      border-radius: 6px;
      background-color: ${colors.BUTTON_COLOR};
      font-size: 27px;
      font-family: 'Oswald', sans-serif;
      font-weight: 700;
      color: white;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
`;

export { AuthContainer };