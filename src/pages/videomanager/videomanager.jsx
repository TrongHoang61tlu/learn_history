import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonAdd,
  ButtonDelete,
  ButtonUpdate,
  Table,
  TableData,
  TableHeader,
  TableRow,
  Title,
  Wrapper,
} from "./style";
import { deleteIsVideo, fetchVideo } from "../../features/admin/videoSlice";
import ModalAddVideo from "../../features/admin/component/modal/modalAddVideo";
import { fetchCourseContent } from "../../features/admin/course-contentSlice";
import ModalEditVideo from "../../features/admin/component/modal/modalEditVideo";

function Videomanager() {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.video);
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const courseContentData = useSelector(
    (state) => state.courseContent.courseContent
  );

  const openModalAdd = () => {
    setModalAddIsOpen(true);
  };

  const closeModalAdd = () => {
    setModalAddIsOpen(false);
  };

  const openModalUpdate = () => {
    setModalUpdateIsOpen(true);
  };

  const closeModalUpdate = () => {
    setModalUpdateIsOpen(false);
  };

  const handleDeleteUser = (videoId) => {
    const result = window.confirm(
      "Bạn có chắc chắn muốn xóa khóa học này không?"
    );
    if (result) {
      dispatch(deleteIsVideo(videoId));
    }
  };

  useEffect(() => {
    dispatch(fetchVideo());
    dispatch(fetchCourseContent());
  }, []);

  return (
    <Wrapper>
      <Title>MANAGER COURSE WITH HOANGNT</Title>
      <ButtonAdd onClick={openModalAdd}>Thêm video</ButtonAdd>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Bài học</TableHeader>
            <TableHeader>Tiêu đề</TableHeader>
            <TableHeader>Mô tả</TableHeader>
            <TableHeader>Video</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {videoData.map((video) => {
           const content = courseContentData.find((content) => content.id === video.contentID);
           const contentName = content ? content.lecture : "Unknown content";
           
            return (
              <TableRow key={video.id}>
                <TableData>{contentName}</TableData>
                <TableData>{video.title}</TableData>
                <TableData>{video.description}</TableData>
                <TableData>{video.videoUrl}</TableData>
                <TableData>
                  <ButtonUpdate
                    onClick={() => {
                      setSelectedVideo(video);
                      openModalUpdate();
                    }}
                  >
                    <FaEdit color="blue" />
                  </ButtonUpdate>
                  <ButtonDelete onClick={() => handleDeleteUser(video.id)}>
                    <FaTrashAlt color="red" />
                  </ButtonDelete>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
      <ModalAddVideo isOpen={modalAddIsOpen} onRequestClose={closeModalAdd} />
      <ModalEditVideo
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        selectedVideo={selectedVideo}
      />
    </Wrapper>
  );
}

export default Videomanager;
