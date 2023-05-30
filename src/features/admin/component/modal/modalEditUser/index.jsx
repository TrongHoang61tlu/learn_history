import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import {  useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { fetchUsers, updateUsers } from "../../../adminSlice";
import {
  ModalButtonAccept,
  ModalContent,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalTitle,
} from "./style";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
  overlay: { zIndex: 9999 },
};

const schema = yup.object().shape({
  // id: yup.number().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phonenumber: yup.string().required(),
  address: yup.string().required(),
});

const ModalUpdateUser = ({
  isOpen,
  onRequestClose,
  onSubmitHandler,
  selectedUser,
}) => {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [formValues, setFormValues] = useState(selectedUser || {});

  useEffect(() => {
    setFormValues(selectedUser);
  }, [selectedUser]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: selectedUser,
  });

  function closeModalEdit() {
    setModalEdit(false);
    reset();
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevSelectedUser) => ({
      ...prevSelectedUser,
      [name]: value,
    }));
  };

  const handleUpdateUser = async (data, userId) => {
    try {
      const response = await dispatch(updateUsers({ userId, userData: data }));
      if (response.error) {
        toast.error("Cập nhật người dùng thất bại!");
      } else {
        toast.success("Cập nhật người dùng thành công!");
        dispatch(fetchUsers());
        onRequestClose();
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật người dùng!");
    }
    reset();
  };
  

  return (
    <Modal
      isOpen={isOpen}
      isClosed={closeModalEdit}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Cập nhật người dùng</ModalTitle>
      <ModalForm
        onSubmit={handleSubmit((data) =>
          handleUpdateUser(data, formValues?.id)
        )}
      >
        <ModalContent>
          <ModalLabel>First Name</ModalLabel>
          <ModalInput
            {...register("firstName")}
            value={formValues?.firstName}
            onChange={handleChange}
            required
          />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Last Name</ModalLabel>

          <ModalInput
            {...register("lastName")}
            value={formValues?.lastName}
            onChange={handleChange}
            required
          />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Phone Number</ModalLabel>

          <ModalInput
            {...register("phonenumber")}
            value={formValues?.phonenumber}
            onChange={handleChange}
            required
          />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Adress</ModalLabel>

          <ModalInput
            {...register("address")}
            value={formValues?.address}
            onChange={handleChange}
            required
          />
        </ModalContent>

        <ModalButtonAccept type="submit">Accept</ModalButtonAccept>
      </ModalForm>
    </Modal>
  );
};

export default ModalUpdateUser;
