const {
  StyledWrapper,
  StyledBadge,
  StyledImage,
  StyledSpan,
  SpanConteiner,
} = require("./styles/avatar.styles");
const Avatar = ({ src, name, isActive, hasBadge }) => (
  <SpanConteiner>
    <p>{name}</p>
    <StyledWrapper isActive={isActive}>
      {hasBadge && <StyledBadge />}
      {src ? (
        <StyledImage alt={name} src={src} />
      ) : (
        <StyledSpan>{name.charAt(0).toUpperCase()}</StyledSpan>
      )}
    </StyledWrapper>
  </SpanConteiner>
);

module.exports = Avatar;
