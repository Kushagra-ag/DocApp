import React from 'react';
import {Button, Typography, IconButton, Card, CardContent, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import VerticalMenu from './components/VerticalMenu.js';
import BottomNav from './components/BottomNav.js';
import TopBar from './components/TopBar.js';

export default function DocPlaces() {

	return(
		<>
			<TopBar />
			<div className="row">
				<VerticalMenu />
				<div className="col-md-10">
					<div className="row pt-5">

					</div>
				</div>
			</div>
		</>
	)
}