import styled from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.div`

${tw`relative w-screen h-screen flex justify-center items-center`}
` 

export  const HomeImageContainer = styled.div`
 opacity:0.8; 
 bottom:0;
 top:0;
 right:0;
left:0;

${tw` px-2 md:px-4 absolute hidden md:flex justify-center items-center`}
`


export const HomeContent = styled.div` 
color:white;
@media only screen and (max-width:768px){
    color:#2f3e46;
}
z-index:1;
${tw`flex flex-col items-center space-y-5`}
`

export const HomeTitle = styled.h6`
font-family: 'Caveat', cursive;
opacity:0.9;

${tw`text-xl md:text-2xl font-semibold `}
`

export const HomeBody = styled.h2`
font-family: 'Kanit', sans-serif;
opacity:0.9;
${tw`md:text-3xl font-bold`}
`

export const HomeMessage = styled.h2`
font-family: 'Kanit', sans-serif;
opacity:0.9;

${tw`mx-3 font-normal text-center`}
`
