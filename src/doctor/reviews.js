import React from 'react';
import DoctorReviewsData from '../data/DoctorReviews.js';
import DoctorReviews from '../components/doctor/DoctorReviews.js';

export default function Reviews() {
    return (
        <>
            <div className="col-sm-8 text-center text-md-left col-lg-5 pt-4">
                {DoctorReviewsData.map(review => (
                    <DoctorReviews key={review.key} value={review} />
                ))}
            </div>
        </>
    );
}
