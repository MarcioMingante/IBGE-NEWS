import { Route, Routes } from "react-router-dom";
import NavLayout from "./layout/NavLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <NavLayout /> }>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/noticias" element={ <MainPage /> } />
        <Route path="/releases" element={ <MainPage /> } />
        <Route path="/favorites" element={ <h1>favoritados</h1> } />
      </Route>
    </Routes>
  );
}

export default App
