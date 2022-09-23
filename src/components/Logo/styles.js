import styled from "styled-components";
import tw from 'twin.macro'

export const LogoContainer = styled.div`
color:${props => props.color};
${tw`flex items-center space-x-2 text-2xl font-bold`}
`

export const LogoText = styled.div`
${tw`text-2xl font-bold`}
`