import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
color:white;
background-color: #84a98c;
@media only screen and (max-width: 768px) {
    color:#2f3e46;
}
z-index:1;
${tw`flex items-center justify-between px-3 py-2 md:px-5 md:py-3`}
flex:1;
`
export const NavbarContainerLeft = styled.div`
${tw`flex items-center justify-between`}
flex:1;
`

export const NavbarContainerCenter = styled.div`
${tw`hidden md:flex items-center justify-between`}
flex:2;
`
export const NavbarContainerRight = styled.div`


${tw`flex items-center justify-center items-center`}
flex:1;
`
export const Badge = styled.div`
position:absolute;
top:0;
right:0;
height:16px;
color:white;
width:16px;
border-radius:8px;
font-size:10px;
background-color:#ef233c;
${tw`flex items-center justify-center p-1 cursor-pointer shadow-xl`}
`

export const NavLinks = styled.a`

&:hover{
    color:#354f52;
}
${tw`text-lg font-semibold cursor-pointer`}
`
export const CartContainer =styled.div`
&:hover{
    color:#354f52;
}
${tw`relative cursor-pointer`}
`

export const NavBurger = styled.div`
&:hover{
    opacity:0.6;
}

background-color:#84a98c;
border-radius:50%;
${tw`md:hidden text-2xl font-bold ml-3 p-1 `}
`

export const MobileNav = styled.div`
flex:1;
align-items:center;
${tw`w-screen md:hidden flex flex-col h-screen justify-around transition-all ease-linear`}
`