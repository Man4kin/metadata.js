import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  formControl: {
    // marginLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    boxSizing: 'border-box',
  },
  icon: {
    '&:before': {
      backgroundColor: '#216ba5',
      borderRadius: '50%',
      bottom: 0,
      boxSizing: 'border-box',
      color: '#fff',
      content: 'х',
      cursor: 'pointer',
      fontSize: 12,
      height: 16,
      width: 16,
      lineHeight: 1,
      margin: '-8px auto 0',
      padding: 2,
      position: 'absolute',
      right: 17,
      textAlign: 'center',
      top: '50%'
    },
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  root: {
    outline: 'none'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    //overflow: 'auto',
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    //left: 0,
    //right: 0,
    //maxHeight: 280,
    zIndex: 3000,
  },
  suggestion: {
    padding: '4px 8px',
  },
  suggestionSelected: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  placeholder: {
    display: 'inline-block',
    height: '1em',
    backgroundColor: '#ddd'
  },
  bar: {
    minHeight: 48,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  flex: {
    flex: 1,
    whiteSpace: 'nowrap',
  },
  a: {
    whiteSpace: 'nowrap',
    textDecoration: 'underline',
    textTransform: 'none',
    fontSize: 'inherit',
    cursor: 'pointer',
    color: '#0b0080'
  },
});

export default withStyles(styles);
