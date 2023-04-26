import styled from "styled-components";

export const Wrapper = styled.div``;
export const Banner = styled.div`
  position: relative;
  padding-bottom: 50px;
  height: 700px;
`;

export const BannerContainer = styled.div`
  height: 600px;
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
`;

export const BannerBottom = styled.ul`
  width: 90%;
  margin: auto;
  position: absolute;
  list-style: none;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 48%;
  transform: translate(-50%, 80%);
  boxshadow: 2 2 20 #ccc;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  background-color: #fff;
  border-radius: 15px;
  width: 30%;
  margin: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const DetaiItem = styled.div`
  padding: 10px 8px;
  text-align: center;
`;

export const ButtonItem = styled.button`
  display: inline-block;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  line-height: 1.375;
  font-size: 1.25rem;
`;

export const Content = styled.p`
  opacity: 0.7;
`;

export const SliceComment = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 100px;
`;
export const TitleComment = styled.h2`
  display: flex;
  justify-content: center;
`;
export const Comments = styled.div``;
export const CommentImg = styled.img`
  margin: auto;
`;
export const Comment = styled.p`
  justify-content: center;
  display: flex;
`;
export const CommentPerson = styled.h5`
  display: flex;
  justify-content: center;
`;

export const CommentFeel = styled.span`
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  padding-top : 100px;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const MainLeft = styled.div`
  width: 25%;
  position: relative;
  overflow: hidden;
  transition: transform 0.8s ease-in-out;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    transform: rotateY(180deg) translate3d(0, 0, 0);
  }
`;

export const MainLeftOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const MainImg = styled.img`
  width: 100%;
`;

export const MainRight = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // tạo 2 cột bằng nhau
  grid-template-rows: repeat(2, 1fr); // tạo 2 hàng bằng nhau

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr; // chỉ hiển thị 1 cột khi màn hình nhỏ hơn 768px
  }
`;

export const GridItem = styled.div`
  margin: 10px;
  align-items: center;
  background-color: #ffff;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const MainItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 30%;
`;
export const ItemContent = styled.div`
  margin-left: 15px;
`;
export const ItemContentTitle = styled.h3`
  letter-spacing: -0.125px;
  font-weight: 700;
`;
export const ItemContentText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  color: rgb(123, 128, 154);
  letter-spacing: -0.125px;
  margin: 0;
`;
export const ItemContentNext = styled.a``;
