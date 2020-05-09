import styled from "styled-components"
import device from "./device"

const StyledLink = styled.a`
  /*border-bottom: 1px solid;
	border-color: #DCDEE1;
	padding-bottom: 0;
	margin-bottom: 0;*/

  padding: 4px 8px;
  background: rgba(193, 193, 198, 0.1);
  border-radius: 4px;
  color: var(--secondary-color);
  font-size: 14px;

  &:hover {
    color: var(--primary-color);
    background: rgba(100, 102, 255, 0.1);
    cursor: pointer;
  }

  @media only screen and (min-width: 722px) {
    font-size: 18px;
  }
`

export default StyledLink
