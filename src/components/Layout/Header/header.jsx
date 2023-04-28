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

const List = {
  0: { label: "Trang Chủ", link: "/" },
  1: { label: "Học Tập", link: "/courses" },
  2: { label: "Về chúng tôi", link: "/about" },
  3: { label: "Liên hệ", link: "/contact" },
};

function Header() {
  // const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState("0");

  // const handleToggle = () => {
  //   setIsActive((isActive) => !isActive);
  // };
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
          <Login>Đăng nhập</Login>
          <Register>Đăng ký</Register>
        </Authen>
      </Bottom>
    </Wrapper>
  );
}

export default Header;
