import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
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
  ModalTitle,
} from "./style";

import { toast } from "react-toastify";
import { EditVideo, fetchVideo } from "../../../videoSlice";

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
  description: yup.string(),
});

// Modal.setAppElement("#root");

const ModalEditVideo = ({
  isOpen,
  onRequestClose,
  onSubmitHandler,
  selectedVideo,
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

  const handleUpdateVideo = async (data, videoId) => {
    try {
      const response = await dispatch(EditVideo({ videoId, videoData: data }));
      if (response.error) {
        toast.error("Cập nhật video thất bại!");
      } else {
        toast.success("Cập nhật video thành công!");
        dispatch(fetchVideo());
        onRequestClose();
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật khóa học!");
    }
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevSelectedVideo) => ({
      ...prevSelectedVideo,
      [name]: value,
    }));
  };
  useEffect(() => {
    setInitialValues(selectedVideo);
  }, [selectedVideo]);

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  useEffect(() => {
    if (selectedVideo) {
      setFormValues(selectedVideo);
    }
  }, [selectedVideo]);
  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Cập nhật video</ModalTitle>
      <ModalForm
        onSubmit={handleSubmit((data) =>
          handleUpdateVideo(data, formValues.id)
        )}
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
          </ModalLeft>
        </ModalControler>
        <ControlerButton>
          <ModalButtonAccept type="submit">Cập nhật</ModalButtonAccept>
        </ControlerButton>
      </ModalForm>
    </Modal>
  );
};

export default ModalEditVideo;
