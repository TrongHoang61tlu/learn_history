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
          Company News: Udemy Rings the Opening Bell in Celebration of its IPO!
        </SestionTwoText>
      </SestionTwo>
      <SestionThree>
        <ThreeContent>
          <ThreeTitles>Improving lives through learning</ThreeTitles>
          <ThreeText>
            Whether you want to learn or to share what you know, you’ve come to
            the right place. As a global destination for online learning, we
            connect people through knowledge.
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
            <DescTitle>We just keep growing</DescTitle>
            <DescText>
              Our global community and our course catalog get bigger every day.
              Check out our latest numbers as of December 2022.
            </DescText>
          </FourDesc>
        </FourMain>
      </SestionFour>
    </Wrapper>
  );
}

export default About;
