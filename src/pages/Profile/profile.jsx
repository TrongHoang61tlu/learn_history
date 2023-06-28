import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Coleft,
  Colright,
  ModalForm,
  ModalControler,
  ModalContent,
  ModalLabel,
  ModalInput,
  ModalButtonAccept,
  ModalAvatar,
  ModalImage,
  ModalAddAvatar,
  ModLabel,
  Header,
  Name,
  SocialIcon,
  Description,
  Textprofile,
  SkillContainer,
  SkillBlock,
  ControlerButton,
} from "./styled";
import { fetchUsers, updateUsers } from "../../features/admin/adminSlice";
import { ModalLeft } from "../../features/admin/component/modal/modalEditUser/style";

function Profile() {
  const dispatch = useDispatch();
  const idUser = localStorage.getItem("id");
  const parsedUserId = parseInt(idUser);
  const userData = useSelector((state) => state.admin.users);
  const data = userData.find((user) => user.id === parsedUserId);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    const updatedData = { ...formValues, image: formValues.image };
    console.log(updatedData);
    try {
      const response = await dispatch(
        updateUsers({ userId: parsedUserId, userData: updatedData })
      );
      if (response.error) {
        toast.error("Cập nhật thông tin người dùng thất bại!");
      } else {
        toast.success("Cập nhật thông tin người dùng thành công!");
        dispatch(fetchUsers());
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật thông tin người dùng!");
    }
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

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleBack = () => {
    window.history.back();
  }

  useEffect(() => {
    if (data) {
      setFormValues(data);
    }
  }, [data]);

  return (
    <Container>
      <ModalForm onSubmit={handleUpdateUser}>
        <Row>
          <Coleft>
            <ModalAvatar>
              <ModalImage src={formValues?.image || ""} alt="" />
              <ModalAddAvatar>
                <ModalInput
                  style={{ display: "none" }}
                  name="add-image"
                  id="add-image"
                  type="file"
                  onChange={handleImageUpload}
                />
                <ModLabel htmlFor="add-image">
                  {" "}
                  <FaUpload />
                </ModLabel>
              </ModalAddAvatar>
            </ModalAvatar>
          </Coleft>
          <Colright>
            <div>
              <Header>
                <Name>{`${data?.firstName} ${data?.lastName}`}</Name>
                <SocialIcon className="fa fa-facebook"></SocialIcon>
                <SocialIcon className="fa fa-google"></SocialIcon>
                <SocialIcon className="fa fa-youtube-play"></SocialIcon>
                <SocialIcon className="fa fa-dribbble"></SocialIcon>
                <SocialIcon className="fa fa-linkedin"></SocialIcon>
              </Header>
              <Description>
                <Textprofile>Hồ sơ cá nhân</Textprofile>
              </Description>
              <SkillContainer>
                <SkillBlock className="success">
                  <h4>0</h4>
                  <h6>Tổng số khóa học đã hoàn thành</h6>
                </SkillBlock>
                <SkillBlock className="warning">
                  <h4>1</h4>
                  <h6>Tổng số bài học đã hoàn thành</h6>
                </SkillBlock>
                <SkillBlock className="danger">
                  <h4>900 </h4>
                  <h6>Điểm số cao nhất</h6>
                </SkillBlock>
                <SkillBlock className="primary">
                  <h4>2 ngày</h4>
                  <h6>Thâm niên</h6>
                </SkillBlock>
              </SkillContainer>
            </div>
          </Colright>
        </Row>
        <ModalControler>
          <ModalLeft>
            <ModalContent>
              <ModalLabel>Tên</ModalLabel>
              <ModalInput
                name="firstName"
                value={formValues.firstName || ""}
                onChange={handleChanged}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Họ</ModalLabel>
              <ModalInput
                name="lastName"
                value={formValues.lastName || ""}
                onChange={handleChanged}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Số điện thoại</ModalLabel>
              <ModalInput
                name="phonenumber"
                value={formValues.phonenumber || ""}
                onChange={handleChanged}
              />
            </ModalContent>
            <ModalContent>
              <ModalLabel>Địa chỉ</ModalLabel>
              <ModalInput
                name="address"
                value={formValues.address || ""}
                onChange={handleChanged}
              />
            </ModalContent>
          </ModalLeft>
        </ModalControler>

        <ControlerButton>
          <ModalButtonAccept className="danger" onClick={handleBack} >Trở lại</ModalButtonAccept>
          <ModalButtonAccept type="submit">Cập nhật</ModalButtonAccept>
        </ControlerButton>
      </ModalForm>
    </Container>
  );
}

export default Profile;
