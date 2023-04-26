import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 100px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;

export const Waves = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
`;

export const SocialMenu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`;

export const SocialMenuItem = styled.li`
  list-style: none;
`;

export const SocialLink = styled.a`
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const MenuLink = styled.a`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
`;

export const Text = styled.p`
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
`;
const animateWaves = keyframes`0% { background-position-x: 1000px; } 100% { background-positon-x: 0px; }`;

const animate = keyframes`0% { background-position-x: -1000px; } 100% { background-positon-x: 0px; }`;

export const Wave = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
`;

export const Wave1 = styled(Wave)`
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: ${animateWaves} 4s linear infinite;
`;

export const Wave2 = styled(Wave)`
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: ${animate} 4s linear infinite !important;
`;

export const Wave3 = styled(Wave)`
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: ${animateWaves} 3s linear infinite;
`;

export const Wave4 = styled(Wave)`
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: ${animate} 3s linear infinite;
`;
