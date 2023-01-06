import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/style/GlobalStyle";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import Timeline from "./pages/Timeline";
import Trend from "./pages/Trend";
import UserContext from "./context/UserContext";
import Overlay from "./components/OverlayLogout";

function App() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Overlay showLogout={showLogout} setShowLogout={setShowLogout} />
      <UserContext.Provider value={{ showLogout, setShowLogout }}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtags/:name" element={<Trend />}/>
          <Route path="/user/:id" element={<Timeline isUserPage={true} />} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
