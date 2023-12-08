import { View, Text } from 'react-native'


const Strip = ({ text }) => {
    return <View style={{
        width: '100%',
        height: '10%',
        alignItems: 'center',
        top: '-2%',
    }}>


        <View style={{

            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: '#9E1A1A',
            height: '60%',
            aspectRatio: 2,
            borderColor: '#000',
            borderTopWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            zIndex: 1,
            top: 3,

        }} />
        <View style={{
            backgroundColor: '#9E1A1A',
            height: '70%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopColor: '#000',
            borderBottomColor: '#000',
            borderWidth: 3,
            zIndex: 0,
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',

            }}>{text}</Text>
        </View>
    </View >
}

export default Strip;