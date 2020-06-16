import React from 'react';
import { Typography } from '@material-ui/core';
import VerticalMenu from '../components/VerticalMenu.js';
import BottomNav from '../components/BottomNav.js';
import TopBar from '../components/TopBar.js';
import PlaceData from '../data/DoctorPlaces.js';
import DoctorPlaces from '../components/doctor/DoctorPlaces.js';

export default function Places() {
	
	return(
		<>
			<TopBar />
			<div className="row">
				<VerticalMenu />
				<div className="col-md-9 col-lg-10 overflow-hidden text-center text-sm-left">
					<div className="row pt-4">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<Typography color="primary" variant="h5">
										This doctor has multiple places. Please select any to get directions.
									</Typography>
								</div>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-sm-9 col-md-6">
							{PlaceData.map( place => (
								<DoctorPlaces address1={place.address1} address2={place.address2} distance={place.distance} key={place.key} />
							))}
						</div>
					</div>
				</div>
			</div>
			<BottomNav />
		</>
	)
}