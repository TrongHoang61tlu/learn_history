import styled from "styled-components";

export const ModalTitle = styled.h2`
  margin: 0px;
  font-size: 15px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-weight: 500;
  line-height: 1.6;
  flex: 0 0 auto;
  padding: 27px;
`;

export const ModalForm = styled.form`
  border-top: 1px solid #ccc;
`;

export const ModalControler = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 40px;
`;

export const ModalLeft = styled.div`
  padding-left: 27px;
  flex-basis: 58.3333%;
  flex-grow: 0;
  max-width: 58.3333%;
  padding-top: 27px;
`;
export const ModalRight = styled.div`
  padding-left: 60px;
  padding-top: 27px;
  lex-basis: 41.6667%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 41.6667%;
`;

export const ModalContent = styled.div`
  flex-basis: 100%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 100%;
  padding-top: 27px;
  padding-left: 27px;
`;

export const ModalLabel = styled.label`
  font-size: 1.1rem;
  padding: 1px;
  font-weight: 500;
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

export const ControlerButton = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  border-top: 1px solid #ccc;
  justify-content: flex-end;
  flex: 0 0 auto;
  padding: 15px;
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

export const ModalAvatar = styled.div`
  width: 144px;
  height: 144px;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: red;
  text-indent: 10000px;
  border: 1px solid #ccc;
  border-radius: 1rem;
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
