import { View, Text } from 'react-native'


const Strip = ({ text }) => {
    return <View style={{
        width: '100%',
        height: '10%',
        alignItems: 'center',

    }}>


        <View style={{
            borderRadius: 50,
            backgroundColor: '#9E1A1A',
            height: '60%',
            aspectRatio: 1,

        }} />
        <View style={{
            backgroundColor: '#9E1A1A',
            height: '70%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            top: '-30%',
        }}>
            <Text>{text}</Text>
        </View>
    </View>
}

export default Strip;