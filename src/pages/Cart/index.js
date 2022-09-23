import React from 'react'
import {CartTitle, CartItemContainer, CartActions, CartImageContainer, Cart, CartRight} from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
//icons
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

import {addItem,reduceItem, removeItem} from '../../features/CartSlice'
//colors
import {colors} from '../../assets/bristoColor'
const Index = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

         const cartList = useSelector(state=>state.cart.cartList)
         const cartCount = useSelector(state=>state.cart.itemCount)
         const cartSet = new Set(cartList)
         const uniqueCartList = Array.from(cartSet)

    const handleReduceFromCart = (item) =>{
        dispatch(reduceItem(item))
        console.log(cartList)
        }

    const handleAddToCart = (item) =>{
        dispatch(addItem(item))
        console.log(cartList)
        }
    const handleRemoveFromCart = (item) =>{
            dispatch(removeItem(item))
            console.log(cartList)
        }

 
    const totalCost=uniqueCartList.reduce((prev, curr)=>{
         const unitAmount= curr.price* cartCount[curr.name]
        return prev + unitAmount
       }, 0)
    
     if(cartList.length<1 || cartList.length===0){
        return <Cart className='w-screen h-screen flex-col space-y-5 flex justify-center items-center '>
            <CartTitle style={{color:colors.black}}>MY CART</CartTitle>
            <div>
                <h4>your cart is empty</h4>
            </div>
            <Button onClick={()=>navigate('/menu')} primary={colors.white} backgroundColor={colors.secondary}>ADD ITEMS</Button>
        </Cart>
     }


  return (
    <Cart className=' md:flex-col space-y-5 md:flex  items-center' >
        <CartTitle style={{color:colors.black}}>MY CART</CartTitle>
        {uniqueCartList.map((item, idx) => (
        <CartItemContainer key={idx}>
            {/* left */}
            <CartImageContainer >
                <img src={item.imageUrl} alt='item' style={{display:'block', width:320,}} />
            </CartImageContainer>
            {/* right */}
            <CartRight>
                <div>
                  <span className='flex space-x-2'>
                    <h6 style={{color:colors.black}} className='text-lg  font-light'>ITEM:</h6>
                    <h6 style={{color:colors.black}} className='text-lg capitalize font-bold'>{item.name}</h6></span>
                <h6 style={{color:colors.successLight}}>Ug.Shs {item.price}</h6>
                </div>
                <div className='flex space-x-4'>
                    {/* add and subtracter */}
                    <div className='flex rounded-md overflow-hidden'>
                        <CartActions 
                        onClick={()=>handleReduceFromCart(item)}
                        style={{backgroundColor:colors.successLight}}><AiOutlineMinus /></CartActions>
                        <CartActions 
                        style={{backgroundColor:colors.black}}>{cartCount[item.name]}</CartActions>
                        <CartActions 
                        onClick={()=>handleAddToCart(item)}
                        style={{backgroundColor:colors.successLight}}><AiOutlinePlus /></CartActions>
                    </div>
                    <Button onClick={()=>handleRemoveFromCart(item)} primary={colors.white} backgroundColor={colors.secondary}>REMOVE</Button>
                </div>
            </CartRight>
        </CartItemContainer>))}
        <div className='flex items-center mt-4 space-x-2'>
            <h6 style={{color:colors.black}} className='text-lg  font-extrabold'>Total Cost:</h6>
            <h6 style={{color:colors.successLight}} className='text-lg  font-bold'>Ug.Shs {totalCost}</h6>
        </div>
        <div>
            <Button backgroundColor={colors.success}>PURCHASE NOW</Button>
            <Button 
            onClick={()=>navigate('/menu')}
            primary={colors.white} backgroundColor={colors.secondary}>ADD MORE ITEMS</Button>
        </div>
    </Cart>
  )
}

export default Index