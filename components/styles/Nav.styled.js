import styled from "styled-components";


const navStyled = styled.div`
background-color: #333;
overflow: hidden;

& a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  
  & a:hover {
    background-color: #ddd;
    color: black;
  }
  
  
  & a.active {
    background-color: #04AA6D;
    color: white;
  }
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     background-color: red;
//   }
`
export default navStyled