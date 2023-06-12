import React, { useState } from "react";
import { SideBarLink, SidebarContainer, SidebarItem } from "./style";

const SideBar = () => {
  const [isActive, setIsActive] = useState(0);
  const handleItemClick = (index) => {
    setIsActive(index);
  };
  return (
    <SidebarContainer>
      <SideBarLink to="course/treemap">
        <SidebarItem
          isActive={isActive === 0}
          onClick={() => handleItemClick(0)}
        >
          Học
        </SidebarItem>
      </SideBarLink>
      <SideBarLink to="/profile">
        <SidebarItem
          isActive={isActive === 1}
          onClick={() => handleItemClick(1)}
        >
          Hồ sơ
        </SidebarItem>
      </SideBarLink>
      <SideBarLink to="/courses">
        <SidebarItem
          isActive={isActive === 2}
          onClick={() => handleItemClick(2)}
        >
          Trở lại
        </SidebarItem>
      </SideBarLink>
    </SidebarContainer>
  );
};

export default SideBar;
