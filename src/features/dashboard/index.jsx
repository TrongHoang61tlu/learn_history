import { useSelector } from "react-redux";
import {
  Avatar,
  Bottom,
  BottomContainer,
  Item,
  ItemLeft,
  ItemRight,
  ListItem,
  Mid,
  MidLeft,
  MidRight,
  Name,
  Number,
  Option,
  RightContainer,
  Select,
  Table,
  TableData,
  TableHeader,
  TableRow,
  Text,
  Title,
  Top,
  UserItem,
  UserName,
  Wrapper,
} from "./style";
import { FaBook, FaBookOpen, FaQuestionCircle, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import dayjs from "dayjs";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashBoard() {
  const userData = useSelector((state) => state.admin.users);
  const courseData = useSelector((state) => state.course.courses);
  const contentData = useSelector((state) => state.courseContent.courseContent);
  const quizzData = useSelector((state) => state.quizz.quizz);
  const historiesData = useSelector((state) => state.histories.histories);
  const [courseId, setCourseId] = useState("");
  const usersInCourse = userData.filter((user) => user.courseId == courseId);
  const [content, setContent] = useState([]);
  const contentSusses = content.filter((content) => content.status === "1");
  const contentUnsusses = contentData.length - contentSusses.length;
  const [histories, setHistories] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);
  console.log(contentData.length);


  const getHistoriesByContentId = (contentId) => {
    return histories.filter((history) => history.contentID === contentId);
  };

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setCourseId(courseId);
  };

  const handleUserClick = (userId) => {
    const userCourseContent = contentData.filter(
      (content) => content.userId === userId
    );
    const userHistories = historiesData.filter(
      (histories) => histories.userID === userId
    );
    setHistories(userHistories);
    setContent(userCourseContent);
    setActiveUserId(userId);
  };

  const data = {
    labels: ["Số bài học chưa hoàn thành", "Số bài học đã hoàn thành"],
    datasets: [
      {
        label: "# of Votes",
        data: [contentUnsusses, contentSusses.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Wrapper>
      <Top>
        <ListItem>
          <Item>
            <ItemLeft className="primary">
              <FaUsers fontSize="4rem" color="#fff" />
            </ItemLeft>
            <ItemRight>
              <Number>{userData.length - 1}</Number>
              <Name>Học sinh</Name>
            </ItemRight>
          </Item>
        </ListItem>
        <ListItem>
          <Item>
            <ItemLeft className="success">
              <FaBook fontSize="4rem" color="#fff" />
            </ItemLeft>
            <ItemRight>
              <Number>{courseData.length}</Number>
              <Name>Khóa học</Name>
            </ItemRight>
          </Item>
        </ListItem>
        <ListItem>
          <Item>
            <ItemLeft className="warning">
              <FaBookOpen fontSize="4rem" color="#fff" />
            </ItemLeft>
            <ItemRight>
              <Number>{contentData.length}</Number>
              <Name>Bài học</Name>
            </ItemRight>
          </Item>
        </ListItem>
        <ListItem>
          <Item>
            <ItemLeft className="danger">
              <FaQuestionCircle fontSize="4rem" color="#fff" />
            </ItemLeft>
            <ItemRight>
              <Number>{quizzData.length}</Number>
              <Name>Câu hỏi</Name>
            </ItemRight>
          </Item>
        </ListItem>
      </Top>
      <Mid>
        <MidLeft>
          <Pie data={data} />
        </MidLeft>
        <MidRight>
          <RightContainer>
            <Select onChange={handleCourseChange}>
              <Option value="">---Chọn lớp học---</Option>
              {courseData.map((data) => (
                <Option key={data.id} value={data.id}>
                  {data.title}
                </Option>
              ))}
            </Select>
            {usersInCourse.map((user) => (
              <UserItem key={user.id} onClick={() => handleUserClick(user.id)}
              active={activeUserId === user.id}
              >
                
                <Avatar src={user.image}/>
                <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
              </UserItem>
            ))}
          </RightContainer>
        </MidRight>
      </Mid>
      <Bottom>
        <Text>Lịch sử làm bài</Text>
        {content.map((content) => (
          <BottomContainer key={content.id}>
            <Title>{content.lecture}</Title>
            <Table>
              <thead>      
                <TableRow>
                  <TableHeader>Số lần làm bài</TableHeader>
                  <TableHeader>Điểm số</TableHeader>
                  <TableHeader>Thời gian</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {getHistoriesByContentId(content.id).map((data,index) => (

                <TableRow>
                  <TableData>{index + 1}</TableData>
                  <TableData>{data.score}</TableData>
                  <TableData>{dayjs().startOf("day").second(data.learningTime).format("mm:ss")}</TableData>
                </TableRow>
                ))}
              </tbody>
            </Table>
          </BottomContainer>
        ))}
      </Bottom>
    </Wrapper>
  );
}

export default DashBoard;
