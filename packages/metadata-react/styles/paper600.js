import withStyles from 'material-ui/styles/withStyles';

export default withStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    marginTop: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  textField: {
    marginTop: 24,
  },
  spaceLeft: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
}));
