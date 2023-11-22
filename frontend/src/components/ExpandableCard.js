import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";
import { arrow_img, menu_img } from "../images";
import ItemCard from "./ItemCard";

const ExpandableCard = ({ nome, type, style = {
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
        <View>
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
            {
                isExpanded && type == 'pizze' ?
                    <View>
                        <ItemCard name="Pizza Margherita" image={menu_img.margherita} description="Pomodoro, mozzarella" price="5" />
                    </View>
                    : null
            }
        </View>

    );
}

export default ExpandableCard;