import { StyleSheet, Dimensions } from "react-native";

export const sWidth = Dimensions.get('window').width;
export const sHeight = Dimensions.get('window').height;



export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        padding: 40
    },

})

export const restaurantScreenStyles = StyleSheet.create({
    restaurantscreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
    },

    bookingButton: {
        display: 'flex',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 10,
    },

    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },

    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        backgroundColor: '#F0A54C',
        borderBottomColor: '#000',
        borderBottomWidth: 3,
        borderRadius: 10,
    }

})

export const homeScreenStyles = StyleSheet.create({

    homescreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
    },


    clickableRestaurant: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0A54C',
        borderColor: '#000',
        borderWidth: 3,
        width: sWidth * 0.8,
        height: sHeight / 4,
        borderRadius: 10,

    },
})

