import { View, Text, Image } from "react-native";

import { styles as S } from './LogoStyles'

import cadeado from '../../../assets/pictures/cadeado.png'

interface LogoProps {

}

export default function Logo(props : LogoProps){
    return(
        <>  
            <Text  style={S.title}>Gerador de Senhas</Text>
            <Image 
                source={cadeado}
                style={{
                    resizeMode:'contain',
                    height: 150
                }}
            />
        </>
    )
}