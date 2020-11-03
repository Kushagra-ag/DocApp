import React, { useState } from 'react';
import CustomTextField from '../../components/CustomTextField.js';
import { Select, MenuItem } from '@material-ui/core';
import UserReviewsData from '../../data/UserReviews.js';
import UserReviews from '../../components/user/UserReviews.js';

export default function Reviews({ profile }) {
    const [filter, setFilter] = useState('date');

    const handleChange = event => {
        setFilter(event.target.value);
    };

    return (
        <>
            <div className=" mb-4 col-md-4 text-center">
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    // className={classes.margin}
                    disableUnderline
                    value={filter}
                    onChange={handleChange}
                    input={<CustomTextField />}
                >
                    <MenuItem value="date">Sort by Date Reviewed</MenuItem>
                    <MenuItem value="rating">Sort by Rating</MenuItem>
                    <MenuItem value="popularity">Sort by Popularity</MenuItem>
                </Select>
            </div>
            <div className="col-md-8">
                {UserReviewsData.map(doctor => (
                    <UserReviews key={doctor.key} values={doctor} />
                ))}
            </div>
        </>
    );
}
