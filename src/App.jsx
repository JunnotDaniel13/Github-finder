import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/pages/User';
import Alert from './components/layout/Alert';

import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12 min-h-100">
              <Alert />
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="notfound" element={<NotFound />} />
                  <Route path="user/:username" element={<User />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
