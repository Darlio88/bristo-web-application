import React from 'react'
//styles
import { LogoContainer,LogoText } from './styles'
//icons
import { IoRestaurantOutline } from "react-icons/io5";

//importing colors



const index = () => {
  return (
    <LogoContainer >
        <IoRestaurantOutline />
        <LogoText>
            Bristo
        </LogoText>
    </LogoContainer>
  )
}

export default index