import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context.js';
import { Link } from 'react-router-dom'

const Login = () => {

    useEffect(() => {
        document.title = 'Login';
    }, [])

    const [error, setError] = useState('');
    const { signIn, setLoading, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        google()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    alert('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='w-9/12 mx-auto'>
            <h2 className='text-center mx-12'>Login</h2>
            <Form className='mb-24 mx-auto w-5/12' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <p className='text-center'>New to Edu Learn?? <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                <br />
                <button className='w-9/12 mx-auto btn btn-outline btn-success' onClick={handleGoogle}>Sign in with Google</button>
            </Form>
        </div>
    );
};

export default Login;