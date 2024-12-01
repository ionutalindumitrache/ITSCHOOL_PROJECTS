import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ProfilePage from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/profile/:id" element={<ProfilePage></ProfilePage>} />
          <Route path="/profile" element={<ProfilePage></ProfilePage>} />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/settings" element={<Settings></Settings>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/me" element={<ProfilePage></ProfilePage>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
