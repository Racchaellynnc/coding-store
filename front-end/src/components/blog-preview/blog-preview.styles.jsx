import styled from 'styled-components';

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin: auto;
  width: 72%;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 95%;
   }
`;

export const BlogTitle =styled.h2`
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #2871a4;
	font-family: sans-serif;
	font-size: 27px;
  text-align: center;
  margin-bottom: 75px;
  margin-top: 100px;
`
export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
   }
`