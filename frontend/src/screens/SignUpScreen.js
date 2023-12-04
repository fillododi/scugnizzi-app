import {useDispatch} from 'react-redux'
import {setUserToken} from '../store/authSlice'

import { styles } from "../styles";

import { View, Button } from "react-native"

const SignUpScreen = () => {
    const dispatch = useDispatch()
    return <View style={styles.container}>
        <Button title="Registrati" onPress={() => dispatch(setUserToken('dummytoken'))} />
    </View>
}

export default SignUpScreen