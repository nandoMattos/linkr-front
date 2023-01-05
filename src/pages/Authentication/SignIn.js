import { Link } from "react-router-dom";
import { AuthContainer } from "./SignUp";

export default function SignIn() {
  return (
    <AuthContainer>
      <div className="left">
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>

      <div className="right">
        <form>
          <input
            placeholder="e-mail"
            type="email"
          />

          <input
            placeholder="password"
            type="password"
          />

          <button>Log In</button>
        </form>

        <Link to="/signup">
          <h3>First time? Create an account!</h3>
        </Link>
      </div>
    </AuthContainer>
  );
}