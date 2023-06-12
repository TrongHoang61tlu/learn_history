import {
  Bottom,
  ButtonCourse,
  Container,
  CourseLink,
  Mid,
  MidText,
  MidTitle,
  SubTopImg,
  Top,
  TopImg,
} from "./style";

function CouresItem({ course }) {
  return (
    <CourseLink to={`/course/treemap/${course.id}`}>
      <Container>
        <Top>
          <TopImg src={course.imageUrl} />
          <SubTopImg src={course.organizationLogoUrl} />
        </Top>
        <Mid>
          <MidTitle>{course.title}</MidTitle>
          <MidText>{course.description}</MidText>
        </Mid>
        <Bottom>
          <ButtonCourse>Học ngay</ButtonCourse>
        </Bottom>
      </Container>
    </CourseLink>
  );
}

export default CouresItem;
