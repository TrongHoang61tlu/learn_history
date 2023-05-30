import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  background-color: #f1f1f1;
  position: fixed;
  left: 0;
  margin-top: 65px;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;