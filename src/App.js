import {Final} from './components/Final';
import {Main} from './components/Main';
import {Start} from './components/Start';
import {useAppContext} from './store/store';

function App() {
    const {first, second, final} = useAppContext();

    return (
        <>
            {first && <Start />}
            {second && <Main />}
            {final && <Final />}
        </>
    );
}

export default App;
