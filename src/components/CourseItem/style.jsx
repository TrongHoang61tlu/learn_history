import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0.0625rem 0.125rem #00000026, 0 0.0625rem 0.25rem #00000026;
  outline: none;
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  margin-top: 20px;
  cursor: pointer;
`;

export const Top = styled.div`
  max-height: 140px;
  position: relative;
`;

export const TopImg = styled.img`
  height: 104px;
  object-fit: cover;
  object-position: top center;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
  max-height: inherit;
  width: 100%;
`;

export const SubTopImg = styled.img`
  background-color: #fff;
  border-radius: 0.25rem;
  bottom: -1.5rem;
  box-shadow: 0 2px 8px 0 #00000026, 0 2px 4px 0 #00000026;
  inset-inline-start: 1.5rem;
  position: absolute;
  width: 7.25rem;
`;

export const Mid = styled.div`
  padding: 2.5rem 1.5rem;
`;
export const MidTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 24px;
  display: block;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MidText = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0.25rem;
`;

export const Bottom = styled.div`
  flex-grow: 1;
  padding: 1.5rem;
  text-align: start;
`;
export const ButtonCourse = styled.span`
  background-color: #e1dddb;
  color: #000;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.5rem 0.5rem;
  text-align: center;
  transition: none;
  vertical-align: initial;
  white-space: nowrap;
  cursor: pointer;
`;
