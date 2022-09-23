import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//importing styles
import {NavbarContainerLeft,
    MobileNav, 
    NavbarContainerCenter,
    NavbarContainerRight, 
    NavbarContainer,
    Badge,
    CartContainer,
    NavBurger,
    NavLinks} from './styles'

//importing components
import Logo from '../Logo'

//icons
import { IoCartOutline } from "react-icons/io5";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Index = () => {
    const cartCount = useSelector(state=>state.cart.itemCount)
    console.log(cartCount)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    



    if(open){
        return (
            <MobileNav >
                <NavBurger onClick={()=>setOpen(!open)}>
                <HiChevronRight  />
                </NavBurger>
                <NavLinks>Home</NavLinks>
                <NavLinks onClick={()=>navigate('/menu')}>Menu</NavLinks>
                <NavLinks>Favorites</NavLinks>
                <NavLinks>Blog</NavLinks>
            </MobileNav>
        )
    }

  return (
   <NavbarContainer>
    <NavbarContainerLeft>
    <Logo color='white'/>
    </NavbarContainerLeft>
    <NavbarContainerCenter>
        <NavLinks>Home</NavLinks>
        <NavLinks onClick={()=>navigate('/menu')}>Menu</NavLinks>
        <NavLinks>Favorites</NavLinks>
        <NavLinks>Blog</NavLinks>
    </NavbarContainerCenter>
    <NavbarContainerRight>
        <CartContainer onClick={()=>navigate('/cart')}>
        <IoCartOutline size={32}/>
        <Badge>{Object.values(cartCount).filter((k)=>k>0).length}</Badge>
        </CartContainer>
    </NavbarContainerRight>
    <NavBurger onClick={()=>setOpen(!open)}>
        <HiChevronLeft />
    </NavBurger>
   </NavbarContainer>
  )
}

export default Index