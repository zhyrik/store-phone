import styled from 'styled-components'

// main button default blue. With props yellow
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => (props.yellow ? "var(--mainYellow)": "var(--lightBlue)")};
color: ${props => (props.yellow ? "var(--mainYellow)": "var(--lightBlue)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ;
&:hover{
  background: ${props => (props.yellow ? "var(--mainYellow)": "var(--lightBlue)")};
  color: var(--mainBlue);
}
&:focus{
  outline:none;
}`
