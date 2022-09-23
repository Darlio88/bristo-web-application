
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

//reducers
import {addItem} from '../../features/CartSlice'

//importing styles
import { ItemsContainer, ItemsGrid, ItemCard, ItemCardText, ItemCardPrice } from './styles'

//Button
import Button from '../../components/Button'

//importing menu items
import { bristoMenu } from '../../assets/bristoMenu'
import { useParams } from 'react-router-dom'


const Index = () => {
  const dispatch = useDispatch()
   const cartList = useSelector(state=>state.cart.cartList)
    const [catergoryList, setCatergoryList] = useState([])
    const {catergory} = useParams()
    const catergoryFilter =bristoMenu.filter((item)=>item.catergory===catergory)
   
    useEffect(() => {
    
     setCatergoryList(catergoryFilter)
    }, [])


    
   const handleAddToCart = (item) =>{
  dispatch(addItem(item))
console.log(cartList)
   } 
  return (
    <ItemsContainer>
        <ItemsGrid>
         {catergoryList && (
          (catergoryList).map((item,idx)=>(<ItemCard key={idx}>
          <img src={item.imageUrl} alt={item.name} style={{display:'block', width:320,}}/>
          <ItemCardText>{item.name}</ItemCardText>
          <ItemCardPrice>Ug.Shs {item.price}</ItemCardPrice>
          <Button color='white' backgroundColor='#52796f' onClick={()=>handleAddToCart(item)}>Add Cart</Button>
          </ItemCard>))
         )}   
        </ItemsGrid>
    </ItemsContainer>
  )
}

export default Index