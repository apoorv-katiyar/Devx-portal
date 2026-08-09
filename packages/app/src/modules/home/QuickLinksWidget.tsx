import { Link } from '@backstage/core-components';
import { List, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExtensionIcon from '@material-ui/icons/Extension';
import DescriptionIcon from '@material-ui/icons/Description';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  link: {
    margin: theme.spacing(0.5, 1),
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
  label: {
    marginTop: theme.spacing(1),
    width: 72,
    fontSize: '0.9em',
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
}));

const links = [
  { to: '/catalog', label: 'Software Catalog', icon: <CategoryIcon /> },
  { to: '/create', label: 'Create a Service', icon: <AddCircleOutlineIcon /> },
  { to: '/api-docs', label: 'APIs', icon: <ExtensionIcon /> },
  { to: '/docs', label: 'TechDocs', icon: <DescriptionIcon /> },
  { to: '/kubernetes', label: 'Kubernetes', icon: <CloudQueueIcon /> },
];

export const QuickLinksContent = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {links.map(link => (
        <Link key={link.to} to={link.to} className={classes.link}>
          <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
          <ListItemText
            secondaryTypographyProps={{ className: classes.label }}
            secondary={link.label}
          />
        </Link>
      ))}
    </List>
  );
};
