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
  return (
    <Wrapper>
      <Banner>
        <BannerContainer>
          <BannerImage src="image/test4.png" />
          <BannerOverlay />
          <BannerContent>
            <h2>Chào mừng bạn đến với website</h2>
            <p>
              Hãy sẵn sàng khám phá và tìm hiểu về những sự kiện quan trọng và
              nhân vật lịch sử đầy thú vị.
            </p>
          </BannerContent>
        </BannerContainer>

        <BannerBottom>
          <Item>
            <DetaiItem>
              <ButtonItem>H</ButtonItem>
              <Title>Hiểu biết về quá khứ</Title>
              <Content>
                Học lịch sử giúp chúng ta hiểu rõ hơn về quá khứ, các sự kiện và
                quá trình đã xảy ra trước đây. Hiểu biết về quá khứ giúp chúng
                ta có cái nhìn tổng quan về thế giới và định hình con người
                chúng ta là ai.
              </Content>
            </DetaiItem>
          </Item>

          <Item>
            <DetaiItem>
              <ButtonItem>P</ButtonItem>
              <Title>Phát triển tư duy phân tích và suy luận</Title>
              <Content>
                Học lịch sử yêu cầu chúng ta phân tích, suy luận và đưa ra những
                nhận định dựa trên tài liệu và thông tin có sẵn. Điều này giúp
                chúng ta phát triển tư duy phản biện, khả năng đánh giá thông
                tin và xử lý sự phức tạp.
              </Content>
            </DetaiItem>
          </Item>

          <Item>
            <DetaiItem>
              <ButtonItem>T</ButtonItem>
              <Title>Tạo niềm tự hào và nhận thức văn hóa</Title>
              <Content>
                Học lịch sử giúp chúng ta hiểu và đánh giá cao những thành tựu
                và di sản văn hóa của dân tộc và nhân loại. Điều này tạo ra niềm
                tự hào trong danh tính và văn hóa của chúng ta, và khơi dậy lòng
                yêu nước và tinh thần cống hiến.
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
                    <ItemContentText>{news.description}</ItemContentText>
                    <ItemContentNext href={news.linkUrl}>
                      Xem thêm
                    </ItemContentNext>
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
              src="image/logomain.png"
              alt=""
            />
            <Comment>
              Khóa học lịch sử đã mở ra một cánh cửa mới cho tôi, khiến tôi nhận
              thấy rằng quá khứ không chỉ là một trang sách cũ mà nó còn sống
              động và ảnh hưởng đến cuộc sống hiện tại của chúng ta
            </Comment>
            <CommentPerson>Nguyễn Duy Tân</CommentPerson>
          </Comments>
          <Comments>
            <CommentImg
              src="image/logomain.png"
              alt=""
            />
            <Comment>
            Sau khóa học lịch sử, tôi đã trở nên tò mò hơn về thế giới xung quanh. Tôi muốn khám phá và tìm hiểu thêm về những câu chuyện ẩn chứa trong từng góc nhỏ của thế giới này. 
            </Comment>
            <CommentPerson>Phan Hùng Phát</CommentPerson>
          </Comments>
          <Comments>
            <CommentImg
              src="image/logomain.png"
              alt=""
            />
            <Comment>
              Khóa học lịch sử đã giúp tôi hiểu rõ hơn về bản sắc và giá trị của
              văn hóa của dân tộc mình. Tôi cảm thấy tự hào về di sản lịch sử
              của đất nước và muốn góp phần bảo tồn và phát triển nó trong tương
              lai.
            </Comment>
            <CommentPerson>Nguyễn Quang Hiếu</CommentPerson>
          </Comments>
        </Slider>
      </SliceComment>
    </Wrapper>
  );
}

export default Home;
