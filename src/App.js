import React, { Suspense, useEffect } from "react";
import Modal from "react-modal";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/footer";
import Header from "./components/Layout/Header/header";
import Loading from "./components/Loadding/loading";
import Login from "./features/auth/Login/loginPage";
import SignUp from "./features/auth/Register/registerPage";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "./features/auth/authSlice";
import { PrivateRoutes, PrivateLogin } from "./components/privateRouter";
import Admin from "./features/admin/adminPage";
import SidebarAdmin from "./components/Layout/Sidebar/sidebarAdmin";
import HeaderAdmin from "./components/Layout/Header/headerAdmin";
import Coursemanager from "./pages/coursemanager/coursemanager";
import UserManager from "./pages/usermanager/usermanager";
import LesonManager from "./pages/Lesonmanager/lesonmanager";
import Notfound from "./pages/Notfound/notfound";
const Home = React.lazy(() => import("./pages/Home/home"));
const Contact = React.lazy(() => import("./pages/Contact/contact"));
const About = React.lazy(() => import("./pages/About/about"));
const Courses = React.lazy(() => import("./pages/Courses/courses"));
const CourseMap = React.lazy(() => import("./pages/TreeMap/treemap"));

Modal.setAppElement("#root"); // hoặc thay #root bằng phần tử chứa ứng dụng của bạn

function App() {
  const dispatch = useDispatch();
  let location = useLocation();
  const isAdminAuth = localStorage.getItem("roleId") === "1";
  console.log(isAdminAuth);
  const isUserAuth = localStorage.getItem("token") === 2;

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <Suspense fallback={<Loading />}>
      {isLoginPage ? null : (
        <div>
          <header>{isAdminAuth ? <HeaderAdmin/> : <Header />}</header>
          <div>{isAdminAuth ? <SidebarAdmin /> : null}</div>
        </div>
      )}
      <Routes>
        <Route exact element={<PrivateLogin />}>
          <Route path="/login" exact element={<Login />} />
        </Route>
        <Route path="/signup" exact element={<SignUp />} />
        <Route exact element={<PrivateRoutes />}>
          <Route path="/admin" exact element={<Admin />} />
        </Route>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Notfound />} />
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="course/treemap" element={<CourseMap />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="admin/coursemanager" element={<Coursemanager />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="admin/usermanager" element={<UserManager />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="admin/lesonmanager" element={<LesonManager />} />
        </Route>
      </Routes>
      {isLoginPage ? null : <footer>{isAdminAuth ? null : <Footer />}</footer>}
    </Suspense>
  );
}

export default App;
