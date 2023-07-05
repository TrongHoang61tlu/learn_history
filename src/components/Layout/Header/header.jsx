import { useState } from "react";
import {
  Authen,
  Bottom,
  Item,
  Link,
  ListItem,
  Login,
  Name,
  Register,
  Search,
  StyledSelect,
  Wrapper,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const List = {
  0: { label: "Trang Chủ", link: "/" },
  1: { label: "Học Tập", link: "/courses" },
  2: { label: "Về chúng tôi", link: "/about" },
  3: { label: "Liên hệ", link: "/contact" },
};

function Header() {
  const [activeItem, setActiveItem] = useState("0");
  const isLogin = useSelector((state) => state.auth.isLogin);
  const idUser = localStorage.getItem("id");
  const parsedUserId = parseInt(idUser);
  const userData = useSelector((state) => state.admin.users);
  const data = userData.find((user) => user.id === parsedUserId);
  const courseData = useSelector((state) => state.course.courses);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [menuTarget, setMenuTarget] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const redirectHome = useNavigate();
  const handleLogout = () => {
    dispatch(logout(() => redirectHome("/")));
  };

  const handleItemClick = (key) => {
    setActiveItem(key);
  };

  const handleSearchChange = (selectedOption) => {
    setSearchValue(selectedOption?.value || "");
    const selectedCourse = courseData.find(
      (course) => course.title === selectedOption.value
    );
    if (selectedCourse) {
      navigate(`/course/${selectedCourse.id}`);
    }
  };

  const searchOptions = courseData.map((course) => ({
    value: course.title,
    label: course.title,
  }));

  return (
    <Wrapper>
      <Bottom>
        <ListItem>
          {Object.keys(List).map((item, index) => (
            <Link to={List[item].link} key={item}>
              <Item
                isActive={activeItem === item}
                onClick={() => handleItemClick(item)}
              >
                {List[item].label}
              </Item>
            </Link>
          ))}
        </ListItem>
        <Search>
          <div ref={setMenuTarget} />
          <StyledSelect
            menuPortalTarget={menuTarget}
            className="basic-single"
            classNamePrefix="select"
            value={{ value: searchValue, label: searchValue }}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="course-search"
            options={searchOptions}
            onChange={handleSearchChange}
          />
        </Search>

        <Authen>
          {isLogin ? (
            <>
              <Name>Xin chào, {data?.firstName}</Name>
              <Register onClick={handleLogout}>Đăng xuất</Register>
            </>
          ) : (
            <>
              <Link to="/login">
                <Login>Đăng nhập</Login>{" "}
              </Link>
              <Link to="signup">
                <Register>Đăng ký</Register>
              </Link>
            </>
          )}
        </Authen>
      </Bottom>
    </Wrapper>
  );
}

export default Header;
