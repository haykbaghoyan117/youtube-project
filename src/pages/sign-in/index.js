import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { signInWithEmailAndPassword } from '../../firebase/auth';
import { connect } from 'react-redux';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;
        signInWithEmailAndPassword(email, password);
        this.setState({ email: "", password: "" })
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props)
        if (this.props.user) {
            this.props.history.push("/")
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-4 table-dark">
                    <Form className='p-3' onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
                <div className='col-8'>
                    <img style={{ backgroundImage: "url('https://i.ytimg.com/vi/mof5tnbv_tI/maxresdefault.jpg')",
                        width: '100%', height: '700px'}}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
});;

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
