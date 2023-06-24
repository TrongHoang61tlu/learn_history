import React, { Suspense, useEffect } from "react";
import Modal from "react-modal";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/footer";
import Header from "./components/Layout/Header/header";
import Loading from "./components/Loadding/loading";
import { useDispatch, useSelector } from "react-redux";
import { checkToken, login } from "./features/auth/authSlice";
import { PrivateRoutes, PrivateLogin } from "./components/privateRouter";
import { fetchCoursesByUser } from "./features/course/courseByUserSlice";
import SidebarAdmin from "./components/Layout/Sidebar/sidebarAdmin";
import HeaderAdmin from "./components/Layout/Header/headerAdmin";
import { fetchNews } from "./features/admin/newsSlice";
import { fetchCourseContent } from "./features/admin/course-contentSlice";
import { fetchVideo } from "./features/admin/videoSlice";
import { fetchCourses } from "./features/admin/courseSlice";
import Quiz from "./features/quiz/quizPage";
import { fetchQuizz } from "./features/admin/quizzSlice";
import { fetchUsers } from "./features/admin/adminSlice";
import { fetchComments } from "./features/course/commentSlice";
import SignUp from "./features/auth/Register/registerPage";

const Profile = React.lazy(() => import( "./pages/Profile/profile"))
const Lesson = React.lazy(() => import("./pages/Lesson/lesson"))
const Quizzmanager = React.lazy(() => import("./pages/quizzmanager/quizzmanager"))
const Login = React.lazy(() => import("./features/auth/Login/loginPage"));

const Admin = React.lazy(() => import( "./features/admin/adminPage"));
const Coursemanager = React.lazy(() => import("./pages/coursemanager/coursemanager"));
const UserManager = React.lazy(() => import("./pages/usermanager/usermanager"));
const LesonManager = React.lazy(() => import("./pages/Lesonmanager/lesonmanager"));
const Notfound = React.lazy(() => import("./pages/Notfound/notfound"));
const NewsManager = React.lazy(() => import("./pages/newsmanager/newmanager"));
const CourseContent = React.lazy(() => import("./pages/courseContentmanager"));
const Videomanager = React.lazy(() =>import("./pages/videomanager/videomanager"));
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
  const isUserAuth = localStorage.getItem("token") === 2;

  useEffect(() => {
    dispatch(fetchCoursesByUser());
    dispatch(fetchNews());
    dispatch(fetchCourseContent());
    dispatch(fetchVideo());
    dispatch(fetchCourses());
    dispatch(fetchQuizz());
    dispatch(fetchUsers());
    dispatch(fetchComments());
  }, []);

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <Suspense fallback={<Loading />}>
      {isLoginPage ? null : (
        <div>
          <header>{isAdminAuth ? <HeaderAdmin /> : <Header />}</header>
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
          <Route exact path="course/:id" element={<CourseMap />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="course/:courseId/lesson/:id" element={<Lesson />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="course/:courseId/lesson/:id/quizz" element={<Quiz />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="profile" element={<Profile />} />
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
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="admin/newsmanager" element={<NewsManager />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route
            exact
            path="admin/coursecontentmanager"
            element={<CourseContent />}
          />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="admin/videomanager" element={<Videomanager />} />
        </Route>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="admin/quizzmanager" element={<Quizzmanager />} />
        </Route>
      </Routes>
      {isLoginPage ? null : <footer>{isAdminAuth ? null : <Footer />}</footer>}
    </Suspense>
  );
}

export default App;
