
import React from 'react'

import { MenuContainer, MenuGrid, MenuCard, MenuCardText } from './styles'

//dummy catergories
import {catergories} from '../../assets/catergories'
import { Navigate, useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  return (
   <MenuContainer>
    <MenuGrid>
    { catergories.length>0 &&( catergories.map((catergory, idx)=>(<MenuCard onClick={()=>navigate(`/menu/${catergory.name}`)} key={idx}>
      <img src={catergory.imageUrl} style={{display:'block', width:320}} alt={catergory.name} />
      <MenuCardText>{catergory.name}</MenuCardText>
    </MenuCard>))
      )}
    </MenuGrid>
   </MenuContainer>
  )
}

export default Index