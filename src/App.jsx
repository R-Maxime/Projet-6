import {
  Navigate, BrowserRouter as Rooter, Route, Routes
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Housings from './pages/Housings';
import NotFound from './pages/Error';
import './styles/main.scss';

function App() {
  return (
    <Rooter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="housing/:id" element={<Housings />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
      <Footer />
    </Rooter>
  );
}

export default App;
