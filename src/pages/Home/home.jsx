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
  MainLeft,
  MainRight,
  SliceComment,
  Title,
  TitleComment,
  Wrapper,
  GridContainer,
  GridItem,
  MainItem,
  ItemImg,
  ItemContent,
  ItemContentTitle,
  ItemContentText,
  ItemContentNext,
} from "./style";
import { useSelector } from "react-redux";

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  arrows: true,
};
function Home() {
  const newsData = useSelector((state) => state.news.news);
  console.log(newsData);
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
        <MainLeft>{/* <MainImg src="image/hochiminh.png" /> */}</MainLeft>
        <MainRight>
          <TitleComment>Tin tức nổi bật</TitleComment>
          <GridContainer>
            {newsData.map((news) => (
              <GridItem>
                <MainItem>
                  <ItemImg src={news.imageUrl} />
                  <ItemContent>
                    <ItemContentTitle>{news.title}</ItemContentTitle>
                    <ItemContentText>
                      {news.description}
                    </ItemContentText>
                    <ItemContentNext href={news.linkUrl}>Xem thêm</ItemContentNext>
                  </ItemContent>
                </MainItem>
              </GridItem>
            ))}
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
