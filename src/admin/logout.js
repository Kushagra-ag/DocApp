import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deauthenticateAdmin } from '../core/helperMethods.js';

export default function Logout() {

	const history = useHistory();

	useState(() => {

		deauthenticateAdmin();
		history.push("/");
	})

	return null
}