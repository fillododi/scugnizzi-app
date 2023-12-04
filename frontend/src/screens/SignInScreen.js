import {setUserToken} from '../store/actions'
import store from '../store'

import { styles } from "../styles";

import { View, Button } from "react-native"

const SignInScreen = () => {
    return <View style={styles.container}>
        <Button title="Accedi" onPress={() => store.dispatch(setUserToken('dummytoken'))} />
    </View>
}

export default SignInScreen