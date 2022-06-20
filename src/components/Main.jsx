import {AppBar, Toolbar, Stack, Typography, Container} from '@mui/material';
import {useAppContext} from '../store/store';
import {Question} from './Question';
import {TimeCount} from './TimeCount';

export const Main = () => {
    const {name, block, count} = useAppContext();

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='span' sx={{flexGrow: 1}}>
                        {name}
                    </Typography>
                    <TimeCount />
                </Toolbar>
            </AppBar>
            <Container maxWidth='xl'>
                <Stack>
                    <Question question={block[count]} />
                </Stack>
            </Container>
        </>
    );
};
