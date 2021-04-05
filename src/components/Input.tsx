import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { storeType } from '../store/reducer';
import { updateName } from '../store/action';

type Props = {
    name: string,
    updateName(name: string): void
}

function Input(props: Props) {
    return (
        <div className="container">
            <input type="text" value={props.name} onChange={({ target }) => props.updateName(target.value)} />
        </div>
    )
}

const mapStateToProps = (state: storeType) => ({
    name: state.name
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators({ updateName }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);
