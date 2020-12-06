import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { signOut } from '../../firebase/auth';
import { clearUser } from '../../store/actions/user';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        const { user } = this.props;
        return (
            <>
                { !user ? <div>
                    <Link to='/sign-in'>
                        <Button color="success">Sign In</Button>
                    </Link>
                    <Link to='/sign-up'>
                        <Button color="success">Sign UP</Button>
                    </Link>
                </div> : (
                        <div>
                            <span>{user.email}</span>
                            <Button onClick={signOut}>Sign Out</Button>
                        </div>
                    )}
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);