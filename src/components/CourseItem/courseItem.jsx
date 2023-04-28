import {
    Bottom,
    ButtonCourse,
    Container,
    Mid,
    MidText,
    MidTitle,
    SubTopImg,
    Top,
    TopImg,
} from "./style";

function CouresItem() {
  return (
    <Container>
      <Top>
        <TopImg src="https://prod-discovery.edx-cdn.org/media/course/image/eeaa118e-58a4-488d-bcb7-28fb71352b47-4273da762466.jpg" />
        <SubTopImg src="https://prod-discovery.edx-cdn.org/organization/logos/797a0982-fdc1-440e-85b2-0295d84baff6-65a0a6a6bd9a.png" />
      </Top>
      <Mid>
        <MidTitle>中国古代史（大学先修课) | Ancient History of China</MidTitle>
        <MidText>Peking University</MidText>
      </Mid>
      <Bottom>
        <ButtonCourse>Học ngay</ButtonCourse>
      </Bottom>
    </Container>
  );
}

export default CouresItem;
