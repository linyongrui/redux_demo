import { connect } from 'react-redux'
import { createAddAction, createSubAction, createAutoAddAction } from '../../redux/count_action'
import CountUI from '../../component/count'

function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return {
        add: number => dispatch(createAddAction(number)),
        sub: number => dispatch(createSubAction(number)),
        autoAdd: (number, time) => dispatch(createAutoAddAction(number, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)