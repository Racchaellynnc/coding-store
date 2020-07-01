import styled from 'styled-components';

export const CoderalityContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (max-width: 800px) {
       margin: auto;
       width: 95%;
      }
`;
export const CoderalityTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;

`;
export const CoderalityTitle = styled.div`
    margin: auto;
    justify-content: flex-end;
    padding: 10px;
    color: #555;
    font-size: 30px;
    font-weight: 500;
    @media screen and (max-width: 800px) {
       font-size: 22px
       font-weight: 500;
       }
`;
export const CoderalityItalicTitle = styled.div`
    font-style: italic;
    padding: 10px;
    justify-content: flex-start;
    margin: auto;
    color: #555;
    font-size: 30px;
    font-weight: 300;
    @media screen and (max-width: 800px) {
        font-size: 22px
        font-weight: 300;
        }
`;
export const CoderalityDef = styled.div`
    padding: 10px;
    margin: auto;
    color: black;
    font-size: 20px;
    padding-bottom: 30px;
`;
export const CoderalityExample = styled.div`
    padding: 10px;
    font-style: italic;
    margin: auto;
    color: black;
    font-size: 16px;
    padding-bottom: 90px;
`;
