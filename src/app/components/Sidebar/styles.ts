import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      display: 'flex',
      backgroundColor: theme.palette.background.default,
    },
    button: {
      fontSize: 16,
      margin: 8,
      padding: 8,
      backgroundColor: '#202040',
      '&:hover': {
        borderRadius: 5,
        boxShadow: 'none',
      },
      '&:disabled': {
        boxShadow: 'none',
        backgroundColor: 'none',
      },
    },
  }),
);

export default useStyles;
