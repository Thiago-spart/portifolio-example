import styled from "styled-components";

export const SliderContainer = styled.section`

	width: 50%;
	height: 500px;

	.swipeContainer {
		.swiperSlide {
			text-align: center;
			font-size: 18px;
			background: var(--dark);
	
			/* Center slide text vertically */
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
	
		.swipeSlide img {
			height: 50rem;
	
		}
	}


`
