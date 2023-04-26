import React, { Suspense } from "react";
import "./App.css";
import Loading from "./components/Loadding/loading";
import Header from "./components/Layout/Header/header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/footer";
const Home = React.lazy(() => import("./pages/Home/home"));
const Contact = React.lazy(() => import("./pages/Contact/contact"));
const About = React.lazy(() => import("./pages/About/about"));
const Courses = React.lazy(() => import("./pages/Courses/courses"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Suspense>
  );
}

export default App;
