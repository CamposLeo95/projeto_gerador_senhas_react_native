import {  Pressable, Text } from 'react-native'
import { useState } from 'react'

import { styles as S } from './ButtonPrimaryStyles'

import BatTextInput from '../TextInputBox/TextInputBox'

import generatePass from '../../services/passwordService'

import * as ClipBoard from 'expo-clipboard'

interface ButtonPrimaryProps {

}
export default function ButtonPrimary(props : ButtonPrimaryProps){
    const [pass, setPass] = useState("")

    const handleGeneratePass = () => {
        setPass(generatePass())
    }

    const handleCopyButton = () => {
        ClipBoard.setStringAsync(pass)
    }

    return(
        <>
            <BatTextInput pass={pass}/>
            <Pressable
                onPress={handleGeneratePass}
                style={S.button}
            >
                <Text style={S.text}>GENERATE</Text>
            </Pressable>
            <Pressable 
                onPress={handleCopyButton}
                style={S.button}
            >
                <Text style={S.text}>COPY</Text>
            </Pressable>
        </>
    )
}