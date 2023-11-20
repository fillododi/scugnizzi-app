// il menù è una lista: pizze birre etc
// ogni elemento della lista si espande in un sottomenù
// per esempio: pizze -> margherita, marinara, etc
// ogni elemento possiede: prezzo, foto, nome, descrizione (tra cui allergeni)

import { View, Text } from "react-native";
import ExpandableCard from "./ExpandableCard";

const Menu = () => {
    return (
        <View>
            <Text>Menu</Text>
            <ExpandableCard nome="Pizze" />
            <ExpandableCard nome="Birre" />
            <ExpandableCard nome="Vini" />

        </View>
    );
}

export default Menu;