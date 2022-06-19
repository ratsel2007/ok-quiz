import {TextField, Stack, InputLabel, Select, MenuItem, Button} from '@mui/material';
import Container from '@mui/material/Container';
import axios from 'axios';
import {useState} from 'react';
import shuffleArray from '../helper/shuffleArray';
import {useAppContext} from '../store/store';

export const Start = () => {
    const [name, setName] = useState('');
    const [blockNumber, setblockNumber] = useState(1);

    const {saveName, changeBlock} = useAppContext();

    const handleSetName = (e) => {
        setName(e.target.value);
    };

    const handleChangeBlockNumber = (e) => {
        setblockNumber(e.target.value);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const data = await axios.get(`http://localhost:3001/base${blockNumber}`);

        const data2 = shuffleArray(data.data).slice(0, 5);

        saveName(name);

        changeBlock(data2);
    };

    return (
        <Container maxWidth='xl'>
            <form onSubmit={handleSubmitForm}>
                <Stack>
                    <TextField
                        id='outlined-basic'
                        label='Введите ФИО'
                        variant='outlined'
                        onChange={handleSetName}
                    />
                    <InputLabel id='demo-simple-select-label'>Выберите тему</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={blockNumber}
                        label='Выберите тему'
                        onChange={handleChangeBlockNumber}>
                        <MenuItem value={1}>
                            Вопросы по служебной деятельности по конвоированию
                        </MenuItem>
                        <MenuItem value={2}>Меры безопасности при обращении с оружием</MenuItem>
                        <MenuItem value={3}>Вопросы для младших инспекторов</MenuItem>
                        <MenuItem value={4}>
                            Экспресс-тестирование при подготовке караулов по конвоированию
                        </MenuItem>
                    </Select>
                    <Button type='submit' variant='contained'>
                        Начать
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};
