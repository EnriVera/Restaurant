import styled from "@emotion/styled";

const SectionLoginImages = styled.section`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 5px;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const ArticleImages = styled.article`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ArticleLogin = styled.article`
  width: 50%;
  background: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const SpanTitle = styled.span`
  P {
    font-size: 16px;
    color: #2d3748;
  }
  h1 {
    font-size: 30px;
    color: #1a202c;
  }
`;

const DivMessage = styled.div`
  p > a {
    color: rgb(93, 113, 223);
    cursor: pointer;
  }

  @media (max-width: 414px) {
    p {
      font-size: 10px;
    }
  }
`;

module.exports = {
  SectionLoginImages,
  ArticleImages,
  ArticleLogin,
  SpanTitle,
  DivMessage,
};
