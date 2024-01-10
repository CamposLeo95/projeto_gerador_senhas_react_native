import {TextInput } from 'react-native'

import { styles as S } from './TextInputBoxStyles'

interface TextInputBoxProps {
    pass: string
}

export default function TextInputBox({pass} : TextInputBoxProps){
    return(
            <TextInput 
                style={S.input} 
                placeholder='Pass'
                placeholderTextColor="#fff"
                value={pass}
            />
    )
}