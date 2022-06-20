import {useState} from 'react';
import useInterval from 'react-useinterval';
import axios from 'axios';
import {useAppContext} from '../store/store';

export const TimeCount = () => {
    const {name, blockName, result} = useAppContext();
    const [count, setCount] = useState({
        minute: 4,
        second: 59,
    });

    const timeTick = async () => {
        setCount({...count, second: count.second - 1});
        if (count.second === 0) {
            setCount({minute: count.minute - 1, second: 59});
        }
        if (count.minute === 0 && count.second === 0) {
            setCount({minute: 0, second: 0});
            await axios.post('http://localhost:3002/result', {
                Дата: new Date().toLocaleString(),
                Имя: name,
                Тема: blockName,
                Результат: result,
            });
            window.location.reload();
        }
    };

    useInterval(timeTick, 1000);

    return (
        <>
            {`0${count.minute}`} : {count.second < 10 ? `0${count.second}` : `${count.second}`}
        </>
    );
};
