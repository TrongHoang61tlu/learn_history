import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
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
import { useEffect } from "react";
import { EditQuizz, fetchQuizz } from "../../../quizzSlice";

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
  question: yup.string(),
  option1: yup.string(),
  option2: yup.string(),
  option3: yup.string(),
  option4: yup.string(),
  answer: yup.string(),
});

// Modal.setAppElement("#root");

const ModalEditQuizz = ({
  isOpen,
  onRequestClose,
  onSubmitHandler,
  selectedQuizz,
}) => {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [formValues, setFormValues] = useState({});
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
  const handleUpdateQuizz = async (data, quizzId) => {
    try {
      const response = await dispatch(EditQuizz({ quizzId, quizzData: data }));
      if (response.error) {
        toast.error("Cập nhật câu hỏi thất bại!");
      } else {
        toast.success("Cập nhật câu hỏi thành công!");
        dispatch(fetchQuizz());
        onRequestClose();
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật câu hỏi!");
    }
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevSelectedQuizz) => ({
      ...prevSelectedQuizz,
      [name]: value,
    }));
  };

  useEffect(() => {
    setInitialValues(selectedQuizz);
  }, [selectedQuizz]);

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  useEffect(() => {
    setFormValues(selectedQuizz);
  }, [selectedQuizz]);

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Sửa bài học</ModalTitle>
      <ModalForm
        onSubmit={handleSubmit((data) =>
          handleUpdateQuizz(data, formValues?.id)
        )}
      >
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Câu hỏi </ModalLabel>
              <ModalInput
                {...register("question")}
                type="text"
                onChange={handleChange}
                value={formValues?.question }
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án 1</ModalLabel>
              <ModalInput
                {...register("option1")}
                onChange={handleChange}
                value={formValues?.option1}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án 2</ModalLabel>
              <ModalInput
                {...register("option2")}
                onChange={handleChange}
                value={formValues?.option2}
              />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Đáp án 3</ModalLabel>
              <ModalInput
                {...register("option3")}
                onChange={handleChange}
                value={formValues?.option3}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án 4</ModalLabel>
              <ModalInput
                {...register("option4")}
                onChange={handleChange}
                value={formValues?.option4}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Đáp án chính xác</ModalLabel>
              <ModalInput
                {...register("answer")}
                onChange={handleChange}
                value={formValues?.answer}
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

export default ModalEditQuizz;
