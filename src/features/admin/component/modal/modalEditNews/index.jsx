import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
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
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { EditNews, fetchNews } from "../../../newsSlice";

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
});

// Modal.setAppElement("#root");

const ModalEditNews = ({
  isOpen,
  onRequestClose,
  onSubmitHandler,
  selectedNews,
}) => {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [formValues, setFormValues] = useState(selectedNews || {});
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  function closeModal() {
    setModalEdit(false);
  }

  const handleUpdateNews = async (data, newsId) => {
    const updatedData = { ...data, imageUrl: formValues.imageUrl };
    try {
      const response = await dispatch(
        EditNews({ newsId, newsData: updatedData })
      );
      if (response.error) {
        toast.error("Cập nhật tin tức thất bại !!");
      } else {
        toast.success("Cập nhật tin tức thành công!");
        dispatch(fetchNews());
        onRequestClose();
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật tin tức!");
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

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/taujkhku/image/upload",
        formData
      );
      const imageCloudUrl = response.data.secure_url;
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        imageUrl: imageCloudUrl,
      }));
    } catch (error) {
      console.log("Lỗi khi upload ảnh", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevSelectedUser) => ({
      ...prevSelectedUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedNews) {
      setFormValues(selectedNews);
      setValue("title", selectedNews.title);
      setValue("description", selectedNews.description);
    }
  }, [selectedNews]);
  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Cập nhật tin tức</ModalTitle>
      <ModalForm
        onSubmit={handleSubmit((data) => handleUpdateNews(data, formValues.id))}
      >
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Tiêu đề</ModalLabel>
              <ModalInput
                {...register("title")}
                type="text"
                value={formValues?.title || ""}
                onChange={handleChange}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mô tả</ModalLabel>
              <ModalInput
                {...register("description")}
                value={formValues?.description || ""}
                onChange={handleChange}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mô tả</ModalLabel>
              <ModalInput
                {...register("linkUrl")}
                value={formValues?.linkUrl || ""}
                onChange={handleChange}
              />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Ảnh mô tả</ModalLabel>
              <ModalAvatar>
                <ModalImage src={formValues?.imageUrl || ""} alt="" />
                <ModalAddAvatar>
                  <ModalInput
                    style={{ display: "none" }}
                    name="add-image"
                    id="add-image"
                    {...register("imageUrl")}
                    onChange={handleImageUpload}
                    type="file"
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
          <ModalButtonAccept type="submit">Cập nhật</ModalButtonAccept>
        </ControlerButton>
      </ModalForm>
    </Modal>
  );
};

export default ModalEditNews;
