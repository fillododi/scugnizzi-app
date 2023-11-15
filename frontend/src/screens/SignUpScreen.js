import styles from "../styles";

import {View, Button} from "react-native"

const SignUpScreen = ({route}) => {
    const {setUserToken} = route.params
    return <View style={styles.container}>
        <Button title="Registrati" onPress={()=>setUserToken('dummytoken')}/>
    </View>
}

export default SignUpScreen