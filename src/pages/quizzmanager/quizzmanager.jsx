import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonAdd,
  ButtonDelete,
  ButtonUpdate,
  Table,
  TableData,
  TableHeader,
  TableRow,
  Title,
  Wrapper,
} from "./style";
import { deleteQuizzz, fetchQuizz } from "../../features/admin/quizzSlice";
import { fetchCourseContent } from "../../features/admin/course-contentSlice";
import ModalAddQuizz from "../../features/admin/component/modal/modalAddQuizz";
import ModalEditQuizz from "../../features/admin/component/modal/modalEditQuizz";

function Quizzmanager() {
  const dispatch = useDispatch();
  const quizzData = useSelector((state) => state.quizz.quizz);
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const [selectedQuizz, setSelectedQuizz] = useState(null);
  const courseContentData = useSelector(
    (state) => state.courseContent.courseContent
  );
  const [sortByCourseContent, setSortByCourseContent] = useState(false);

  const handleSortByCourse = () => {
    setSortByCourseContent(!sortByCourseContent);
  };

  let sortedQuizzData = quizzData;
  if (sortByCourseContent) {
    sortedQuizzData = [...quizzData].sort((a, b) => {
      const contentA = courseContentData.find(
        (content) => content.id === a.contentId
      );
      const contentB = courseContentData.find(
        (content) => content.id === b.contentId
      );
      const contentTitleA = contentA ? contentA.lecture.toLowerCase() : "";
      const contentTitleB = contentB ? contentB.lecture.toLowerCase() : "";
      return contentTitleA.localeCompare(contentTitleB);
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

  const handleDeleteUser = (quizzId) => {
    const result = window.confirm(
      "Bạn có chắc chắn muốn xóa khóa học này không?"
    );
    if (result) {
      dispatch(deleteQuizzz(quizzId));
    }
  };

  useEffect(() => {
    dispatch(fetchQuizz());
    dispatch(fetchCourseContent());
  }, []);

  return (
    <Wrapper>
      <Title>QUẢN LÝ NỘI DUNG CÂU HỎI</Title>
      <ButtonAdd onClick={openModalAdd}>Thêm câu hỏi</ButtonAdd>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              Bài học
              <ButtonUpdate onClick={handleSortByCourse}>
                {sortByCourseContent ? <FaAngleDown /> : <FaAngleUp />}
              </ButtonUpdate>
            </TableHeader>
            <TableHeader>Câu hỏi</TableHeader>
            <TableHeader>Đáp án 1</TableHeader>
            <TableHeader>Đáp án 2</TableHeader>
            <TableHeader>Đáp án 3</TableHeader>
            <TableHeader>Đáp án 4</TableHeader>
            <TableHeader>Đáp án chính xác</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedQuizzData.map((quizz) => {
            const content = courseContentData.find(
              (content) => content.id === quizz.contentId
            );
            const contentName = content ? content.lecture : "Unknown Course";
            return (
              <TableRow key={quizz.id}>
                <TableData>{contentName}</TableData>
                <TableData>{quizz.question}</TableData>
                <TableData>{quizz.option1}</TableData>
                <TableData>{quizz.option2}</TableData>
                <TableData>{quizz.option3}</TableData>
                <TableData>{quizz.option4}</TableData>
                <TableData>{quizz.answer}</TableData>
                <TableData>
                  <ButtonUpdate
                    onClick={() => {
                      setSelectedQuizz(quizz);
                      openModalUpdate();
                    }}
                  >
                    <FaEdit color="blue" />
                  </ButtonUpdate>
                  <ButtonDelete onClick={() => handleDeleteUser(quizz.id)}>
                    <FaTrashAlt color="red" />
                  </ButtonDelete>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
      <ModalAddQuizz isOpen={modalAddIsOpen} onRequestClose={closeModalAdd} />
      <ModalEditQuizz
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        selectedQuizz={selectedQuizz}
      />
    </Wrapper>
  );
}

export default Quizzmanager;
