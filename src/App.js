import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/style/GlobalStyle";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import Timeline from "./pages/Timeline";
import Trend from "./pages/Trend";
import UserContext from "./context/UserContext";
import Overlay from "./components/OverlayLogout";
import NotFound from "./pages/NotFound";
import PrivatePage from "./components/PrivatePage";

function App() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Overlay showLogout={showLogout} setShowLogout={setShowLogout} />
      <UserContext.Provider value={{ showLogout, setShowLogout }}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/timeline" element={<PrivatePage><Timeline /></PrivatePage>}/>
          <Route path="/hashtags/:name" element={<PrivatePage><Trend /></PrivatePage>}/>
          <Route path="/user/:id" element={<PrivatePage><Timeline isUserPage={true} /></PrivatePage>} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
