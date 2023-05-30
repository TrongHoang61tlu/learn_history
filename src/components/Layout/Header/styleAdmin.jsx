import styled from "styled-components";

export const WrapperHeader =  styled.div`
    position: fixed;
    box-shadow: none;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    top: 0px;
    left: auto;
    right: 0px;
    color: rgb(158, 158, 158);
    background-color: rgb(35, 48, 68);
    height: 70px;
    justify-content: end;
    align-items: center;
    z-index: 1;
`

export const Logout = styled.p`
    width : 50px;
    font-size : 1.5rem;
    cursor : pointer;
`