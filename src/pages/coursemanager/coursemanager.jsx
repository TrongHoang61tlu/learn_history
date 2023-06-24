import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ModalAddCourse from "../../features/admin/component/modal/modalAddCourse";
import ModalEditCourse from "../../features/admin/component/modal/modalEditCourse";
import { deleteCourses, fetchCourses } from "../../features/admin/courseSlice";
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

function Coursemanager() {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.course.courses);
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  const handleDeleteUser = (courseId) => {
    const result = window.confirm(
      "Bạn có chắc chắn muốn xóa khóa học này không?"
    );
    if (result) {
      dispatch(deleteCourses(courseId));
    }
  };

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <Wrapper>
      <Title>QUẢN LÝ KHÓA HỌC</Title>
      <ButtonAdd onClick={openModalAdd}>Thêm khóa học</ButtonAdd>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Tiêu đề</TableHeader>
            <TableHeader>Ảnh</TableHeader>
            <TableHeader>Mô tả</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {courseData.map((course) => (
            <TableRow key={course.id}>
              <TableData>{course.title}</TableData>
              <TableData>
                <Image src={course.imageUrl} alt="" />
              </TableData>
              <TableData>{course.description}</TableData>
              <TableData>
                <ButtonUpdate
                  onClick={() => {
                    setSelectedCourse(course);
                    openModalUpdate();
                  }}
                >
                  <FaEdit color="blue" />
                </ButtonUpdate>
                <ButtonDelete onClick={() => handleDeleteUser(course.id)}>
                  <FaTrashAlt color="red" />
                </ButtonDelete>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <ModalAddCourse isOpen={modalAddIsOpen} onRequestClose={closeModalAdd} />
      <ModalEditCourse
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        selectedCourse={selectedCourse}
      />
    </Wrapper>
  );
}

export default Coursemanager;
