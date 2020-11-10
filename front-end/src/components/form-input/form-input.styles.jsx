import styled from 'styled-components';

export const FormGroup = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const FormInputs = styled.input`
    background: none;
    background-color: white;
    color: gray;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 20px;
    border-bottom: 1px solid gray;
    margin: 25px -7px;
        &:focus {
            outline: none;
        }
        &:focus ~ .form-input-label {
            @include shrinkLabel();
        }
    }
    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const FormLabel = styled.label`
    color: gray;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    	&.shrink {
      		@include shrinkLabel();
    	}
  	}
`;

