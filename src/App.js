import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import SignUp from "./pages/Authentication/SignUp";
import LogIn from "./pages/Authentication/LogIn";
import Timeline from "./pages/Timeline";
import Trend from "./pages/Trend";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtags/:name" element={<Trend />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
