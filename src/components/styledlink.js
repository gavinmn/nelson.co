import styled from "styled-components"

const StyledLink = styled.a`
  color: var(--wash-secondary);
  font-size: 14px;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
    cursor: pointer;
  }

  @media only screen and (min-width: 722px) {
    font-size: 18px;
  }
`

export default StyledLink
