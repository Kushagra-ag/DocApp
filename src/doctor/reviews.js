import React from 'react';
import DoctorReviewsData from '../data/DoctorReviews.js';
import Contact from '../user/contact.js';
import DoctorReviews from '../components/doctor/DoctorReviews.js';

export default function Reviews() {
    return (
        <>
            <div className="col-sm-8 col-lg-5 text-center text-md-left pt-4 mr-auto">
                {DoctorReviewsData.map(review => (
                    <DoctorReviews key={review.key} value={review} />
                ))}
            </div>
            <Contact />
        </>
    );
}
