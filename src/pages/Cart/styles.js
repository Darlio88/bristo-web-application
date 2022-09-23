import styled from "styled-components";
import tw from 'twin.macro';

export const Cart = styled.div`
${tw`md:px-10 px-5 my-12 md:my-16`}
  `


export const CartItemContainer = styled.div`
  ${tw`md:flex justify-start pt-10 space-x-10`}
  `
export const CartRight = styled.div`
${tw`md:flex flex-col justify-between mt-3 space-y-1`}`


export const CartTitle = styled.h1`
${tw`text-xl font-bold `}
  `

export const CartActions = styled.div`
width:40px; 
${tw` flex text-white justify-center items-center cursor-pointer`}  
`
  
export const CartImageContainer = styled.div`
  ${tw`rounded-md overflow-hidden`}`