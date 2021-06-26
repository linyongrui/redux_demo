import { connect } from 'react-redux'
import { createAddAction, createSubAction, createAutoAddAction } from '../../redux/count_action'
import CountUI from '../../component/count'

export default connect(
    state => ({ count: state }),
    
    // dispatch => ({
    //     add: number => dispatch(createAddAction(number)),
    //     sub: number => dispatch(createSubAction(number)),
    //     autoAdd: (number, time) => dispatch(createAutoAddAction(number, time))
    // })

    {
        add: createAddAction,
        sub: createSubAction,
        autoAdd: createAutoAddAction
    }

)(CountUI)