import styled, { keyframes } from 'styled-components';
import BaseAnimation from './base-animations';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`; 

const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`; 

export default FadeIn;