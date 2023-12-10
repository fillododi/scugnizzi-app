import * as Font from "expo-font";

export default useFonts = async () =>
    await Font.loadAsync({
        'Thonburi': require('../assets/fonts/Thonburi.otf'),
    });