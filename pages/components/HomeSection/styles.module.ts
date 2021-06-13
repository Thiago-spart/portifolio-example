import styled from "styled-components";

export const HomeContainer = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
`

export const HomeImg = styled.img`
	width: 100%;
	object-fit: contain;
	filter: grayscale(80%) blur(2px);
`

export const NameContainer = styled.div`
	position: absolute;
	left: 10px;
	bottom: 20px;
`

export const Title = styled.h2`
	color: var(--secondary-main);
	font-size: 8rem;
	margin-bottom: 1rem;
`

export const SubTitle = styled.p`
	color: var(--secondary-dark);
	font-size: 2rem;
  margin-left: 1rem;
  font-weight: 600;
`