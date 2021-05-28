import styled from "@emotion/styled";
import { css } from "@emotion/css";

const size = "30px";

const activeStyles = css`
  background: #262526;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 50%;
    background: linear-gradient(45deg, #21fce2, #0b8fe0);
  }
`;

const StyledWrapper = styled.span`
  border-radius: 50%;

  ${(p) => p.isActive && activeStyles};
`;

const avatarStyles = css`
  position: absolute;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background: #21fce2;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #21fce2;
  object-fit: cover;
`;

const StyledSpan = styled.span`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background: #21fce2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
`;

const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: -6px;
  right: -2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 4px solid #262526;
  background: #21fc6b;
`;

const SpanConteiner = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    margin-right: 0.5rem;
    font-family: "Montserrat";
    font-size: 14px;
    color: #5e5873;
  }
`;

module.exports = {
  StyledWrapper,
  StyledBadge,
  StyledImage,
  StyledSpan,
  SpanConteiner,
};
