import styles from "../styles";
import { Button, View } from 'react-native'

const DrawerMenu = ({navigation, loggedIn, setUserToken}) => {
    return <View style={styles.container}>
        <Button title="Home" onPress={()=>navigation.navigate("Home")}/>
        {loggedIn?
            <View style={styles.container}>
                <Button title="Profilo" onPress={()=>navigation.navigate("Profile")}/>
                <Button title="Esci" onPress={()=>setUserToken(null)}/>
            </View>
            :
            <View style={styles.container}>
                <Button title="Accedi" onPress={()=>navigation.navigate("SignIn")}/>
                <Button title="Registrati" onPress={()=>navigation.navigate("SignUp")}/>
            </View>
        }
    </View>
}

export default DrawerMenu