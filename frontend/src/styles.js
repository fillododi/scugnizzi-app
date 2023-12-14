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
        padding: 40,
        //fontFamily: 'Thonburi'
    },

})

export const restaurantScreenStyles = StyleSheet.create({
    restaurantscreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#D32222',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
        //fontFamily: 'Thonburi'
    },

    bookingButton: {
        width: '66%',
        height: '12.5%',
        display: 'flex',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 3,
        fontSize: 30,
        fontWeight: 'bold',
        //fontFamily: 'Thonburi'
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
        //fontFamily: 'Thonburi'
    }

})

export const homeScreenStyles = StyleSheet.create({

    homescreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#D32222',
        alignItems: 'center',
        //justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
        //fontFamily: 'Thonburi'
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
        height: sHeight / 5,
        //fontFamily: 'Thonburi'
    },
})

