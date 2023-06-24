import { useEffect, useRef } from "react";
import {
  Container,
  ContainerImg,
  ContainerTitle,
  DescText,
  DescTitle,
  FourDesc,
  FourMain,
  FourVideo,
  Sestion,
  SestionFour,
  SestionThree,
  SestionTwo,
  SestionTwoText,
  Text,
  ThreeContent,
  ThreeText,
  ThreeTitles,
  Wrapper,
} from "./style";

function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;

      if (video) {
        // calculate the distance from the top of the video to the top of the viewport
        const videoTop = video.getBoundingClientRect().top;
        const viewportTop = window.pageYOffset;
        const distanceFromTop = videoTop - viewportTop;

        // if the video is visible in the viewport, play it
        if (distanceFromTop <= window.innerHeight && distanceFromTop >= 0) {
          video.pause();
        } else {
          video.play();
        }
      } else {
        console.log("LỖi");
      }
    };

    // add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Sestion>
        <Container>
          <ContainerTitle>
            <Text>Chúng tôi mang lịch sử đến gần hơn với bạn</Text>
          </ContainerTitle>
          <ContainerImg></ContainerImg>
        </Container>
      </Sestion>
      <SestionTwo>
        <SestionTwoText href="">
        Hãy cùng nhau đắm mình trong biển cả tri thức 
        </SestionTwoText>
      </SestionTwo>
      <SestionThree>
        <ThreeContent>
          <ThreeTitles>Tình hình học lịch sử hiện tại </ThreeTitles>
          <ThreeText>
            Trong thời đại công nghệ thông tin và môi trường sống hiện đại, sự
            quan tâm đến học lịch sử đang giảm đi. Nhiều người cho rằng lịch sử
            chỉ là việc học về quá khứ không liên quan đến cuộc sống hiện tại và
            tương lai. Đa số người dân thiếu kiến thức cơ bản về lịch sử, đặc
            biệt là lịch sử quốc gia và thế giới. Điều này gây ra một khoảng
            cách văn hóa và hiểu biết giữa các thế hệ và gây mất cơ hội học hỏi
            từ những bài học quan trọng của quá khứ.
          </ThreeText>
        </ThreeContent>
      </SestionThree>
      <SestionFour>
        <FourMain>
          <FourVideo controls ref={videoRef}>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            ></source>
          </FourVideo>
          <FourDesc>
            <DescTitle>Lý do cần học lịch sử là:</DescTitle>
            <DescText>
              <strong>Hiểu về quá khứ: </strong> Học lịch sử giúp chúng ta hiểu rõ hơn về các sự
              kiện quan trọng và quyết định đã ảnh hưởng đến thế giới hiện tại.
              Nếu không hiểu lịch sử, chúng ta sẽ bị mất cơ hội học hỏi từ những
              sai lầm và thành công của quá khứ.
            </DescText>
            <DescText>
            <strong>Xây dựng nhận thức văn hóa:</strong> Lịch sử là cách để hiểu và trân trọng
              giá trị của các văn hóa khác nhau trên thế giới. Nó giúp chúng ta
              đánh giá cao sự đa dạng và khác biệt, từ đó xây dựng một thế giới
              đa văn hóa và hòa bình.
            </DescText>
            <DescText>
              <strong>Phát triển tư duy phản biện:</strong> Học lịch sử khuyến khích tư duy phản
              biện, giúp chúng ta suy nghĩ logic, phân tích và đánh giá thông
              tin một cách khách quan. Điều này rất quan trọng trong cuộc sống
              hàng ngày và trong quá trình ra quyết định.
            </DescText>
            <DescText>
              <strong>Nhận thức quyền công dân:</strong> Học lịch sử giúp chúng ta hiểu về quyền
              và trách nhiệm của mình trong xã hội. Nó tạo ra nhận thức về quyền
              công dân, khuyến khích sự tham gia tích cực và đóng góp vào cộng
              đồng.
            </DescText>
          </FourDesc>
        </FourMain>
      </SestionFour>
    </Wrapper>
  );
}

export default About;
