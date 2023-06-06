import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchUsers } from "../../features/admin/adminSlice";
import ModalAddUser from "../../features/admin/component/modal/modalAddUser";
import ModalUpdateUser from "../../features/admin/component/modal/modalEditUser";
import {
  ButtonAdd,
  ButtonDelete,
  ButtonUpdate,
  ButtonView,
  Table,
  TableData,
  TableHeader,
  TableRow,
  Title,
  Wrapper,
} from "./style";

function UserManager() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.admin.users);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModalAdd = () => {
    setModalAddIsOpen(true);
  };

  const closeModalAdd = () => {
    setModalAddIsOpen(false);
  };

  const openModalUpdate = () => {
    setModalUpdateIsOpen(true);
  };

  const closeModalUpdate = () => {
    setModalUpdateIsOpen(false);
  };

  const handleDeleteUser = (userId) => {
    const result = window.confirm(
      "Bạn có chắc chắn muốn xóa người dùng này không"
    );
    if (result) {
      dispatch(deleteUsers(userId));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Wrapper>
      <Title>MANAGER USER WITH HOANGNT</Title>
      <ButtonAdd onClick={openModalAdd}>Thêm người dùng</ButtonAdd>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Email</TableHeader>
            <TableHeader>First name</TableHeader>
            <TableHeader>Last name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <TableRow key={index}>
              <TableData>{user.email}</TableData>
              <TableData>{user.firstName}</TableData>
              <TableData>{user.lastName}</TableData>
              <TableData>{user.roleId === "1" ? "Admin" : "Member"}</TableData>
              <TableData>{user.address}</TableData>
              <TableData>
                <ButtonView>
                  <FaEye color="blue" />
                </ButtonView>
                <ButtonUpdate
                  onClick={() => {
                    setSelectedUser(user);
                    openModalUpdate();
                  }}
                >
                  <FaEdit color="blue" />
                </ButtonUpdate>
                <ButtonDelete onClick={() => handleDeleteUser(user.id)}>
                  <FaTrashAlt color="red" />
                </ButtonDelete>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <ModalAddUser isOpen={modalAddIsOpen} onRequestClose={closeModalAdd} />
      <ModalUpdateUser
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        selectedUser={selectedUser}
      />
    </Wrapper>
  );
}

export default UserManager;
