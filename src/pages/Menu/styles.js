import styled from "styled-components";
import tw from 'twin.macro'


export const MenuContainer = styled.div` 
${tw`w-screen h-screen md:flex justify-center items-center`}
`

export const MenuGrid = styled.div`
grid-template-columns: 1fr 1fr;
gap:4;
${tw`flex flex-col items-center md:grid md:mt-1 mt-16`}`

export const MenuCard = styled.div`
overflow:hidden;
align-self:center;
width:max-content;
${tw`m-4 shadow-2xl mb-5 rounded-lg cursor-pointer rounded-lg`}`



export const MenuCardText = styled.h6` 
text-transform:capitalize;
${tw`text-center text-lg font-bold`}
`
