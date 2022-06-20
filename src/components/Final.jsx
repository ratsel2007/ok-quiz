import {useAppContext} from '../store/store';
import {Container, Stack, Toolbar, Typography, AppBar, Button} from '@mui/material';

export const Final = () => {
    const {name, result} = useAppContext();

    const handleToStart = () => {
        window.location.reload();
    };

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='span' sx={{flexGrow: 1}}>
                        {name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth='xl'>
                <Stack>
                    <Typography
                        variant='h3'
                        component='div'
                        align='center'
                        sx={{flexGrow: 1, mt: '10px', mb: '20px'}}>
                        Ваш результат {result} {result === 0 || result === 5 ? 'баллов' : 'балла'}
                    </Typography>
                    <Button variant='contained' sx={{mt: '1rem'}} onClick={handleToStart}>
                        Начать заново
                    </Button>
                </Stack>
            </Container>
        </>
    );
};
