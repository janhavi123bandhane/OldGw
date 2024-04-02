import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/Nav";
import Midh from "./components/Midh";
import Sale from "./components/Sale";
import Footer from "./components/Footer";
import Options from "./components/Options";
import Old from "./Pages/Old.jsx";
import New from "./Pages/New.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fulll from "./Fulll.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    //     <>
    // {/*
    //      <Nav></Nav>
    //    <Midh></Midh>
    //   <Sale></Sale>
    //   <Footer></Footer>  */}
    //    {/* <Old></Old>*/}

    //    <Contact></Contact>
    //    {/* <New1></New1> */}
    //  {/* <Old></Old>
    //    <New></New>  */}
    //     </>

    // Link pages
    <BrowserRouter>
    <Fulll></Fulll>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/old" element={<Old />} />
        <Route path="/new" element={<New />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
