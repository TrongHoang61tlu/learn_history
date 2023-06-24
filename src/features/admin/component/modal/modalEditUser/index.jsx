import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { fetchUsers, updateUsers } from "../../../adminSlice";
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
import { useEffect } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "70%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
  overlay: { zIndex: 9999, backgroundColor: "rgba(0, 7, 52, 0.2)" },
};

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  image: yup.string(),
  phonenumber: yup.string(),
  address: yup.string(),
});

const ModalAddUser = ({
  isOpen,
  onRequestClose,
  onSubmitHandler,
  selectedUser,
}) => {
  const dispatch = useDispatch();
  const [modalAdd, setModalAdd] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [formValues, setFormValues] = useState({});
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

  const handleUpdateUser = async (data, userId) => {
    const updatedData = { ...data, image: formValues.image };
    try {
      const response = await dispatch(
        updateUsers({ userId, userData: updatedData })
      );
      if (response.error) {
        toast.error("Cập nhật khóa học thất bại!");
      } else {
        toast.success("Cập nhật khóa học thành công!");
        dispatch(fetchUsers());
        onRequestClose();
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật khóa học!");
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
        image: imageCloudUrl,
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
    setInitialValues(selectedUser);
  }, [selectedUser]);

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  useEffect(() => {
    if (selectedUser) {
      setFormValues(selectedUser);
    }
  }, [selectedUser]);

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Cập nhật người dùng</ModalTitle>
      <ModalForm
        onSubmit={handleSubmit((data) => handleUpdateUser(data, formValues.id))}
      >
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Tên</ModalLabel>
              <ModalInput
                {...register("firstName")}
                value={formValues.firstName || ""}
                onChange={handleChange}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Họ</ModalLabel>
              <ModalInput
                {...register("lastName")}
                value={formValues.lastName || ""}
                onChange={handleChange}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Số điện thoại</ModalLabel>
              <ModalInput
                {...register("phonenumber")}
                value={formValues.phonenumber || ""}
                onChange={handleChange}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Địa chỉ</ModalLabel>
              <ModalInput
                {...register("address")}
                value={formValues.address || ""}
                onChange={handleChange}
              />
            </ModalContent>
          </ModalLeft>
          <ModalRight>
            <ModalContent>
              <ModalLabel>Ảnh mô tả</ModalLabel>
              <ModalAvatar>
                <ModalImage src={formValues?.image || ""} alt="" />
                <ModalAddAvatar>
                  <ModalInput
                    style={{ display: "none" }}
                    name="add-image"
                    id="add-image"
                    {...register("image")}
                    type="file"
                    onChange={handleImageUpload}
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

export default ModalAddUser;
