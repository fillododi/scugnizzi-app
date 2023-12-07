import {Provider} from 'react-redux'
import store from './src/store'
import 'react-native-gesture-handler'

import Navigator from './src/Navigator'

export default function App() {
    return <Provider store={store}>
        <Navigator/>
    </Provider>
}


