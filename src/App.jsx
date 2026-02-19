import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Courses from "./Components/courses/Courses";
import Home from './Components/Home/Home';
import HowToRegister from './Components/HowToRegister/HowToRegister';
import BookTrial from './Components/BookTrial/BookTrial';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Fee from "./Components/Fee/Fee";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/courses" element={<Courses />} />
         <Route path="/" element={<Home/>} />
          <Route path="/Fee" element={<Fee/>} />
         <Route path="/HowToRegister" element={<HowToRegister />} />
         <Route path="/BookTrial" element={<BookTrial />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
