import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  ButtonContainer,
  DisplayEye,
  Error,
  ForgotPassword,
  IconsContainer,
  InputContainer,
  LoginWith,
  MainContainer,
  StyledButton,
  StyledIcon,
  StyledInput,
  WelcomeText,
  Wrapper,
} from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { clearErrorMessage, login } from "../authSlice";
import { useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const dispatch = useDispatch();
  const redirectHome = useNavigate();
  const { errorMessage, successMessage } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRoleRedirect = (role) => {
    if (role === "1") {
      setIsRedirecting(true);
      redirectHome("/admin");
    } else if (role === "2") {
      setIsRedirecting(true);
      redirectHome("/");
    }
  };

  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(clearErrorMessage());
    setIsRedirecting(false);
    dispatch(login({ data, callback: handleRoleRedirect }));

    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  if (isRedirecting) {
    return <div>Loading...</div>; // Hiển thị thông báo chờ khi đang chuyển hướng
  };


  return (
    <Wrapper>
      <MainContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <WelcomeText>Welcome</WelcomeText>
        {/* Hiển thị thông báo lỗi */}
        <Error> </Error> {errorMessage && <Error>{errorMessage}</Error>}
        {/* Hiển thị thông báo thành công */}
        {successMessage && <Error>{successMessage}</Error>}
        <InputContainer>
          <StyledInput
            {...register("email")}
            placeholder="email"
            type="email"
            required
          />
          <Error>{errors.email?.message}</Error>
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
          <Error>{errors.password?.message}</Error>
        </InputContainer>
        <ButtonContainer>
          <StyledButton>Đăng nhập</StyledButton>
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <IconsContainer>
          <StyledIcon>
            <FaFacebookF color="blue" />
          </StyledIcon>
          <StyledIcon>
            <FaInstagram color="pink" />
          </StyledIcon>
          <StyledIcon>
            <FaTwitter color="rgb(29, 155, 240)" />
          </StyledIcon>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    </Wrapper>
  );
}

export default Login;
