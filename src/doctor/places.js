import React from "react";
import { Typography } from "@material-ui/core";
import DoctorPlacesData from "../data/DoctorPlaces.js";
import DoctorPlaces from "../components/doctor/DoctorPlaces.js";

export default function Places() {
    return (
        <>
            <div className="col-md-9 col-lg-10 overflow-hidden text-center text-sm-left">
                <div className="row pt-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <Typography color="primary" variant="h5">
                                    This doctor has multiple places. Please
                                    select any to get directions.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-9 col-md-6">
                        {DoctorPlacesData.map(place => (
                            <DoctorPlaces
                                values={place}
                                key={place.key}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
