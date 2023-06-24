import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 15rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Coleft = styled.div`
  @media (min-width: 768px) and (max-width: 991px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const Colright = styled.div`
  @media (min-width: 768px) and (max-width: 991px) {
    flex: 0 0 75%;
    max-width: 75%;
  }

  @media (min-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;

export const Imge = styled.img`
  width: 100%;
  height: 340px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`;

export const Name = styled.h3`
  font-size: 3rem;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
`;

export const SocialIcon = styled.i`
  margin-left: 1rem;
`;

export const Description = styled.div`
  padding: 1rem;
  background-color: #000;
  color: #fff;

  h6 {
    font-size: 1.2rem;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
`;

export const SkillBlock = styled.div`
  text-align: center;
  width: 100%;
  padding: 0.8rem;

  &.primary {
    background-color: #007bff;
  }

  &.success {
    background-color: #28a745;
  }

  &.warning {
    background-color: #ffc107;
  }

  &.danger {
    background-color: #dc3545;
  }
`;

export const Textprofile = styled.h6`
  margin: 0;
  padding: 1rem;
`;
export const ModalAvatar = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const ModalImage = styled.img`
  width: 100%;
  height: 340px;
`;

export const ModalAddAvatar = styled.div`
  margin-left: 30px;
`;

export const ModLabel = styled.label`
  position: absolute;
  width: 54px;
  height: 54px;
  bottom: -18px;
  right: -18px;
  background: rgb(85, 105, 255);
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const ModalInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
  padding: 12.5px 14px;
  border-radius: 3px;
`;

export const ModalForm = styled.form`
  padding: 0 30px;
  height: 80vh;
  padding-bottom: 10rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 5px;
`;

export const ModalLabel = styled.label`
  font-size: 1.1rem;
  padding: 1px;
  font-weight: 500;
`;

export const ModalButtonAccept = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.75;
  min-width: 64px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(85, 105, 255);
  box-shadow: none;
  font-weight: bold;
  text-transform: none;
  padding: 8px 20px;
  &.danger {
    background-color: #dc3545;
  }
`;

export const ModalSelect = styled.select`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 100%;
  height: 1.5rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  padding: 3px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const ModalOption = styled.option`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 100%;
  height: 1.5rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  padding: 3px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const ControlerButton = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  border-top: 1px solid #ccc;
  justify-content: space-between;
  flex: 0 0 auto;
  padding: 15px;
`;

export const ModalControler = styled.div`
  display: flex;
  justify-content: center;
  margin-left:3rem;
`;
