import { useEffect, useState } from "react";
import {
  ButtonContainer,
  ButtonExit,
  ButtonNext,
  Card,
  CardBody,
  CommentContainer,
  CommentLabel,
  CommentTextArea,
  Container,
  Content,
  Footer,
  Hedder,
  Info,
  LessonContent,
  LessonList,
  LessonListContainer,
  LessonListItem,
  LessonThumbnail,
  LessonTitle,
  LogoMain,
  PageContainer,
  Section,
  TextQuestion,
  Title,
  VideoContainer,
  VideoPlayer,
  Videodescription,
  Videotitle,
} from "./style";
import Modal from "react-modal";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { addComment, fetchComments } from "../../features/course/commentSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Lesson = () => {
  const dispatch = useDispatch();
  const { id, courseId } = useParams();
  const userId = localStorage.getItem("id");
  const parsedContentID = parseInt(id);
  const parsedCourseID = parseInt(courseId);
  const parsedUserId = parseInt(userId);
  const video = useSelector((state) => state.video.video);
  const comment = useSelector((state) => state.comment.comments);
  const user = useSelector((state) => state.admin.users);
  const [newComment, setNewComment] = useState("");
  const commentData = comment.filter(
    (comment) => comment.contentId === parsedContentID
  );
  const userData = user.find((user) => user.id === parsedUserId);
  console.log(userData);
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
  const handleAddComment = async () => {
    // Kiểm tra nội dung bình luận không được rỗng
    if (newComment.trim() === "") {
      return;
    }

    // Tạo payload cho action
    const commentPayload = {
      userId: userData.id,
      username: userData?.firstName + userData?.lastName,
      contentId: parsedContentID,
      comment: newComment,
    };

    // Dispatch action để thêm bình luận mới
    await dispatch(addComment(commentPayload));
    dispatch(fetchComments());
    // Reset nội dung bình luận trong state
    setNewComment("");
  };

  dayjs.extend(relativeTime);
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

        <Section>
          <Container>
            <h1>Bình luận của người dùng</h1>
            <div>
              <div>
                <Card>
                  <Hedder>
                    <CommentContainer className="d-flex flex-start w-100">
                      <div className="form-outline w-100">
                        <Title>
                          {userData?.firstName + userData?.lastName}
                        </Title>
                        <CommentTextArea
                          id="textAreaExample"
                          rows="6"
                          placeholder="Nhập bình luận..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        ></CommentTextArea>
                        <CommentLabel
                          className="form-label"
                          htmlFor="textAreaExample"
                        ></CommentLabel>
                      </div>
                    </CommentContainer>
                    <div className="float-end mt-2 pt-1">
                      <ButtonContainer>
                        <ButtonExit onClick={handleAddComment}>
                          Thêm{" "}
                        </ButtonExit>
                      </ButtonContainer>
                    </div>
                  </Hedder>
                  <Footer>
                    {Array.isArray(commentData) ? (
                      commentData
                      .slice() // Create a copy of the commentData array
                      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort comments by descending createdAt timestamp
                      .map((comment) => (
                          <CardBody key={comment.id}>
                            <Title>{comment?.username}</Title>
                            <Info>{dayjs(comment.createdAt).fromNow()}</Info>
                            <Content>{comment?.comment}</Content>
                          </CardBody>
                        ))
                    ) : (
                      <p>Không có dữ liệu bình luận.</p>
                    )}
                  </Footer>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
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
        <TextQuestion>
          <LogoMain
            src="https://res.cloudinary.com/do688zacl/image/upload/v1687588358/jjonhpcqlkrz4a54mdzm.png"
            alt=""
          />
          Bạn đã hoàn thành bài học, cùng làm bài tập củng cố nào{" "}
        </TextQuestion>
        <ButtonContainer>
          <ButtonExit onClick={handleBack}>Trở lại</ButtonExit>
          <ButtonNext onClick={handlePractice}>Tiếp tục</ButtonNext>
        </ButtonContainer>
      </Modal>
    </PageContainer>
  );
};

export default Lesson;
