import { styles } from "../styles";

import { View, Button } from "react-native"

const SignInScreen = ({ route }) => {
    const { setUserToken } = route.params
    return <View style={styles.container}>
        <Button title="Accedi" onPress={() => setUserToken('dummytoken')} />
    </View>
}

export default SignInScreen