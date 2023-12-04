import {Provider} from 'react-redux'
import store from './src/store'
import 'react-native-gesture-handler'

import RoutingHandler from './src/components/RoutingHandler'

export default function App() {
    return <Provider store={store}>
        <RoutingHandler/>
    </Provider>
}


