import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
            <span onDoubleClick={this.activateMode}>
                {this.state.status !== '' ? this.state.status : 'No status'}
            </span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus onBlur={this.deActivateMode} value={this.state.status}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;