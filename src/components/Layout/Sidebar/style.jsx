import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  left: 0;
  margin-top: 50px;
  align-items: center;
  border-right: 2px solid #ccc;
`;
export const SideBarLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  width: 70%;
  padding-top:10px;
}
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: none;
  color: ${(props) =>
    props.isActive ? " rgb(28,176,246)" : "rgb(119,119,119)"};
  cursor: pointer;
  border: ${(props) =>
    props.isActive ? " 2px solid rgb(132, 216, 255)" : "none"};
  background-color: ${(props) =>
    props.isActive ? " rgb(221,244,255)" : "none"};
  border-radius: ${(props) => (props.isActive ? "12px" : "none")};
  
`;
