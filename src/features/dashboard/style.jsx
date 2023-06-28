import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  right: 0;
  height: 100vh;
  margin-top: 100px;
  z-index: 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ListItem = styled.div`
  height: 100%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ItemLeft = styled.div`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 10px 20px;
  &.primary {
    background: rgb(30, 191, 174);
  }

  &.success {
    background: rgb(48, 165, 255);
  }

  &.warning {
    background: rgb(255, 181, 62);
  }

  &.danger {
    background: rgb(249, 36, 63);
  }
`;

export const ItemRight = styled.div`
  width: 120px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Name = styled.p`
  color: #9fadbb;
  text-align: left;
  line-height: 1.6em;
  font-weight: 300;
  font-size: 1.1rem;
  justify-content: center;
  display: flex;
  margin: 0;
`;

export const Number = styled.p`
  color: #5f6468;
  font-size: 2em;
  line-height: 1.6em;
  font-weight: 300;
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const Mid = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 60vh;
`;

export const MidLeft = styled.div`
  box-shadow: 0px 10px 38px 18px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

export const MidRight = styled.div`
  width: 30%;
`;

export const RightContainer = styled.div`
  width: 90%;
  margin: auto;
  box-shadow: 0px 13px 61px -15px rgba(0, 0, 0, 0.2);
  height: 60vh;
  overflow-y : scroll; 
`;
export const UserItem = styled.div`
  padding: 10px 0;
  display: flex;
  box-shadow: 8px 8px 5px -8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#ccc' : 'transparent')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  padding-left: 10px;
  font-weight: bold;
`;
export const Bottom = styled.div`
  margin: 30px 0;
  width: 70%;
  padding-bottom: 70px;
  box-shadow: 0px 5px 17px -3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const BottomContainer = styled.div`
  padding: 10px;
`;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: rgb(35, 48, 68);
  color: white;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
  cursor: pointer;
`;
export const Title = styled.h3`
  font-size: 1rem;
`;

export const Text = styled.h2`
  padding: 10px;
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
`
export const Option = styled.option`
  width: 100%;
  padding: 10px;
`