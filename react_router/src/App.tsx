import './App.css';
import Login from './components/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    }

  ]);

  return (
    <>
      <Navbar />
    </>
  )
}

export default App