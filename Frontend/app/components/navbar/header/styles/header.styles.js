import styled from "@emotion/styled";

const Header = styled.header`
  width: 90%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  margin-top: 21px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  font-family: Montserrat;
`;

const DivRestau = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  p {
    font-size: 18px;
    font-weight: bold;
    color: #b9b9c3;
  }
`;

const DivUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 1rem;
  cursor: pointer;
  p {
    margin-right: .5rem;
    font-size: 15px;
    font-weight: bold;
    color: #5E5873;
  }
`;

module.exports = { Header, DivRestau, DivUser };
