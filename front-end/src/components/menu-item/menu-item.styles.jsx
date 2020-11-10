import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')}
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	background-color: #7cff7ca1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			display: flex;
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
		margin-right: 7.5px;
	}
	&:last-child {
		margin-left: 7.5px;
	}
	@media screen and (max-width: 1000px) {
		height: 150px;
		width: 50%;
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-size: auto;
	background-position: center; 
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	@media screen and (max-width: 1000px) {
		display: flex;
	}
`;

export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
`;

export const ContentTitle = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 18px;
	text-align: center;
	color: #395B7A;
	@media screen and (max-width: 1000px) {
		font-size: 12px;
		text-align: center;
	}
`;

export const ContentSubtitle = styled.span`
	font-weight: 300;
	color: #333;
	font-size: 16px;
	@media screen and (max-width: 1000px) {
		font-size: 10px;
	}
`;