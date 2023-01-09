import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { postSignIn } from "../../services/authService";
import { AuthContainer } from "./SignUp";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password
    }

    postSignIn(body)
      .then((res) => {
        resetForm();
        localStorage.setItem("profileImg", JSON.stringify(res.data.picture_url));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("username", JSON.stringify(res.data.username));
        localStorage.setItem("id", JSON.stringify(res.data.id));
        navigate("/timeline");
        setLoading(false);
      })
      .catch((res) => {
        if (res.response.status === 401) {
          resetForm();
          alert("Incorrect data, please enter again.");
          setLoading(false);
          return;
        }

        resetForm();
        alert("Something went wrong. Try again.");
        setLoading(false)
      })
  }

  function resetForm() {
    setEmail("");
    setPassword("");
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

          <button disabled={loading}>
            {loading ?
              (<ThreeDots color="#ffffff" height={50} width={50} />) :
              ("Log In")}
          </button>
        </form>

        <Link to="/signup">
          <h3>First time? Create an account!</h3>
        </Link>
      </div>
    </AuthContainer>
  );
}