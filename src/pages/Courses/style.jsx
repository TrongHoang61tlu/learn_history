import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 65px 0 150px 0;
  background-color: #fff;
`;

export const Banner = styled.div`
  background-color: #0077c2;
  padding-bottom: 3rem !important;
  padding-top: 3rem !important;
`;

export const ContainerBanner = styled.div`
  font-family: Inter, Helvetica Neue, Arial, sans-serif;
`;

export const Title = styled.h1`
  etter-spacing: -1.2px;
  color: #fff !important;
  font-weight: 700;
  line-height: 1;
  font-size: 3.75rem;
  padding: 0 15px;
`;

export const MainTitle = styled.span`
  color: #f0cc00;
`;

export const Subtitle = styled.div`
  color: #fff !important;
  font-weight: 400;
  margin-top: 1.5rem;
  padding: 0 15px;
  font-size: 1.125rem;
  line-height: 1.5;
`;

export const Reason = styled.div`
  box-sizing: border-box;
`;
export const ResonContainer = styled.div`
  padding: 0 30px;
  max-width: 1228px !important;
  padding-bottom: 3rem !important;
  padding-top: 3rem !important;
  display: flex;
  justify-content: space-between;
`;
export const ReasonLeft = styled.div`
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5
    text-align: left;
`;

export const ReasonRight = styled.div`
  padding: 0 15px 0 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMain = styled.div`
  box-shadow: -16px 8px 0 #ebebeb;
  flex-shrink: 0;
  height: 245px;
  transform: skew(-12deg, 0);
  width: 435px;
  overflow: hidden !important;
  position: relative;
`;

export const ReasonImg = styled.img`
  transform: skew(12deg, 0) scale(1.12);
  max-width: 100%;
  box-sizing: border-box;
`;

export const ReasonTitle = styled.h2`
  margin-bottom: 1.5rem;
  line-height: 2.5rem;
  font-size: 2rem;
`;

export const ReasonText = styled.p`
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export const Course = styled.div`
  background-color: #f2f0ef;
  padding: 4rem 0;
`;
export const CourseContainer = styled.div`
  padding: 0 30px;
`;
export const CourseTitle = styled.h2`
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
`;

export const SubCourseTitle = styled.h3`
  line-height: 1.75rem;
  color: #454545;
  font-size: 1.375rem;
`;
export const Category = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const CategoryItem = styled.div`
  max-width: 33.33%;
  display: flex;
`;

export const ItemLeft = styled.div``;

export const ItemRight = styled.div`
  padding: 0 0.75rem;
`;

export const ItemTitle = styled.h4`
  margin-top: 0;
  line-height: 1.5rem;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const ItemText = styled.span`
  line-height: 1.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const ListCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
