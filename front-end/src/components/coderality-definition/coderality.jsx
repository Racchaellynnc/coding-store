import React from 'react';
import {
    CoderalityContainer,
    CoderalityTitle,
    CoderalityDef,
    CoderalityItalicTitle,
    CoderalityTitleContainer,
    CoderalityExample
} from './coderality.styles';

const CoderalityDefinition = () => (
    <div className='coderality'>
        <CoderalityContainer>
            <CoderalityTitleContainer>
                    <CoderalityTitle>
                        Co·der·al·i·ty 
                    </CoderalityTitle>
                    <CoderalityItalicTitle>
                        k/ōh/de(r)/al ĭ-tē
                    </CoderalityItalicTitle>
            </CoderalityTitleContainer> 
            <CoderalityDef>
                1. (noun) to possess the quality of being a coder; quality of coding<br></br>
                2. (noun) to be logically consistent in writing code<br></br>
                3. (noun) to have passion for writing code <br></br>          
            </CoderalityDef>
            <CoderalityExample>
                Danny wrote 1000 lines of code last until 2:00 AM. I think he finally has coderality.
            </CoderalityExample>
        </CoderalityContainer>
    </div>
  );
  
  export default CoderalityDefinition;