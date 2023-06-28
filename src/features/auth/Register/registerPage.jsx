import { useForm } from "react-hook-form";
import {
  ButtonContainer,
  DisplayEye,
  InputContainer,
  LoginWith,
  MainContainer,
  StyledButton,
  StyledInput,
  WelcomeText,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUser } from "../../admin/adminSlice";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup.string().min(8).max(32).required(),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  if (isRedirecting) {
    return <div>Loading...</div>; // Hiển thị thông báo chờ khi đang chuyển hướng
  }

  const onSubmitHandlerd = async (data) => {
    data.roleId = 1;
    try {
      // Thực hiện đăng ký
      await dispatch(addUser(data));
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đăng ký!");
    }
    reset();
  };

  return (
    <Wrapper>
      <MainContainer onSubmit={handleSubmit(onSubmitHandlerd)}>
        <WelcomeText>Đăng ký tài khoản</WelcomeText>
        <InputContainer>
          <StyledInput
            {...register("email")}
            placeholder="email"
            type="email"
            required
          />
          {/* <Error>{errors.email?.message}</Error> */}
        </InputContainer>
        <InputContainer>
          <StyledInput
            {...register("password")}
            placeholder="password"
            type={showPassword ? "text" : "password"}
            required
          />
          <DisplayEye
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle-button"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </DisplayEye>
          {/* <Error>{errors.password?.message}</Error> */}
        </InputContainer>
        <InputContainer>
          <StyledInput
            {...register("confirmPassword")}
            placeholder="confirm password"
            type={showPassword ? "text" : "password"}
            required
          />
          <DisplayEye
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle-button"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </DisplayEye>
        </InputContainer>
        <ButtonContainer>
          <StyledButton>Đăng ký</StyledButton>
        </ButtonContainer>
        <LoginWith>
          Bạn đã có tài khoản?<Link to={"/login"}>Đăng nhập</Link>
        </LoginWith>
      </MainContainer>
    </Wrapper>
  );
}

export default SignUp;
