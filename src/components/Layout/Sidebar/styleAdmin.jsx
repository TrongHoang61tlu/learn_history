import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: rgb(35, 48, 68);
  height: 100vh;
  width: 250px;
  z-index: 1200;
  position: fixed;
  top: 0px;
  outline: 0px;
  left: 0px;
`;

export const Logo = styled.a`
  min-height: 64px;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(238, 238, 238);
  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.svg`
  margin-right: 8px;
  color: rgb(71, 130, 218);
  fill: rgb(71, 130, 218);
  width: 32px;
  height: 32px;
`;

export const Pages = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
`;

export const PageTitle = styled.h6`
  margin: 0px;
  font-weight: 500;
  line-height: 1.57;
  color: rgb(238, 238, 238);
  font-size: 0.696429rem;
  padding: 16px 28px 4px;
  opacity: 0.4;
  text-transform: uppercase;
  display: block;
`;

export const PageList = styled.div`
  width: 100%;
`;

export const PageItem = styled(NavLink)`
  display: flex ;
  align-items: center;
  position: relative;
  text-decoration: none;
  min-width: 0px;
  box-sizing: border-box;
  text-align: left;
  background-color: ${(props) => (props.isActive ? " rgb(31 41 57)" : "none")};
  padding: 8px 16px 8px 30px;
  font-weight: 400;
  text-decoration: none;
`;
export const Text = styled.span`
  display: flex;
  align-items: center;
  color: white;
  padding-left: 10px;
`;

export const Infomation = styled.div`
  position: absolute;
  bottom: 0;
  padding: 15px 20px;
  background-color: ;
  color: white;
`;

export const MainInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin-top: -8px;
  width: calc(100% + 8px);
  margin-left: -8px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Form = styled.div`
  padding-left: 10px;
  display: block;
`;

export const Email = styled.p`
  margin: 0;
  width: 160px; /* Đặt chiều rộng của container */
  overflow: hidden; /* Ẩn phần nội dung bị tràn */
  white-space: nowrap; /* Ngăn ngắt nội dung thành nhiều dòng */
  text-overflow: ellipsis; 
`;
export const Name = styled.p`
  margin: 0;
`;
