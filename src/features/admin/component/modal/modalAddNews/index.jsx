import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
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
  ModalImage,
  ModalInput,
  ModalLabel,
  ModalLeft,
  ModalRight,
  ModalTitle,
} from "./style";

import { toast } from "react-toastify";
import { addCourse, fetchCourses } from "../../../courseSlice";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { addNews, fetchNews } from "../../../newsSlice";

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
  title: yup.string(),
  imageUrl: yup.string(),
  description: yup.string(),
  linkUrl: yup.string(),
});

// Modal.setAppElement("#root");

const ModalAddNews = ({ isOpen, onRequestClose, onSubmitHandler }) => {
  const dispatch = useDispatch();
  const [modalAdd, setModalAdd] = useState(false);
  const [imageCloudUrl, setImageCloudUrl] = useState("");
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
    data.imageUrl = imageCloudUrl;
    try {
      // Thực hiện đăng ký
      await dispatch(addNews(data));
      dispatch(fetchNews()); // Gọi action fetchUsers để cập nhật danh sách người dùng
      onRequestClose(); // Đóng modal sau khi thêm thành công
      // Xử lý thành công
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đăng ký!");
    }
    reset();
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "taujkhku");
    formData.append("cloud_name", "do688zacl");
    formData.append("api_key", "349158946865815");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/taujkhku/image/upload",
        formData
      );
      const imageCloudUrl = response.data.secure_url;
      setImageCloudUrl(imageCloudUrl);
    } catch (error) {
      console.log("Lỗi khi upload ảnh", error);
    }
    setIsLoading(false); // Kết thúc hiệu ứng tải ảnh
  };

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Thêm mới tin tức</ModalTitle>
      <ModalForm onSubmit={handleSubmit(onSubmitHandlerd)}>
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Tiêu đề</ModalLabel>
              <ModalInput {...register("title")} type="text" />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mô tả</ModalLabel>
              <ModalInput {...register("description")} />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đường dẫn bài viết</ModalLabel>
              <ModalInput {...register("linkUrl")} />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Ảnh mô tả</ModalLabel>
              <ModalAvatar>
                {isLoading ? (
                  <div>Đang tải ảnh...</div> // Hiển thị hiệu ứng tải ảnh
                ) : (
                  <ModalImage src={imageCloudUrl} alt="" />
                )}
                {/* ... */}
                <ModalAddAvatar>
                  <ModalInput
                    style={{ display: "none" }}
                    {...register("imageUrl")}
                    name="add-image"
                    id="add-image"
                    type="file"
                    onChange={handleImageUpload}
                    required
                  />
                  <ModLabel htmlFor="add-image">
                    {" "}
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

export default ModalAddNews;
