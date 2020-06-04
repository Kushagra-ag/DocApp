import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import VerticalMenu from './components/VerticalMenu.js';
import TopBar from './components/TopBar.js';

export default function Home() {

	return(
		<>
			<TopBar />
			<div className="row">
				<VerticalMenu />
			</div>
		</>
	)
}