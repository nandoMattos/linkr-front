import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
