import styled from "@emotion/styled";

const SectionPassword = styled.section`
  width: 50vh;
  background: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  article {
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > div > h1 {
      margin: 1rem 0 0 3rem;
    }

    & > form {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 414px) {
    article > div {
      h1 {
        font-size: 130%;
        margin: 1rem 0 0 2rem;
      }

      p {
        font-size: 10px;
      }
    }
  }

  @media (max-width: 370px) {
    article > div {
      h1 {
        font-size: 15px;
        margin: 1rem 0 0 2rem;
      }

      p {
        font-size: 10px;
      }
    }
  }
`;

module.exports = { SectionPassword };
