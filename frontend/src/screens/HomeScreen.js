import { Button, View } from "react-native";
import styles from "../styles";
import { ClickabgeRestaurant } from "../components/clickableRestaurant";

const HomeScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <ClickabgeRestaurant img_path={require('/assets/icon.png')} location="LOCATION 1" />

            <ClickabgeRestaurant img_path={require('/assets/icon.png')} location="LOCATION 2" />

            <ClickabgeRestaurant img_path={require('/assets/icon.png')} location="LOCATION 3" />

        </View>
    );
}



export default HomeScreen