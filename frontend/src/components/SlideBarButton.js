import { Pressable, Text, View, Image } from "react-native";
import { sHeight } from "../styles";
import { map_pin } from "../images";
import Icon from 'react-native-vector-icons/Ionicons';



const SlideBarButton = ({ onPress, text, icon = "person-circle-outline" }) => {
    return (
        <Pressable onPress={onPress} style={{ width: "100%", height: (1 / 16) * sHeight }}>
            <View style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                display: "flex",
                paddingLeft: "2%",
                paddingRight: "1%",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Icon name={icon} color="#000" size={(1 / 16) * sHeight} />
                    <Text>{text}</Text>
                </View>
                <Icon name="chevron-forward-outline" color="#000" size={(1 / 16) * sHeight} />
            </View>
        </Pressable >
    );
}

export default SlideBarButton;