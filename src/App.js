//import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path='/Reservation' element={<BookingPage/>}/>
          <Route path='/' element={<Main/>}/>
        </Routes>
    </Router>
   </>
  );
}

export default App;
