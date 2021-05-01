import styled from "@emotion/styled";

const Div = styled.div`
  width: 50vh;
  background: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  h1 {
    font-size: 150%;
    margin-bottom: 0rem;
  }
  p {
    font-size: 15px;
    width: 75%;
    text-align: center;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
module.exports = { Div };
