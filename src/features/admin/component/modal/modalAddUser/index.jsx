import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addUser, fetchUsers } from "../../../adminSlice";
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
  ModalOption,
  ModalRight,
  ModalSelect,
  ModalTitle,
} from "./style";
import { Error } from "../../../../auth/Login/style";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

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
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  image: yup.string(),
  phonenumber: yup.string().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  roleId: yup.string().required(),
});

// Modal.setAppElement("#root");

const ModalAddUser = ({ isOpen, onRequestClose, onSubmitHandler }) => {
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
    data.image = imageCloudUrl;
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
      <ModalTitle>Thêm mới người dùng</ModalTitle>
      <ModalForm onSubmit={handleSubmit(onSubmitHandlerd)}>
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Email</ModalLabel>
              <ModalInput {...register("email")} type="email" required />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Mật khẩu</ModalLabel>
              <ModalInput {...register("password")} required />
            </ModalContent>
            <Error>{errors.password?.message}</Error>
            <ModalContent>
              <ModalLabel>Tên</ModalLabel>
              <ModalInput {...register("firstName")} required />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Họ</ModalLabel>
              <ModalInput {...register("lastName")} required />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Số điện thoại</ModalLabel>
              <ModalInput {...register("phonenumber")} required />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Địa chỉ</ModalLabel>
              <ModalInput {...register("address")} required />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Giới tính</ModalLabel>
              <ModalSelect {...register("gender")} required>
                <ModalOption value="0">Nam</ModalOption>
                <ModalOption value="1">Nữ</ModalOption>
              </ModalSelect>
            </ModalContent>
            <ModalContent>
              <ModalLabel>Quyền</ModalLabel>
              <ModalSelect {...register("roleId")} required>
                <ModalOption value="1">Admin</ModalOption>
                <ModalOption value="2">Học sinh</ModalOption>
              </ModalSelect>
            </ModalContent>
          </ModalLeft>
          <ModalRight>
          <ModalContent>
              <ModalLabel>Ảnh mô tả</ModalLabel>
              <ModalAvatar>
                <ModalImage src={imageCloudUrl}  alt="" />
                <ModalAddAvatar>
                  <ModalInput
                    style={{ display: "none" }}
                    name="add-image"
                    id="add-image"
                    {...register("image")}
                    type="file"
                    onChange={handleImageUpload}
                    required
                  />
                  <ModLabel for="add-image">
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

export default ModalAddUser;
