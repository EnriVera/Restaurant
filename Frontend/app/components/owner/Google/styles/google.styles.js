import styled from "@emotion/styled";

const DivGoogle = styled.div`
  align-items: center;
  background-color: rgb(45, 55, 72);
  border-radius: 5px;
  display: flex;
  padding: 15px 0 15px 0;
  justify-content: center;
  width: 51%;
  cursor: pointer;
  margin-bottom: 3rem;
  @media (max-width: 414px) {
    width: 56%;
  }
`;

const ImgGoogle = styled.img`
  height: 20px;
  object-fit: cover;
  width: 20px;
  @media (max-width: 414px) {
    height: 14px;
    width: 14px;
  }
`;

const SpanGoogle = styled.span`
  letter-spacing: 0px;
  margin-left: 11px;
  font-family: Nunito;
  color: white;
  font-size: 16px;
  @media (max-width: 414px) {
    font-size: 10px;
  }
`;

module.exports = { DivGoogle, ImgGoogle, SpanGoogle };
