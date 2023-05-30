import styled from "styled-components";

export const Wrapper = styled.section`
  background: #fff;
`;
export const Sestion = styled.section`
  background-position: 100% 100%;
`;

export const Container = styled.div`
  padding-top: 65px;
  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f7f9fa;
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    min-height: 250px;
  }
`;
export const ContainerImg = styled.div`
    background-image: url(https://about.udemy.com/wp-content/uploads/2021/07/about-us.png);
    min-height: 250px;
    background-size: contain!important;
    background-position: bottom;
    width: 50%;
    margin-left: -20px;
    background-repeat: no-repeat;
     @media (max-width: 768px) {
    width: 100%;
  }
}
`;

export const ContainerTitle = styled.div`
  overflow: hidden;
  width: 60%;
  max-width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Text = styled.h1`
  text-align: left;
  max-width: 363px;
  font-size: 2.8rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SestionTwo = styled.section`
  background-color: #0077c2;
  padding: 12px;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
`;

export const SestionTwoText = styled.a`
  color: #fff;
`;

export const SestionThree = styled.section`
  padding-top: 60px;
  text-align: center;
  background-color: #fff;
`;
export const ThreeContent = styled.div`
  max-width: 100%;
  padding: 0 20px;
`;

export const ThreeTitles = styled.h2`
  width: 65%;
  margin: 0 auto 1.6rem;
  max-width: 80rem;
  font-size: 3rem;
`;

export const ThreeText = styled.p`
  max-width: 60rem;
  font-size: 1.2rem;
  margin: auto;
  padding-bottom: 6.6rem;
`;

export const SestionFour = styled.section`
  text-align: center;
  padding: 10px 20px 200px 20px;
  background: #f7f9fa;
`;
export const FourMain = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const FourVideo = styled.video`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FourDesc = styled.div`
  margin: 3.2rem 0 4.8rem 3.2rem;
  text-align: left;
`;

export const DescTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
  margin: 0 0 2.2rem;
  width: 16rem;
`;

export const DescText = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 135%;
  font-weight: 300;
`;
