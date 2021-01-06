import React, { useState } from 'react';
import { Redirect } from "react-router";

// for now just going to send them to /home page
const RedirectFromRefferer = () => {
    return (
        <Redirect 
        to={{
            pathname: '/home',
          }} />
    )
}

export default RedirectFromRefferer
