import { Pressable, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { arrow_img } from "../images";

const ExpandableCard = ({ children, nome, style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center'
}
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [arrowImage, setArrowImage] = useState(arrow_img.down);

    useEffect(() => {
        setArrowImage(isExpanded ? arrow_img.down : arrow_img.up);
    }, [isExpanded]);

    return (
        <View>
            <Pressable onPress={() => {
                setIsExpanded(prev => !prev);
            }}>

                <View style={style}>
                    <Text>{nome}</Text>
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={arrowImage} />
                </View>
            </Pressable>
            {
                isExpanded && children.map(child => child)
            }
        </View>

    );
}

export default ExpandableCard;