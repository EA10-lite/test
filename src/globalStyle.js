import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{  
     box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif";
} 
`; 

export   const Container = styled.div`
width: 100%;
max-width: 130px;
margin-right: auto;
margin-left: auto;
padding:0 50px;

@media screen and (max-width: 960px){
    padding: 0 30px;
}
`;

export   const MainHeading = styled.h1`
font-size: clamp(2.3rem, 6vw, 4.5rem);
margin-bottom: 2rem;
color: ${({inverse}) =>(inverse ? '$403ae3': '#fff' )};
width: 100%;
letter-spacing: 4px;
text-algin: center;
`;
export   const Heading = styled.h2`
font-size: clamp(1.3rem, 13vw, 3.1rem);
margin: ${({margin}) =>  (margin ? margin: '')};
margin-bottom: ${({mb}) => (mb ? mb: '')};
margin-top: ${({mt}) => (mt ? mt : '')};
color: ${({inverse}) => (inverse? '$403ae3': '#fff')};
letter-spacing: 0.4rem;
line-height: 1.06;
text-align: center;
width: ${({width}) => (width ? width: '100%')};

`;
export   const TextWrapper = styled.span``
export   const Section = styled.section``
export   const Row = styled.div``
export   const Column = styled.div``

export   const Button = styled.button` 
border-radius: 4px;
background: none;
white-space: nowrap;
padding: 10 20px;
font-size: 16px;
color: #fff;
outline: none;
border:2px solid #fff;
cursor: pointer;
overflow:hidden;
position: relative;

&:before{
    background: #fff;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
}

&:hover:before {
    height: 500%;
}


&hover{
    color: black; 
}
`;

export default GlobalStyle;
