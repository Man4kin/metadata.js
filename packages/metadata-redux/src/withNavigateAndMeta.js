import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {push} from 'react-router-redux';

import withMeta from './withMeta';
import {mapDispatchToProps} from './withIface'

const mapStateToProps = ({iface}, {location}) => {
  return Object.assign({path_log_in: !!location.pathname.match(/\/(login|about)$/)}, iface.common);
};


export default (View) => {
  const withNavigate = connect(mapStateToProps, mapDispatchToProps)(withRouter(View));
  return withMeta(withNavigate);
};
