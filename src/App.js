import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import Timeline from "./pages/Timeline";
import Trend from "./pages/Trend";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtags/:name" element={<Trend />}/>
          <Route path="/user/:id" element={<Timeline isUserPage={true} />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
