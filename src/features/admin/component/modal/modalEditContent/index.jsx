import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch} from "react-redux";
import * as yup from "yup";
import {
  ControlerButton,
  ModalButtonAccept,
  ModalContent,
  ModalControler,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalLeft,
  ModalRight,
  ModalTitle,
} from "./style";

import { toast } from "react-toastify";
import {
  EditContent,
  fetchCourseContent,
} from "../../../course-contentSlice";
import { useEffect } from "react";

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
  chapter: yup.string(),
  chapterName: yup.string(),
  lecture: yup.string(),
  description: yup.string(),
});

// Modal.setAppElement("#root");

const ModalEditContent = ({
  isOpen,
  onRequestClose,
  onSubmitHandler,
  selectedContent,
}) => {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [formValues, setFormValues] = useState(selectedContent || {});
  console.log(formValues);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  function closeModal() {
    setModalEdit(false);
  }
  const handleUpdateContent = async (data, courseContentId) => {
    try {
      console.log(data);
      const response = await dispatch(EditContent({ courseContentId, courseContentData: data }));
      if (response.error) {
        toast.error("Cập nhật khóa học thất bại!");
      } else {
        toast.success("Cập nhật khóa học thành công!");
        dispatch(fetchCourseContent());
        onRequestClose();
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật khóa học!");
    }
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevSelectedContent) => ({
      ...prevSelectedContent,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormValues(selectedContent);
  },[selectedContent]);

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Sửa bài học</ModalTitle>
      <ModalForm onSubmit={handleSubmit((data) => handleUpdateContent(data, formValues?.id))}>
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Chương </ModalLabel>
              <ModalInput
                {...register("chapter")}
                type="text"
                onChange={handleChange}
                value={formValues?.chapter}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Tên chương</ModalLabel>
              <ModalInput
                {...register("chapterName")}
                onChange={handleChange}
                value={formValues?.chapterName}
              />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Tên bài học</ModalLabel>
              <ModalInput {...register("lecture")} onChange={handleChange} 
              value={formValues?.lecture}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mô tả</ModalLabel>
              <ModalInput
                {...register("description")}
                onChange={handleChange}
                value={formValues?.description}
              />
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

export default ModalEditContent;
