import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ArrowBtn() {
    return (
        <>
            <IconButton>
                <ArrowBackIcon />
            </IconButton>
            <IconButton>
                <ArrowForwardIcon />
            </IconButton>
        </>
    )
}
export default ArrowBtn