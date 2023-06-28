import { useState } from "react";
import {
  MainInfo,
  ImgLogo,
  Infomation,
  Logo,
  PageItem,
  PageList,
  PageTitle,
  Pages,
  Text,
  Wrapper,
  Avatar,
  Name,
  Email,
  Form,
} from "./styleAdmin";
import { FaBook, FaBookOpen, FaNewspaper, FaPalette, FaQuestion, FaUser, FaVideo, FaWarehouse } from "react-icons/fa";

function SidebarAdmin() {
  const [isActive, setIsActive] = useState(0);
  const email = localStorage.getItem('email');
  const name = localStorage.getItem('name');
  const avatar = localStorage.getItem('avatar');

  const handleItemClick = (index) => {
    setIsActive(index);
  };
  return (
    <Wrapper>
      <Logo>
        <ImgLogo
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="css-qnz835"
        >
          <g>
            <path d="M30.8297561,9.38829268 C29.1178049,6.37341463 24.7065854,6.5797561 23.2834146,9.74146341 L20.2058537,16.5780488 L15.4439024,27.1563415 C14.1819512,29.9597561 16.2326829,33.1314634 19.3068293,33.1314634 L19.3853659,33.1314634 C21.0582927,33.1314634 22.5743902,32.1473171 23.255122,30.6195122 L31.0156098,13.2046341 C31.5634146,11.9753659 31.4946341,10.5587805 30.8297561,9.38829268" />
            <path d="M39.2758537,24.2904878 L39.2382927,24.2236585 C39.1656098,24.0941463 39.0863415,23.9726829 39.0043902,23.854878 C38.9846341,23.8265854 38.964878,23.7985366 38.9446341,23.7712195 C38.8614634,23.6578049 38.7753659,23.5482927 38.6841463,23.4463415 C38.6753659,23.4365854 38.6660976,23.4278049 38.6573171,23.4182927 C38.5717073,23.3243902 38.4819512,23.2360976 38.3897561,23.1517073 C38.3668293,23.1307317 38.3436585,23.1092683 38.32,23.0887805 C38.2197561,23.0009756 38.1165854,22.9180488 38.0102439,22.8414634 C37.9956098,22.8312195 37.9809756,22.8219512 37.9663415,22.8119512 C37.8678049,22.7431707 37.7668293,22.6797561 37.6636585,22.6204878 C37.6414634,22.6078049 37.6192683,22.5943902 37.5965854,22.5819512 C37.4814634,22.5185366 37.3636585,22.4604878 37.2439024,22.4085366 C37.2282927,22.4017073 37.2121951,22.3958537 37.1965854,22.3895122 C37.0831707,22.3419512 36.9680488,22.2997561 36.8514634,22.262439 C36.8356098,22.257561 36.82,22.2519512 36.8039024,22.2470732 C36.6753659,22.2078049 36.5453659,22.1746341 36.4139024,22.1478049 C36.4012195,22.1453659 36.3885366,22.1431707 36.3758537,22.1407317 C36.244878,22.115122 36.1126829,22.095122 35.98,22.0817073 C35.9768293,22.0814634 35.9734146,22.0809756 35.9702439,22.0807317 C35.8307317,22.0670732 35.6909756,22.0607317 35.5512195,22.0604878 C35.5436585,22.0604878 35.5360976,22.0607317 35.5287805,22.0607317 C35.2465854,22.0621951 34.964878,22.0907317 34.6880488,22.1468293 C34.6856098,22.1473171 34.6831707,22.1478049 34.6807317,22.1485366 C34.117561,22.2634146 33.5758537,22.4912195 33.0943902,22.8302439 C33.0943902,22.8304878 33.0943902,22.8304878 33.0941463,22.8307317 C32.5085366,23.2431707 32.012439,23.8178049 31.6802439,24.5560976 L30.5097561,27.1563415 C29.2478049,29.9597561 31.2982927,33.1314634 34.3726829,33.1314634 L34.4517073,33.1314634 C35.5726829,33.1314634 36.6214634,32.6878049 37.3978049,31.9365854 C37.4082927,31.9263415 37.4195122,31.9165854 37.43,31.9063415 C37.4709756,31.8656098 37.5102439,31.8231707 37.5495122,31.7809756 C37.575122,31.7536585 37.6007317,31.7265854 37.6256098,31.6987805 C37.6595122,31.6602439 37.6921951,31.6207317 37.724878,31.5809756 C37.7534146,31.5460976 37.7817073,31.5109756 37.8095122,31.475122 C37.8380488,31.4380488 37.8658537,31.4004878 37.8931707,31.362439 C37.9234146,31.3204878 37.952439,31.277561 37.9812195,31.2346341 C38.0043902,31.1992683 38.0278049,31.1643902 38.0502439,31.1282927 C38.082439,31.0765854 38.1126829,31.0234146 38.1426829,30.9702439 C38.1595122,30.9402439 38.1770732,30.9109756 38.1934146,30.8804878 C38.2385366,30.795122 38.2817073,30.7082927 38.3212195,30.6195122 L39.45,28.0860976 C39.9946341,26.8643902 39.93,25.4573171 39.2758537,24.2904878" />
            <path
              d="M15.95,13.2046341 C16.4978049,11.9753659 16.4287805,10.5587805 15.7641463,9.38829268 C15.705122,9.28414634 15.6419512,9.18463415 15.5765854,9.08829268 C15.5553659,9.05707317 15.5331707,9.02780488 15.5114634,8.99756098 C15.4653659,8.93341463 15.4187805,8.8702439 15.3704878,8.8097561 C15.3439024,8.77658537 15.3165854,8.74487805 15.2895122,8.71268293 C15.242439,8.65756098 15.1946341,8.60390244 15.1456098,8.55195122 C15.1168293,8.52146341 15.0878049,8.49121951 15.0585366,8.46170732 C15.0065854,8.41 14.9534146,8.3602439 14.8992683,8.31170732 C14.8714634,8.28682927 14.8441463,8.26121951 14.8158537,8.23707317 C14.747561,8.17902439 14.677561,8.12390244 14.6065854,8.07097561 C14.5912195,8.0597561 14.5768293,8.04731707 14.5614634,8.03634146 C14.4743902,7.97317073 14.385122,7.91414634 14.2939024,7.85878049 C14.2695122,7.84365854 14.2439024,7.8304878 14.2190244,7.81609756 C14.1519512,7.77682927 14.0843902,7.73926829 14.0158537,7.70414634 C13.9821951,7.68707317 13.9482927,7.67146341 13.9146341,7.65536585 C13.8521951,7.62585366 13.7895122,7.59756098 13.7258537,7.57121951 C13.6902439,7.55634146 13.6543902,7.54195122 13.6182927,7.52804878 C13.5536585,7.50317073 13.4887805,7.4804878 13.4231707,7.45902439 C13.3887805,7.44756098 13.3546341,7.43585366 13.32,7.42536585 C13.2441463,7.40292683 13.1678049,7.38292683 13.0912195,7.36439024 C13.0665854,7.35878049 13.0426829,7.35170732 13.0180488,7.34609756 C12.9158537,7.32341463 12.8131707,7.30439024 12.7097561,7.2895122 C12.6921951,7.28682927 12.6746341,7.28560976 12.6570732,7.28317073 C12.5717073,7.27195122 12.4863415,7.26268293 12.4007317,7.25658537 C12.3668293,7.25390244 12.3329268,7.25292683 12.2995122,7.25146341 C12.2290244,7.24780488 12.1585366,7.24560976 12.0880488,7.24560976 C12.0507317,7.24560976 12.0139024,7.24634146 11.9765854,7.24731707 C11.9080488,7.24902439 11.8397561,7.25243902 11.7712195,7.25756098 C11.734878,7.26 11.6987805,7.26243902 11.6626829,7.26609756 C11.5892683,7.27317073 11.5160976,7.28292683 11.4429268,7.29390244 C11.4131707,7.29829268 11.3831707,7.30170732 11.3534146,7.30682927 C11.2507317,7.32439024 11.1485366,7.34487805 11.0473171,7.37 C11.0470732,7.37 11.0468293,7.37 11.0465854,7.37 C9.86487805,7.66195122 8.79536585,8.45829268 8.21756098,9.74146341 L0.378292683,27.1563415 C-0.883658537,29.9597561 1.16682927,33.1314634 4.24121951,33.1314634 L4.3197561,33.1314634 C5.99243902,33.1314634 7.50829268,32.1473171 8.18926829,30.6195122 L13.8446341,17.9290244 L13.8446341,17.9292683 L15.95,13.2046341 Z"
              id="Fill-7"
            />
          </g>
        </ImgLogo>
        Admin
      </Logo>
      <Pages>
        <PageTitle>Pages</PageTitle>
        <PageList>
        <PageItem to="/admin/dashboard"
            isActive={isActive === 0}
            onClick={() => handleItemClick(0)}
          >
            <FaPalette color="#fff" />
            <Text>Thống kê</Text>
          </PageItem>
          <PageItem to="/admin/usermanager"
            isActive={isActive === 1}
            onClick={() => handleItemClick(1)}
          >
            <FaUser color="#fff" />
            <Text>Quản lý Người dùng</Text>
          </PageItem>
          <PageItem to="/admin/coursemanager"
            isActive={isActive === 2}
            onClick={() => handleItemClick(2)}
          >
            <FaBook color="#fff" />
            <Text>Quản lý Khóa học</Text>
          </PageItem>

          <PageItem to="/admin/coursecontentmanager"
            isActive={isActive === 3}
            onClick={() => handleItemClick(3)}
          >
             <FaBookOpen color="#fff" />
            <Text>Quản lý Bài học</Text>
          </PageItem>
          <PageItem to="/admin/newsmanager"
            isActive={isActive === 4}
            onClick={() => handleItemClick(4)}
          >
           <FaNewspaper color="#fff" />
            <Text>Quản lý Tin tức </Text>
          </PageItem>
          <PageItem to="/admin/videomanager"
            isActive={isActive === 5}
            onClick={() => handleItemClick(5)}
          >
             <FaVideo color="#fff" />
            <Text>Quản lý Video bài học</Text>
          </PageItem>
          <PageItem to="/admin/quizzmanager"
            isActive={isActive === 6}
            onClick={() => handleItemClick(6)}
          >
           <FaQuestion color="#fff" />
            <Text>Quản lý Câu hỏi </Text>
          </PageItem>
        </PageList>
      </Pages>
      <Infomation>
        <MainInfo>
          <Avatar src={avatar} />
          <Form>
            <Email>{email}</Email>
            <Name>{name}</Name>
          </Form>
        </MainInfo>
      </Infomation>
    </Wrapper>
  );
}

export default SidebarAdmin;
