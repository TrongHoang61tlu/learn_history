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
import { addQuizz, fetchQuizz } from "../../../quizzSlice";

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
  contentId: yup.string().required(),
  question: yup.string(),
  option1: yup.string(),
  option2: yup.string(),
  option3: yup.string(),
  option4: yup.string(),
  answer: yup.string(),
});

// Modal.setAppElement("#root");

const ModalAddQuizz = ({ isOpen, onRequestClose, onSubmitHandler }) => {
  const dispatch = useDispatch();
  const [modalAdd, setModalAdd] = useState(false);
  const content = useSelector((state) => state.courseContent.courseContent);
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
      await dispatch(addQuizz(newData));
      dispatch(fetchQuizz()); // Gọi action fetchUsers để cập nhật danh sách người dùng
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
              <ModalLabel>Chọn bài học</ModalLabel>
              <ModalSelect
                {...register("contentId", { required: true })}
                onChange={(e) => setSelectedCourse(e.target.value)}
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
              <ModalLabel>Câu hỏi </ModalLabel>
              <ModalInput {...register("question")} type="text" />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án 1</ModalLabel>
              <ModalInput {...register("option1")} />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án 2</ModalLabel>
              <ModalInput {...register("option2")} />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Đáp án 3</ModalLabel>
              <ModalInput {...register("option3")} />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án 4 </ModalLabel>
              <ModalInput {...register("option4")} />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án chính xác</ModalLabel>
              <ModalInput {...register("answer")} />
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

export default ModalAddQuizz;
