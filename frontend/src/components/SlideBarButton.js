import { Pressable, Text, View, Image } from "react-native";

const SlideBarButton = ({ onPress, text, image }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={{
                borderColor: "#000",
                borderTopWidth: 3,
                borderBottomWidth: 3,
                width: "100%"
            }}>
                <Text>{text}</Text>
                <Image source={image} />
            </View>
        </Pressable>
    );
}

export default SlideBarButton;