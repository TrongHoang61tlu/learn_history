import CouresItem from "../../components/CourseItem/courseItem";
import {
  Banner,
  Category,
  CategoryItem,
  ContainerBanner,
  Course,
  CourseContainer,
  CourseTitle,
  ItemLeft,
  ItemRight,
  ItemText,
  ItemTitle,
  ListCourses,
  MainTitle,
  Reason,
  ReasonImg,
  ReasonLeft,
  ReasonRight,
  ReasonText,
  ReasonTitle,
  ResonContainer,
  RightMain,
  SubCourseTitle,
  Subtitle,
  Title,
  Wrapper,
} from "./style";
import { useSelector } from "react-redux";

function Courses() {
  const coursesData = useSelector((state) => state.coursebyuser.courses);
  return (
    <Wrapper>
      <Banner>
        <ContainerBanner>
          <Title>
            Học <MainTitle>lịch sử</MainTitle> với khóa học online và bộ câu hỏi
          </Title>
          <Subtitle>
            Nghiên cứu lịch sử dạy chúng ta về quá khứ, giúp chúng ta hiểu hiện
            tại và cho chúng ta cái nhìn sâu sắc về tương lai. Tìm hiểu xem các
            sự kiện quan trọng đã định hình thế giới của chúng ta như thế nào
            với các khóa học lịch sử trực tuyến được cung cấp.
          </Subtitle>
        </ContainerBanner>
      </Banner>

      <Reason>
        <ResonContainer>
          <ReasonLeft>
            <ReasonTitle>Tại sao phải học lịch sử?</ReasonTitle>
            <ReasonText>
              Học lịch sử có thể là một trải nghiệm phong phú vì nhiều lý do. Nó
              cho phép người học hiểu rõ hơn về thế giới xung quanh và những
              người đã định hình nó.Khi khám phá quá khứ, chúng ta hiểu rõ hơn
              về các giá trị văn hóa, tín ngưỡng và động lực đã hình thành xã
              hội theo thời gian.
            </ReasonText>
            <ReasonText>
              Ngoài ra, lịch sử có tác động sâu sắc đến việc ra quyết định trong
              xã hội hiện đại. Bằng cách hiểu hậu quả của các quyết định trong
              quá khứ, chúng ta có thể sử dụng các bài học kinh nghiệm để đưa ra
              các quyết định sáng suốt hơn trong hiện tại.Và, bằng cách xem xét
              các xu hướng và mô hình lịch sử, chúng ta có thể dự đoán và chuẩn
              bị tốt hơn cho tương lai.Lịch sử giúp giải thích cách thức và lý
              do một số chính sách, luật và quy định được tạo ra cũng như hậu
              quả của những lựa chọn đó, cung cấp hướng dẫn về cách tiếp cận các
              vấn đề tương tự trong hiện tại.
            </ReasonText>
            <ReasonText>
              Lịch sử học tập cũng có thể cải thiện và tinh chỉnh các kỹ năng tư
              duy phê phán. Xem xét các nguồn lịch sử như tài liệu, ảnh, đồ tạo
              tác và lịch sử truyền miệng cho phép chúng ta hình thành các ý
              kiến ​​và lý thuyết độc lập về các lĩnh vực.
            </ReasonText>
          </ReasonLeft>
          <ReasonRight>
            <RightMain>
              <ReasonImg src="https://i.ytimg.com/vi/bB9vy3ifETs/maxresdefault.jpg" />
            </RightMain>
          </ReasonRight>
        </ResonContainer>
      </Reason>

      <Course>
        <CourseContainer>
          <CourseTitle>Các lớp học lịch sử trực tuyến</CourseTitle>
          <SubCourseTitle>
            Tìm sở thích mới và nâng cao cơ hội nghề nghiệp của bạn
          </SubCourseTitle>

          <Category>
            <CategoryItem>
              <ItemLeft>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                    fill="currentColor"
                  ></path>
                </svg>
              </ItemLeft>
              <ItemRight>
                <ItemTitle>Phát triển tư duy phản biện</ItemTitle>
                <ItemText>
                Học lịch sử khuyến khích tư duy phản biện, giúp chúng ta phân tích, đánh giá và suy nghĩ logic về các tình huống và sự kiện lịch sử.
                </ItemText>
              </ItemRight>
            </CategoryItem>
            <CategoryItem>
              <ItemLeft>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                    fill="currentColor"
                  ></path>
                </svg>
              </ItemLeft>
              <ItemRight>
                <ItemTitle>Nhận thức quyền công dân</ItemTitle>
                <ItemText>
                Học lịch sử là cách để chúng ta hiểu về quyền và trách nhiệm của mình trong xã hội, từ đó tham gia tích cực và đóng góp vào cộng đồng.
                </ItemText>
              </ItemRight>
            </CategoryItem>
            <CategoryItem>
              <ItemLeft>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                    fill="currentColor"
                  ></path>
                </svg>
              </ItemLeft>
              <ItemRight>
                <ItemTitle>Khai phá lối sống và sự sáng tạo</ItemTitle>
                <ItemText>
                Học lịch sử khơi nguồn cảm hứng và khám phá, mở ra những cánh cửa mới cho sự sáng tạo và khám phá cá nhân
                </ItemText>
              </ItemRight>
            </CategoryItem>
          </Category>

          <ListCourses>
            {coursesData.map((course, index) => (
              <CouresItem key={course.id} course={course} courseContent = {course.CourseContents} />
            ))}
          </ListCourses>
        </CourseContainer>
      </Course>
    </Wrapper>
  );
}

export default Courses;
