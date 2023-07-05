import { useSelector } from "react-redux";
import {
  Avatar,
  Bottom,
  BottomContainer,
  Item,
  ItemLeft,
  ItemRight,
  ListItem,
  Main,
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

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import dayjs from "dayjs";
import { LineMap } from "../../pages/Lesson/style";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

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

  console.log(usersInCourse);

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

  const labels = histories.map((data, index) => index + 1);

  const data2 = {
    labels,
    datasets: [
      {
        label: "Điểm số",
        data: histories.map((data) => data.score),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Thời gian",
        data: histories.map((data) => data.learningTime),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
              <UserItem
                key={user.id}
                onClick={() => handleUserClick(user.id)}
                active={activeUserId === user.id}
              >
                <Avatar src={user.image} />
                <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
              </UserItem>
            ))}
          </RightContainer>
        </MidRight>
      </Mid>
      <Bottom>
        <Text>Lịch sử làm bài</Text>
        <Main>
          <LineMap>
            <Line options={options} data={data2} />
          </LineMap>
          <div>
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
                    {getHistoriesByContentId(content.id).map((data, index) => (
                      <TableRow>
                        <TableData>{index + 1}</TableData>
                        <TableData>{data.score}</TableData>
                        <TableData>
                          {dayjs()
                            .startOf("day")
                            .second(data.learningTime)
                            .format("mm:ss")}
                        </TableData>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </BottomContainer>
            ))}
          </div>
        </Main>
      </Bottom>
    </Wrapper>
  );
}

export default DashBoard;
