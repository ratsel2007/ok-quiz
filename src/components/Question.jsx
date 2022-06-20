import {useState} from 'react';
import axios from 'axios';
import {useAppContext} from '../store/store';
import {
    Stack,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
} from '@mui/material';

export const Question = ({question}) => {
    const {blockName, name, count, addCount, result, addResult, changeFinal} = useAppContext();
    const [currentAnswer, setCurrentAnswer] = useState(question.answers[0]);

    const handleChangeCurrentAnswer = (e) => {
        setCurrentAnswer(e.target.value);
    };

    const postResultToFile = () => {
        axios.post('http://localhost:3002/result', {
            Дата: new Date().toLocaleString(),
            Имя: name,
            Тема: blockName,
            Результат: result,
        });
    };

    const handleChangeQuestion = async (e) => {
        e.preventDefault();

        if (count < 4) {
            addCount();
        }

        if (count === 4) {
            await postResultToFile();
            changeFinal();
        }

        if (currentAnswer === question.correctAnswer) {
            addResult();
        }
    };

    return (
        <form onSubmit={handleChangeQuestion}>
            <Stack sx={{mt: '10px'}}>
                <Typography
                    variant='h6'
                    component='span'
                    sx={{flexGrow: 1, mt: '10px', mb: '10px'}}>
                    {question.title}
                </Typography>
                <RadioGroup
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='female'
                    name='radio-buttons-group'>
                    {question.answers.map((answer) => (
                        <FormControlLabel
                            key={answer}
                            value={answer}
                            control={<Radio required={true} />}
                            label={answer}
                            onChange={handleChangeCurrentAnswer}
                            sx={{mb: '10px'}}
                        />
                    ))}
                </RadioGroup>
                <Button type='submit' variant='contained' sx={{mt: '1rem'}}>
                    {count !== 4 ? 'Далее' : 'Завершить'}
                </Button>
            </Stack>
        </form>
    );
};
