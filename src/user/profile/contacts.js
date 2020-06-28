import React from 'react';
import CustomTextField from '../../components/CustomTextField.js';
import { Typography, Card, CardContent, MenuItem, InputAdornment, Avatar } from '@material-ui/core';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import UserContacts from '../../data/UserContacts.js';
import user1 from '../../svg/user1.jpg';

export default function Favourites() {

	return(
		<>
			<div className="col-md-4 text-center mb-4">
				<CustomTextField
	                placeholder="Search friends list"
	                disableUnderline
	                startAdornment={
	                    <InputAdornment position="start">
	                        <SearchRoundedIcon color="disabled"/>
	                    </InputAdornment>
	                }
	            />
			</div>
			<div className="col-sm-8 text-center text-md-left col-lg-5">
			{
            	UserContacts.map( contact => (

            		<div key={contact.key}>
            			<Card className="p-3 mb-2">
                                               <CardContent className="d-flex justify-content-around align-items-center text-center text-md-left p-1">
                                                   <Avatar src={user1} variant="rounded" alt="contact" />
	                                                <div>
	                                                   <Typography
	                                                       variant="h6"
	                                                       display="block"
	                                                       align="left"
	                                                   >
	                                                       {contact.name}
	                                                   </Typography>
	                                                   
	                                                   <Typography
	                                                       display="block"
	                                                       variant="caption"
	                                                       align="left"
	                                                       className="text-black-50"
	                                                   >
	                                                       {contact.mutual} Mutual Contacts
	                                                   </Typography>
	                                                   
	                                                </div>
                                               </CardContent>
                                           </Card>
                                           
                    </div>

            	))
                                           
                                       
        	}
			</div>
		</>
	)
}