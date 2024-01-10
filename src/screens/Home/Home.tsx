import { View, Text } from 'react-native'
import { styles as S } from './HomeStyles'

import Logo from '../../components/Logo/Logo'
import { StatusBar } from 'expo-status-bar'
import BatButton from '../../components/ButtonPrimary/ButtonPrimary'

interface HomeProps {

}

export default function Home(props : HomeProps){
    return(
        <View style={S.appContainer}>
            <View style={S.logoContainer}>
                <Logo/>
            </View>
            <View style={S.inputContainer}>
                <BatButton />
            </View>

            <StatusBar style='light'/>
        </View>
    )
}

