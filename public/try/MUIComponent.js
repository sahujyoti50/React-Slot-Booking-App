import { Button, Stack, Typography } from '@mui/material';
const MUI = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Button variant='text' color='primary' size='small'>Button1</Button>
            <Button variant='contained' color='secondary' size='medium'>Button2</Button>
            <Button variant='outlined' color='error' size='large'>Button3</Button>
            <Typography variant='h1' color='primary' >h1</Typography>
            <Typography variant='h3' color='secondary' gutterBottom={true}>h3</Typography>
            <Typography variant='h6' color='error' component='h1'>h6</Typography>
        </Stack>
    )
}
export default MUI;
{/* <h1 class="MuiTypography-root MuiTypography-h6 css-lwaz2r-MuiTypography-root">h6</h1> */}