import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Courses from '../Pages/Courses/Courses';
import Blog from '../Pages/Blog/Blog';
import FAQ from '../Pages/FAQ/FAQ';
import Home from './Home/Home';
import PrivateRoute from '../Private Route/PrivateRoute'
import Login from './Login/Login';
import Register from './Register/Register';
import Videos from './Videos/Videos';
import Checkout from './Checkout/Checkout';
import Error from './Error/Error'
const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/videos/:id',
                loader: async ({ params }) => {
                    const { id } = params;
                    return fetch(`https://edu-learn-server.vercel.app/test/${id}`)
                },
                element: <Videos></Videos>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/courses',
                loader: async () => {
                    return fetch('https://edu-learn-server.vercel.app/courses')
                },
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ]
    }
])
export default Route;