import { View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';


const ItemCard = ({ name, image, description, price }) => {
    const [amount, setAmount] = useState(0);
    return (
        <View style={{
            backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1,
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Image source={image} style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
            }} />
            <View style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
            <Text>{price}€</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
                    <Pressable onPress={() => { setAmount(amount + 1) }}>
                        <Text style={{ fontSize: 50 }}>+</Text>
                    </Pressable>

                    <Pressable onPress={() => { amount > 0 ? setAmount(amount - 1) : null }}>
                        <Text style={{ fontSize: 50 }}>-</Text>
                    </Pressable>
                </View>

                <Text>Quantità: {amount}</Text>
            </View>

        </View>
    );
}

export default ItemCard;