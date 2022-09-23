import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`

opacity:0.9;

@media only screen and (min-width: 100px) {
    color:${props=>props.color?props.color:'white'};
    background-color:${props=>props.backgroundColor};

&:hover{
    color:${props=>props.backgroundColor?props.backgroundColor:'white'};
    background-color:${props=>props.color?props.color:'black'}; 
    border-color:${props=>props.backgroundColor};
    transition: scale(1.1);
}}
${tw`md:px-5 md:py-2 px-3 py-1 border-2 rounded-lg shadow-lg font-bold transition-all ease-in-out`}
`

export default Button