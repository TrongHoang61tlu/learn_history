import React from "react";
import { SidebarContainer, SidebarItem } from "./style";

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>Học</SidebarItem>
      <SidebarItem>Hồ sơ</SidebarItem>
      <SidebarItem>Đăng xuất</SidebarItem>
    </SidebarContainer>
  );
};

export default SideBar;
