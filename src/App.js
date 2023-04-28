import React, { Suspense } from "react";
import Modal from "react-modal";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/footer";
import Header from "./components/Layout/Header/header";
import Loading from "./components/Loadding/loading";
const Home = React.lazy(() => import("./pages/Home/home"));
const Contact = React.lazy(() => import("./pages/Contact/contact"));
const About = React.lazy(() => import("./pages/About/about"));
const Courses = React.lazy(() => import("./pages/Courses/courses"));

Modal.setAppElement("#root"); // hoặc thay #root bằng phần tử chứa ứng dụng của bạn

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
      <Footer />
    </Suspense>
  );
}

export default App;
