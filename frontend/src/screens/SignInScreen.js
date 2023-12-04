import {useDispatch} from 'react-redux'
import {setUserToken} from '../store/authSlice'

import { styles } from "../styles";

import { View, Button } from "react-native"

const SignInScreen = () => {
    const dispatch = useDispatch()
    return <View style={styles.container}>
        <Button title="Accedi" onPress={() => dispatch(setUserToken('dummytoken'))} />
    </View>
}

export default SignInScreen