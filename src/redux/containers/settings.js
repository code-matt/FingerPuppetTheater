import { connect } from 'react-redux'
import Settings from '../../components/dashboard/settings/settings'
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

const VisibleSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default VisibleSettings
