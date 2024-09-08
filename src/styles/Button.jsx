import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  // background-color: rgb(98 84 243);
  background-color: #9333ea;
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
  text-align: center;
  box-shadow: 4px 0 10px rgb(63, 1, 63);
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: 3px 0 10px rgb(63, 1, 63);

    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
