import { Provider } from 'react-redux'
import store from './src/store'
import 'react-native-gesture-handler'
import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import useFonts from './src/hooks/useFonts'

import Navigator from './src/Navigator'

export default function App() {

    const [IsReady, SetIsReady] = useState(false);


    const LoadFonts = async () => {
        await useFonts();
    };

    if (!IsReady) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReady(true)}
                onError={() => { }}
            />
        );
    }

    return <Provider store={store}>
        <Navigator />
    </Provider>
}


