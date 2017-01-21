import { connect } from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'
import { setPuppets } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _puppetActions: {
      setPuppets: (arr) => {
        dispatch(setPuppets(arr))
      }
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
