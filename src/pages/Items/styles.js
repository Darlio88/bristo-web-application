import styled from "styled-components";
import tw from 'twin.macro'


export const ItemsContainer = styled.div` 

${tw`w-screen h-screen md:flex justify-center items-center pt-10  md:pt-36`}
`

export const ItemsGrid = styled.div`
grid-template-columns: 1fr 1fr 1fr 1fr;
gap:4;
${tw`flex flex-col items-center md:grid  md:mt-24`}`

export const ItemCard = styled.div`
overflow:hidden;
width:240px;
${tw`m-4 flex flex-col justify-center space-y-2 shadow-xl mb-5 pb-3 rounded-lg cursor-pointer rounded-lg`}`



export const ItemCardText = styled.h6` 
text-transform:capitalize;
${tw`text-center text-lg font-bold`}
`

export const ItemCardPrice = styled.h6`

${tw`text-center text-base font-light`}`