import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
  },
  title: {
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },
  subtitle: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
    maxWidth: 640,
  },
}));

export const WelcomeContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Welcome to the DevX Portal
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Your internal developer platform for discovering services, scaffolding
        new projects from golden-path templates, and tracking ownership,
        documentation, and deployments in one place.
      </Typography>
    </div>
  );
};
