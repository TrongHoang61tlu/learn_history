import { useEffect, useState } from "react";
import {
  ButtonContainer,
  ButtonExit,
  ButtonNext,
  LessonContent,
  LessonList,
  LessonListContainer,
  LessonListItem,
  LessonThumbnail,
  LessonTitle,
  PageContainer,
  TextQuestion,
  VideoContainer,
  VideoPlayer,
  Videodescription,
  Videotitle,
} from "./style";
import Modal from 'react-modal';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Lesson = () => {
  const { id, courseId } = useParams();
  const parsedContentID = parseInt(id);
  const parsedCourseID = parseInt(courseId);
  const video = useSelector((state) => state.video.video);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const selectedVideoData = video.find(
      (video) => video.contentID === parsedContentID
    );
    setSelectedVideo(selectedVideoData);
  }, [video, parsedContentID]);

  const handleVideoClick = (video, courseID) => {
    setSelectedVideo(video);
    navigate(`/course/${courseID}/lesson/${video.contentID}`);
  };
  const handleVideoEnd = () => {
    setShowQuestion(true); // Hiển thị câu hỏi khi video kết thúc
    setShowModal(true); // Hi
  };

  const handlePractice = () => {
    // Xử lý sự kiện khi người dùng nhấn nút "Đi làm bài tập"
    setShowModal(false); // Ẩn modal
    const currentURL = new URL(window.location.href);
    currentURL.pathname = currentURL.pathname + "/quizz";
    navigate(currentURL.pathname);
  };

  const handleBack = () => {
    // Xử lý sự kiện khi người dùng nhấn nút "Trở lại"
    setShowModal(false); // Ẩn modal
    // Thực hiện các hành động khác khi người dùng nhấn nút "Trở lại"
  };

  return (
    <PageContainer>
      <VideoContainer>
        {selectedVideo && (
          <>
            <VideoPlayer
              src={selectedVideo.videoUrl}
              controls
              poster={selectedVideo.thumbnaiUrl}
              onEnded={handleVideoEnd}
            />
            <Videotitle>{selectedVideo.title}</Videotitle>
            <Videodescription>{selectedVideo.description}</Videodescription>
          </>
        )}
      </VideoContainer>
      <LessonListContainer>
        <LessonContent>Bài học tiếp theo</LessonContent>
        <LessonList>
          {video.map((video) => (
            <LessonListItem
              key={video.contentID}
              selected={selectedVideo?.contentID === video.contentID}
              onClick={() => handleVideoClick(video, parsedCourseID)} // Truyền parsedCourseID vào hàm handleVideoClick
            >
              <LessonThumbnail src={video.thumbnaiUrl} />
              <LessonTitle>{video.title}</LessonTitle>
            </LessonListItem>
          ))}
        </LessonList>
      </LessonListContainer>
      <Modal
        isOpen={showModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TextQuestion>Bạn đã hoàn thành bài học, cùng làm bài tập củng cố nào </TextQuestion>
       <ButtonContainer>
            <ButtonExit onClick={handleBack}>Trở lại</ButtonExit>
            <ButtonNext onClick={handlePractice}>Tiếp tục</ButtonNext>
       </ButtonContainer>
      </Modal>
    </PageContainer>
  );
};

export default Lesson;
