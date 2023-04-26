import Slider from "react-slick";
import {
  Banner,
  BannerBottom,
  BannerContainer,
  BannerContent,
  BannerImage,
  BannerOverlay,
  ButtonItem,
  Comment,
  CommentFeel,
  CommentImg,
  CommentPerson,
  Comments,
  Content,
  DetaiItem,
  Item,
  Main,
  MainImg,
  MainLeft,
  MainRight,
  SliceComment,
  Title,
  TitleComment,
  Wrapper,
  GridContainer,
  GridItem,
  MainLeftOverlay,
  MainItem,
  ItemImg,
  ItemContent,
  ItemContentTitle,
  ItemContentText,
  ItemContentNext,
} from "./style";

function Home() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <Wrapper>
      <Banner>
        <BannerContainer>
          <BannerImage src="image/test4.png" />
          <BannerOverlay />
          <BannerContent>
            <h1>Welcome to my website</h1>
            <p>
              This is a sample banner created using React and Styled-components.
            </p>
          </BannerContent>
        </BannerContainer>

        <BannerBottom>
          <Item>
            <DetaiItem>
              <ButtonItem>A</ButtonItem>
              <Title>Awarded Agency</Title>
              <Content>
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </Content>
            </DetaiItem>
          </Item>

          <Item>
            <DetaiItem>
              <ButtonItem>A</ButtonItem>
              <Title>Awarded Agency</Title>
              <Content>
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </Content>
            </DetaiItem>
          </Item>

          <Item>
            <DetaiItem>
              <ButtonItem>A</ButtonItem>
              <Title>Awarded Agency</Title>
              <Content>
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </Content>
            </DetaiItem>
          </Item>
        </BannerBottom>
      </Banner>
      
      <Main>
        <MainLeft>
          <MainImg src="image/hochiminh.png" />
          <MainLeftOverlay />
        </MainLeft>
        <MainRight>
        <TitleComment>Tin tức nổi bật</TitleComment>
          <GridContainer>
            <GridItem>
              <MainItem>
                <ItemImg src="image/banner.png" />
                <ItemContent>
                  <ItemContentTitle>Full Documentation</ItemContentTitle>
                  <ItemContentText>
                    Built by developers for developers. Check the foundation and
                    you will find everything inside our documentation.
                  </ItemContentText>
                  <ItemContentNext href="">Xem thêm</ItemContentNext>
                </ItemContent>
              </MainItem>
            </GridItem>
            <GridItem>Item 2</GridItem>
            <GridItem>Item 3</GridItem>
            <GridItem>Item 4</GridItem>
          </GridContainer>
        </MainRight>
      </Main>

      {/**Slide comments */}
      <SliceComment>
        <TitleComment>Người dùng nói gì về chúng tôi</TitleComment>
        <Slider {...settings}>
          <Comments>
            <CommentImg
              src="https://d35aaqx5ub95lt.cloudfront.net/images/super/8183c77cba99daf1e900fb5f9b0cc671.svg"
              alt=""
            />
            <Comment>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </Comment>
            <CommentPerson>LINA</CommentPerson>
            <CommentFeel>Happy client</CommentFeel>
          </Comments>
          <Comments>
            <CommentImg
              src="https://d35aaqx5ub95lt.cloudfront.net/images/super/8183c77cba99daf1e900fb5f9b0cc671.svg"
              alt=""
            />
            <Comment>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </Comment>
            <CommentPerson>LINA</CommentPerson>
            <CommentFeel>Happy client</CommentFeel>
          </Comments>
        </Slider>
      </SliceComment>
    </Wrapper>
  );
}

export default Home;
