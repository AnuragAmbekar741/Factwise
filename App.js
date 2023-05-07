import React from 'react'
import List from './components/List'
import { Globalstyle } from './styles/style'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Globalstyle />
                <List />
            </Provider>
        </>
    )
}

export default App