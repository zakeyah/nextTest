import Link from "next/link"
import NavStyled from "./styles/Nav.styled"
export default function Nav() {
    return (
        <NavStyled>
       <Link href="/">Home</Link>
        <Link href="/user">User</Link>
        <Link href="/test">Test</Link>
        <Link href="/about">About</Link>
      </NavStyled>
    )
  }
  