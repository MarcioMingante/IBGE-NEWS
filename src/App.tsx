import { Route, Routes } from "react-router-dom";
import NavLayout from "./layout/NavLayout";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/IBGE-NEWS/" element={ <NavLayout /> }>
        <Route path="/IBGE-NEWS/" element={ <MainPage /> } />
        <Route path="/noticias" element={ <MainPage /> } />
        <Route path="/releases" element={ <MainPage /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Route>
    </Routes>
  );
}

export default App
