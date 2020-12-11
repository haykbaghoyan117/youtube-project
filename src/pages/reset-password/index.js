import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import { deleteUser } from '../../firebase/auth';

class ResetPassword extends Component {
    state = {
        password: ""
    }
    handleChange = ({ target }) => {
        this.setState({
            password: target.value
        })
    }

    componentDidUpdate() {
        if (!this.props.user) {
            this.props.history.push("/")
        }
    }

    changePassword = (event) => {
        event.preventDefault();
        let user = auth.currentUser
        user.updatePassword(this.state.password).then(function () {
        }).catch(function (error) {
            console.log(error)
        });

    }
    render() {
        return (
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 table-dark p-5'>
                    <form onSubmit={this.changePassword}>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Change password</label>
                            <input onChange={this.handleChange} type="password" className="form-control" name='pass' placeholder="Password" required={true} />
                            <button type="submit" className="btn btn-primary">Change</button>
                        </div>
                    </form>
                    <button onClick={deleteUser} className="btn btn-danger">Delete Your Account</button>
                </div>
                <div className='col-4'></div>
            </div>



        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
});;

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
