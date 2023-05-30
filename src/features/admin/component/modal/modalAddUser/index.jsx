
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addUser, fetchUsers} from "../../../adminSlice";
import {
  ModalButtonAccept,
  ModalContent,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalOption,
  ModalSelect,
  ModalTitle,
} from "./style";
import { Error } from "../../../../auth/Login/style";
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
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phonenumber: yup.string().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  roleId: yup.string().required(),
});

// Modal.setAppElement("#root");

const ModalAddUser = ({ isOpen, onRequestClose, onSubmitHandler }) => {
  const dispatch = useDispatch();
  const [modalAdd, setModalAdd] = useState(false);
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
      await dispatch(addUser(data));
      dispatch(fetchUsers()); // Gọi action fetchUsers để cập nhật danh sách người dùng
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
      <ModalTitle>Thêm mới người dùng</ModalTitle>
      <ModalForm onSubmit={handleSubmit(onSubmitHandlerd)}>
        <ModalContent>
          <ModalLabel>Email</ModalLabel>
          <ModalInput {...register("email")} type="email" required />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Password</ModalLabel>
          <ModalInput {...register("password")} required />
        </ModalContent>
        <Error>{errors.password?.message}</Error>
        <ModalContent>
          <ModalLabel>First Name</ModalLabel>
          <ModalInput {...register("firstName")} required />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Last Name</ModalLabel>
          <ModalInput {...register("lastName")} required />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Phone Number</ModalLabel>
          <ModalInput {...register("phonenumber")} required />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Adress</ModalLabel>
          <ModalInput {...register("address")} required />
        </ModalContent>
        <ModalContent>
          <ModalLabel>Sex</ModalLabel>
          <ModalSelect {...register("gender")} required>
            <ModalOption value="0">Nam</ModalOption>
            <ModalOption value="1">Nữ</ModalOption>
          </ModalSelect>
        </ModalContent>
        <ModalContent>
          <ModalLabel>RoleId</ModalLabel>
          <ModalSelect {...register("roleId")} required>
            <ModalOption value="1">Admin</ModalOption>
            <ModalOption value="2">Student</ModalOption>
          </ModalSelect>
        </ModalContent>
        <ModalButtonAccept type="submit">Accept</ModalButtonAccept>
      </ModalForm>
    </Modal>
  );
};

export default ModalAddUser;
