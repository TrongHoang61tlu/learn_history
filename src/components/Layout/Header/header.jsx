import { useState } from "react";
import {
  Authen,
  Bottom,
  Button,
  Input,
  Item,
  Link,
  ListItem,
  Login,
  Register,
  Search,
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
  const dispatch = useDispatch()
  const redirectHome = useNavigate();
  const handleLogout = () => {
    dispatch(logout( () => redirectHome("/") ))
  }

  const handleItemClick = (key) => {
    setActiveItem(key);
  };

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
          <Input placeholder="Tìm kiếm"></Input>
          <Button>Tìm kiếm</Button>
        </Search>

        <Authen>
          {isLogin ? (
              <Register onClick={handleLogout}>Đăng xuất</Register>
          ) : (
            <>
              <Link to="/login"><Login>Đăng nhập</Login> </Link> 
              <Link to="signup"><Register>Đăng ký</Register></Link>
            </>
          )}
        </Authen>
      </Bottom>
    </Wrapper>
  );
}

export default Header;
