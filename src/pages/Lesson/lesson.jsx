import { useState } from "react";
import {
  LessonList,
  LessonListContainer,
  LessonListItem,
  LessonTitle,
  PageContainer,
  VideoContainer,
  VideoPlayer,
  Videodescription,
  Videotitle,
} from "./style";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Lesson = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const courseData = useSelector((state) => state.coursebyuser.courses);
  const course = courseData.find((course) => course.id === courseId);
  const video = course?.CourseContents?.Video;
  const lessons = [
    { id: 1, title: "Lesson 1", videoUrl: "lesson1.mp4" },
    { id: 2, title: "Lesson 2", videoUrl: "lesson2.mp4" },
    { id: 3, title: "Lesson 3", videoUrl: "lesson3.mp4" },
  ];

  const [selectedLesson, setSelectedLesson] = useState(video);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <PageContainer>
      <VideoContainer>
        <VideoPlayer src={selectedLesson?.videoUrl} controls />
        <Videotitle>Học Lịch sử</Videotitle>
        <Videodescription>
          Trong thời đại hiện nay, nhu cầu về du lịch đã trở thành một nhu cầu
          thiết yếu trong đời sống xã hội, có những đóng góp to lớn nền kinh tế
          nước nhà. Nghị quyết số 08-NQ/TW của Ban Chấp hành Trung ương Đảng đã
          khẳng định:
        </Videodescription>
      </VideoContainer>
      <LessonListContainer>
        <LessonList>
          {lessons.map((lesson) => (
            <LessonListItem
              key={lesson?.id}
              selected={selectedLesson?.id === lesson?.id}
              onClick={() => handleLessonClick(lesson)}
            >
              <LessonTitle>{lesson?.title}</LessonTitle>
            </LessonListItem>
          ))}
        </LessonList>
      </LessonListContainer>
    </PageContainer>
  );
};

export default Lesson;
