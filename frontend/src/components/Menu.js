// il menù è una lista: pizze birre etc
// ogni elemento della lista si espande in un sottomenù
// per esempio: pizze -> margherita, marinara, etc
// ogni elemento possiede: prezzo, foto, nome, descrizione (tra cui allergeni)

import { View, Text } from "react-native";
import ExpandableCard from "./ExpandableCard";
import { arrow_img, menu_img } from "../images";
import ItemCard from "./ItemCard";

const Menu = () => {
    return (
        <View>
            <Text>Menu</Text>
            <ExpandableCard nome="Pizze">
                <View>
                    <ItemCard name="Pizza Margherita" image={menu_img.margherita} description="Pomodoro, mozzarella" price="5" />
                </View>
                <View>
                    <ItemCard name="Pizza Margherita" image={menu_img.margherita} description="Pomodoro, mozzarella" price="5" />
                </View>
                <View>
                    <ItemCard name="Pizza Margherita" image={menu_img.margherita} description="Pomodoro, mozzarella" price="5" />
                </View>
            </ExpandableCard>
            <ExpandableCard nome="Birre" />
            <ExpandableCard nome="Vini" />

        </View>
    );
}

export default Menu;