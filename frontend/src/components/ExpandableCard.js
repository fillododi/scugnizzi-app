import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";
import { arrow_img } from "../images";

const ExpandableCard = ({ nome, style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,

}
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [arrowImage, setArrowImage] = useState(arrow_img.down);
    return (
        <Pressable onPress={() => {
            setIsExpanded(!isExpanded);
            if (isExpanded == false) {
                setArrowImage(arrow_img.down);
            } else {
                setArrowImage(arrow_img.up);
            }
        }}>

            <View style={style}>
                <Text>{nome}</Text>
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={arrowImage} />
            </View>
        </Pressable>
    );
}

export default ExpandableCard;