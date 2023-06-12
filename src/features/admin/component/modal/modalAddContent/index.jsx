import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
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
  ModalOption,
  ModalRight,
  ModalSelect,
  ModalTitle,
} from "./style";

import { toast } from "react-toastify";
import { addCourseContent, fetchCourseContent } from "../../../course-contentSlice";

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
  courseId: yup.string().required(),
  chapter: yup.string(),
  chapterName: yup.string(),
  lecture: yup.string(),
  description: yup.string(),
});

// Modal.setAppElement("#root");

const ModalAddContent = ({ isOpen, onRequestClose, onSubmitHandler }) => {
  const dispatch = useDispatch();
  const [modalAdd, setModalAdd] = useState(false);
  const course = useSelector((state) => state.course.courses);
  const [selectedCourse, setSelectedCourse] = useState("");
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
    try {
      // Thực hiện đăng ký
      const newData = { ...data, courseID: selectedCourse };
      await dispatch(addCourseContent(newData));
      dispatch(fetchCourseContent()); // Gọi action fetchUsers để cập nhật danh sách người dùng
      onRequestClose(); // Đóng modal sau khi thêm thành công
      // Xử lý thành công
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đăng ký!");
    }
    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Thêm mới bài học</ModalTitle>
      <ModalForm onSubmit={handleSubmit(onSubmitHandlerd)}>
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Chọn khóa học</ModalLabel>
              <ModalSelect
                {...register("courseId", { required: true })}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">-- Chọn khóa học --</option>
                {course.map((course) => (
                  <ModalOption key={course.id} value={course.id}>
                    {course.title}
                  </ModalOption>
                ))}
              </ModalSelect>
              {errors.courseId && (
                <p style={{ color: "red" }}>Khóa học là trường bắt buộc</p>
              )}
            </ModalContent>
            <ModalContent>
              <ModalLabel>Chương </ModalLabel>
              <ModalInput {...register("chapter")} type="text" />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Tên chương</ModalLabel>
              <ModalInput {...register("chapterName")} />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Tên bài học</ModalLabel>
              <ModalInput {...register("lecture")} />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mô tả</ModalLabel>
              <ModalInput {...register("description")} />
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

export default ModalAddContent;
