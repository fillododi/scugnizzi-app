import * as Font from "expo-font";

const useFonts = async () => {
    await Font.loadAsync({
        'Thonburi': require('../../assets/fonts/Thonburi.otf'),
    });
}

export default useFonts