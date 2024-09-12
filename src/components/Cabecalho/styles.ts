import styled from 'styled-components'

export const Cabecalho = styled.h1`
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  text-align: center;
  padding: 24px 0;
`
