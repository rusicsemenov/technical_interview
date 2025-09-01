import { Provider } from 'react-redux';
import store from '../store/store.ts';
import { Tasks } from './componenst';

function App() {
    return (
        <Provider store={store}>
            <Tasks />
        </Provider>
    );
}

export default App;
