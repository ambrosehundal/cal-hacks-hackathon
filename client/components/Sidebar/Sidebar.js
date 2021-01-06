import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [closed, setClosed] = useState(false);

    const toggleSidebar = () => {
        setClosed(!closed)
    }
    return (
        <div>
                <ul class={`navbar-nav bg-gradient-info sidebar sidebar-dark accordion ${closed ? "toggled" : ""}`} id="accordionSidebar">

                <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/home">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Seren</div>
                </Link>
        
                <hr class="sidebar-divider my-0"></hr>
        
                <li class="nav-item active">
                <Link class="nav-link" to="/home">
                    <i class="fas fa-fw fa-home"></i>
                    <span>Home</span>
                </Link>
                </li>
        
                <hr class="sidebar-divider"></hr>
        
                <div class="sidebar-heading">
                Your Communities
                </div>
        
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="/c/hacknow" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-code"></i>
                        <span>hack:now</span>
                    </Link>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        
                    </div>
                </li> 


                <li class="nav-item">
                    <Link class="nav-link collapsed" to="/c/cs451" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-terminal"></i>
                        <span>CS451</span>
                    </Link>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        
                    </div>
                </li> 
                
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="/c/robotics" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-robot"></i>
                        <span>Robotics Club</span>
                    </Link>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        
                    </div>
                </li> 
        
                <hr class="sidebar-divider d-none d-md-block"></hr>
        
                <li class="nav-item">
                <Link class="nav-link collapsed" to="/settings" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Settings</span>
                </Link>
                
                </li>


                <div class="text-center d-none d-md-inline">
                    <button onClick={toggleSidebar} class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar
