import { Pressable, Text, View, Image } from "react-native";

const SlideBarButton = ({ onClick, text, image }) => {
    return (
        <Pressable onClick={onClick}>
            <Text>{text}</Text>
            <Image source={image} />
        </Pressable>
    );
}

export default SlideBarButton;