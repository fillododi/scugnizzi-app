import store from '../store'
import {setUserToken} from '../store/actions'

import { styles } from "../styles";

import { View, Button } from "react-native"

const SignUpScreen = () => {
    return <View style={styles.container}>
        <Button title="Registrati" onPress={() => store.dispatch(setUserToken('dummytoken'))} />
    </View>
}

export default SignUpScreen