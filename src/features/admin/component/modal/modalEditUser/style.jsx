import styled from "styled-components";


export const ModalTitle = styled.h2`
  color: red;
  margin: 0;
  padding: 10px;
`;

export const ModalForm = styled.form`
  width: 450px;
  padding: 0 30px;
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

export const ModalInput = styled.input`
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

export const ModalButtonAccept = styled.button`
  background-color: rgb(35, 48, 68);
  padding: 5px 10px;
  margin: 10px 0;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  color: white;
  &:hover {
    background-color: rgb(35, 48, 80);
    transform: scale(1.05);
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
