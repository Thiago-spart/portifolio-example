import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	background: var(--light);
	color: var(--dark);
	width: 100%;
`

export const HeaderLogo = styled.div`
	border: 1px solid var(--dark);
	border-radius: 50%; 
	color: var(--dark);
	padding: 0.5rem;
	margin: 1rem;
`

export const NavBar = styled.nav`
	display: grid;
	margin-left: auto;
	grid-template-columns: repeat(4, 1fr);
`

export const NavLink = styled.button`
	border-right: 2px solid var(--dark);
  padding: 1rem 3rem;
  background: var(--light);
	cursor: pointer;

	&:first-child {
		border-left: 2px solid var(--dark);
	}

	&:last-child {
		border-right: none;
	}
`