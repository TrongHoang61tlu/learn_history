import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
  ControlerButton,
  ModLabel,
  ModalAddAvatar,
  ModalAvatar,
  ModalButtonAccept,
  ModalContent,
  ModalControler,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalLeft,
  ModalOption,
  ModalRight,
  ModalSelect,
  ModalTitle,
  ModalVideo,
} from "./style";

import { toast } from "react-toastify";
import { addCourse, fetchCourses } from "../../../courseSlice";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { addVideo, fetchVideo } from "../../../videoSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "70%",
    height: "80vh",
    overfolow: "scroll",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
  overlay: {
    zIndex: 9999,
    backgroundColor: "rgba(0, 7, 52, 0.2)",
  },
};

const schema = yup.object().shape({
  contentID: yup.string().required(),
  title: yup.string(),
  thumbnaiUrl: yup.string(),
  videoUrl: yup.string(),
  description: yup.string(),
});

// Modal.setAppElement("#root");

const ModalAddVideo = ({ isOpen, onRequestClose, onSubmitHandler }) => {
  const dispatch = useDispatch();
  const [modalAdd, setModalAdd] = useState(false);
  const [videoCloudUrl, setVideoCloudUrl] = useState("");
  const content = useSelector((state) => state.courseContent.courseContent);
  const [selectedContent, setSelectedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  function closeModal() {
    setModalAdd(false);
  }
  const onSubmitHandlerd = async (data) => {
    data.videoUrl = videoCloudUrl;
    try {
      // Thực hiện đăng ký
      await dispatch(addVideo(data));
      dispatch(fetchVideo()); // Gọi action fetchUsers để cập nhật danh sách người dùng
      onRequestClose(); // Đóng modal sau khi thêm thành công
      // Xử lý thành công
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đăng ký!");
    }
    reset();
  };

  const handleVideoUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "taujkhku");
    formData.append("cloud_name", "do688zacl");
    formData.append("api_key", "349158946865815");

    try {
      setIsLoading(true); // Start the loading animation
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/taujkhku/video/upload",
        formData
      );
      const videoCloudUrl = response.data.secure_url;
      setVideoCloudUrl(videoCloudUrl);
    } catch (error) {
      console.log("Lỗi khi upload video", error);
    } finally {
      setIsLoading(false); // Stop the loading animation
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Thêm mới Video</ModalTitle>
      <ModalForm onSubmit={handleSubmit(onSubmitHandlerd)}>
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Chọn bài học</ModalLabel>
              <ModalSelect
                {...register("contentID", { required: true })}
                onChange={(e) => setSelectedContent(e.target.value)}
              >
                <option value="">-- Chọn bài học --</option>
                {content.map((content) => (
                  <ModalOption key={content.id} value={content.id}>
                    {content.lecture}
                  </ModalOption>
                ))}
              </ModalSelect>
              {errors.courseId && (
                <p style={{ color: "red" }}>Bài học là trường bắt buộc</p>
              )}
            </ModalContent>
            <ModalContent>
              <ModalLabel>Tiêu đề</ModalLabel>
              <ModalInput {...register("title")} type="text" />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mô tả</ModalLabel>
              <ModalInput {...register("description")} />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Video</ModalLabel>
              <ModalAvatar>
                {isLoading ? (
                  <div>Đang tải video...</div>
                ) : (
                  <ModalVideo src={videoCloudUrl} alt="" />
                )}
                {/* ... */}
                <ModalAddAvatar>
                  <ModalInput
                    style={{ display: "none" }}
                    {...register("videoUrl")}
                    name="add-video"
                    id="add-video"
                    type="file"
                    onChange={handleVideoUpload}
                    required
                  />
                  <ModLabel htmlFor="add-video">
                    <FaUpload />
                  </ModLabel>
                </ModalAddAvatar>
              </ModalAvatar>
            </ModalContent>
          </ModalRight>
        </ModalControler>
        <ControlerButton>
          <ModalButtonAccept type="submit">Thêm mới</ModalButtonAccept>
        </ControlerButton>
      </ModalForm>
    </Modal>
  );
};

export default ModalAddVideo;
