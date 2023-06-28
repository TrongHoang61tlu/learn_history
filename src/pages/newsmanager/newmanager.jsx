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
  Image,
  Table,
  TableData,
  TableHeader,
  TableRow,
  Title,
  Wrapper,
} from "./style";
import { deleteNew, fetchNews } from "../../features/admin/newsSlice";
import ModalAddNews from "../../features/admin/component/modal/modalAddNews";
import ModalEditNews from "../../features/admin/component/modal/modalEditNews";

function NewsManager() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.news);
  const [selectedNews, setSelectedNews ] = useState(null);

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

  const handleDeleteNews = (newsId) => {
    const result = window.confirm(
      "Bạn có chắc chắn muốn xóa người dùng này không"
    );
    if (result) {
      dispatch(deleteNew(newsId));
    }
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <Wrapper>
      <Title>QUẢN LÝ TIN TỨC</Title>
      <ButtonAdd onClick={openModalAdd}>Thêm bài viết</ButtonAdd>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Tiêu đề</TableHeader>
            <TableHeader>Đường dẫn</TableHeader>
            <TableHeader>Ảnh mô tả</TableHeader>
            <TableHeader>Mô tả</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {newsData.map((news, index) => (
            <TableRow key={news.id}>
              <TableData>{news.title}</TableData>
              <TableData>{news.linkUrl}</TableData>
              <TableData> <Image src={news.imageUrl} alt="" /></TableData>
              <TableData>{news.description}</TableData>
              <TableData>
                <ButtonUpdate
                  onClick={() => {
                    setSelectedNews(news);
                    openModalUpdate();
                  }}
                >
                  <FaEdit color="blue" />
                </ButtonUpdate>
                <ButtonDelete onClick={() => handleDeleteNews(news.id)}>
                  <FaTrashAlt color="red" />
                </ButtonDelete>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <ModalAddNews isOpen={modalAddIsOpen} onRequestClose={closeModalAdd} />
      <ModalEditNews
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        selectedNews={selectedNews}
      />
    </Wrapper>
  );
}

export default NewsManager;
