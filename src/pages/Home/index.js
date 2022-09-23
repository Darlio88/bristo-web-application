import React from 'react'
import { useNavigate } from 'react-router-dom'

//importing images
import BackgroundImage from '../../assets/images/background.jpg'

//importing colors
import {colors} from '../../assets/bristoColor'

//importing styles
import { HomeContainer,
    HomeImageContainer,
    HomeContent,
    HomeBody,
    HomeMessage, 
    HomeTitle } from './styles'

//importing components
import Button from '../../components/Button'

const Home = () => {
  const navigate = useNavigate()
  return (
    <HomeContainer>
        <HomeImageContainer >
        <img src={BackgroundImage} alt='background' style={{width:"100%", display:'block'}} />
        </HomeImageContainer>
        <HomeContent>
          <HomeTitle>
            We Offer you
          </HomeTitle>
          <HomeBody>
          Fresh Ingredient, Tasty Meals & true Flavour
          </HomeBody>
          <HomeMessage>
          We have awesome recipes and the best chefs in town
          </HomeMessage>
          <Button  onClick={()=>navigate('/menu')}>
          BUY NOW
          </Button>
        </HomeContent>
    </HomeContainer>
  )
}

export default Home