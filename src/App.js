import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Navigation from './components/Navigation';

const App = () => (
  <>
    <div className="appWrapper dFlex flexCenter">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);

export default App;
