import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductPage from './pages/ProductPage';

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>

        <Route
        path="/product/:id"
        element={<ProductPage />}
      />

        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        
      </Routes>
    </BrowserRouter>
  </>
    
  );
}

export default App;
