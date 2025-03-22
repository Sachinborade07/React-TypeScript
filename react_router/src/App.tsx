import './App.css';
import { Routes, Route } from 'react-router-dom';
import HOME from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HOME />} />
        <Route path='/UserList' element={< UserList />} />
        <Route path='/UserList/:id' element={<SingleUser />} />
        {/* Here you can add your more routes */}
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App;