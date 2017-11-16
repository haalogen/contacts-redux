import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


function mapStateToProps (state) {
  return {
    contacts: state.contacts,
    queryString: state.queryString
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


// `connect` injects the store (from top level) to specific Component
// without passing it down through all Components in between
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;