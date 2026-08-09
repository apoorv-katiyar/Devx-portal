import { makeStyles } from '@material-ui/core';
import { LogoIcon } from './LogoIcon';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    height: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#F8FAFC',
  },
});

export const LogoFull = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LogoIcon />
      <span className={classes.text}>DevX</span>
    </div>
  );
};
