import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaEdit,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
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
import {
  deleteContent,
  fetchCourseContent,
} from "../../features/admin/course-contentSlice";
import { fetchCourses } from "../../features/admin/courseSlice";
import ModalAddContent from "../../features/admin/component/modal/modalAddContent";
import ModalEditContent from "../../features/admin/component/modal/modalEditContent";

function CourseContentManager() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const dispatch = useDispatch();
  const courseContentData = useSelector(
    (state) => state.courseContent.courseContent
  );
  const courseData = useSelector((state) => state.course.courses);
  const [selectedContent, setSelectedContent] = useState(null);

  const [sortByCourse, setSortByCourse] = useState(false);

  const handleSortByCourse = () => {
    setSortByCourse(!sortByCourse);
  };

  let sortedCourseContentData = courseContentData;
  if (sortByCourse) {
    sortedCourseContentData = [...courseContentData].sort((a, b) => {
      const courseA = courseData.find((course) => course.id === a.courseID);
      const courseB = courseData.find((course) => course.id === b.courseID);
      const courseTitleA = courseA ? courseA.title.toLowerCase() : "";
      const courseTitleB = courseB ? courseB.title.toLowerCase() : "";
      return courseTitleA.localeCompare(courseTitleB);
    });
  }

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

  const handleDeleteCoursecontent = (courseContentId) => {
    const result = window.confirm(
      "Bạn có chắc chắn muốn xóa bài học này không"
    );
    if (result) {
      dispatch(deleteContent(courseContentId));
    }
  };

  useEffect(() => {
    dispatch(fetchCourseContent());
    dispatch(fetchCourses());
  }, []);

  return (
    <Wrapper>
      <Title>MANAGER USER WITH HOANGNT</Title>
      <ButtonAdd onClick={openModalAdd}>Thêm bài học </ButtonAdd>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              Khóa học
              <ButtonUpdate onClick={handleSortByCourse}>
                {sortByCourse ? <FaAngleDown /> : <FaAngleUp />}
              </ButtonUpdate>
            </TableHeader>
            <TableHeader>Chương</TableHeader>
            <TableHeader>Tên chương</TableHeader>
            <TableHeader>Tên bài học</TableHeader>
            <TableHeader>Mô tả</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedCourseContentData.map((content, index) => {
            const course = courseData.find(
              (course) => course.id === content.courseID
            );
            const courseName = course ? course.title : "Unknown Course"; // Lấy tên khóa học, nếu không tìm thấy thì hiển thị "Unknown Course"

            return (
              <TableRow key={content.id}>
                <TableData>{courseName}</TableData> {/* In ra tên khóa học */}
                <TableData>{content.chapter}</TableData>
                <TableData>{content.chapterName}</TableData>
                <TableData>{content.lecture}</TableData>
                <TableData>{content.description}</TableData>
                <TableData>
                  <ButtonUpdate
                    onClick={() => {
                      setSelectedContent(content);
                      openModalUpdate();
                    }}
                  >
                    <FaEdit color="blue" />
                  </ButtonUpdate>
                  <ButtonDelete
                    onClick={() => handleDeleteCoursecontent(content.id)}
                  >
                    <FaTrashAlt color="red" />
                  </ButtonDelete>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
      <ModalAddContent isOpen={modalAddIsOpen} onRequestClose={closeModalAdd} />
      <ModalEditContent
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        selectedContent={selectedContent}
      />
    </Wrapper>
  );
}

export default CourseContentManager;
