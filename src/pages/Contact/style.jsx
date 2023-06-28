import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:10rem;
`;

export const Svg = styled.svg`
  height: 23rem;
  margin-right: 4rem;
`;


export const Form = styled.form`
  min-width: 25rem;

  .title {
    font-family: 'Pacifico', cursive;
    color: #212529;
    font-size: 2.5rem;
  }

  .form-control {
    background-color: #f2f6f8;
    border-radius: 2rem;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);

    &.thick {
      height: 3.3rem;
      padding: .5rem 3.5rem;
    }

    &:focus {
      background-color: #f2f6f8;
      border: none;
      box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
    }
  }

  .message .form-control {
    padding: .3rem 1.8rem;
  }

  ::placeholder {
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: #838788;
    position: relative;
    left: 0;
  }

  input,
  textarea {
    font-family: 'Quicksand', sans-serif;
    color: #212529;
    font-size: 1.1rem;
    margin : 1rem 0;
  }

  .icon {
    color: #57565c;
    height: 1.3rem;
    position: absolute;
    left: 1.5rem;
    top: 1.1rem;
  }
`;

export const SubmitButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 3rem;
  background-image: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);
  background-size: 300% 100%;
  transition: all 0.3s ease-in-out;

  &:hover:enabled {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;