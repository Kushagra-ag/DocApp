import React from 'react';
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    CardActions
} from '@material-ui/core';
import Q1 from './q1.js';
import Q2 from './q2.js';
import Q3 from './q3.js';
import Contact from '../../../../../user/contact.js';

export default function Faq(props) {
    return (
        <>
            <div className="col-md-8 pl-md-5">
                <div className="row pt-4">
                    <div className="col-sm-9 col-xl-6 text-center">
                        <Q1 />
                        <Q2 />
                        <Q3 />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}