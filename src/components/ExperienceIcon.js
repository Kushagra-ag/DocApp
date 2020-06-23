import React from 'react';
import Typography from '@material-ui/core/Typography';
import experience from '../svg/experience.svg';
import recognition from '../svg/recognition.svg';

export default function ExperienceIcon(props) {

	const txt = props.type === 'experience' ? 'Years' : 'Awards';
	const imgPath = props.type === 'experience' ? experience : recognition;
	return(
		<div className="text-center mx-2">
			<img src={imgPath} alt="icon" />
			<Typography variant="body2" className="font-weight-bold">
				{`${props.number} ${txt}`}
			</Typography>
			<Typography variant="caption" className="font-weight-bold text-black-50 text-capitalize" gutterBottom>
				{props.type}
			</Typography>
		</div>
	)
}