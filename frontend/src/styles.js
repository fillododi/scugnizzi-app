import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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

export const homeScreenStyles = StyleSheet.create({

    homescreen: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        flex: 1,
    },


    clickableRestaurant: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F0A54C',
        borderColor: '#000',
        borderWidth: 3,
        width: screenWidth * 2 / 3,
        height: screenHeight / 4,
    },
})

