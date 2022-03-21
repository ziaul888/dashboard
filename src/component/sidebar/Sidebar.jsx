import React from 'react'
import "./sidebar.scss"
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>logo</span>

            </div>
            <hr />
            <div className='center'>
                <ul>
                <p className="title">Main</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>dashborad </span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                    
                   <PersonOutlineOutlinedIcon className='icon' />
                        <span>user</span>

                    </li>
                    <li>
                        <Inventory2Icon className='icon' />
                        <span>products</span>
                    </li>
                    <li>
                        <BorderStyleIcon className='icon'/>
                        <span> order </span>

                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>
                         Delivery
                        </span>

                    </li>
                    <p className="title">UseFull</p>
                    <li>
                        <BarChartIcon className='icon'/>
                        <span>
                            status
                        </span>

                    </li>
                    <li>
                        <NotificationsActiveIcon className='icon' />
                        <span>
                            Notification
                        </span>

                    </li>
                    <p className="title">Service</p>
                    <li>
                        <SystemUpdateAltOutlinedIcon className='icon' />
                        <span>
                            System
                        </span>

                    </li>
                    <li>
                        <EngineeringIcon className='icon' />
                        <span>
                            logs
                        </span>

                    </li>
                    <li>
                        <AdminPanelSettingsOutlinedIcon className='icon' />
                        <span>
                            setting
                        </span>

                    </li>
                    <p className="title">User</p>
                    <li>
                    <AccountBoxOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li>
                    <li>
                    <LogoutOutlinedIcon className='icon' />
                    <span>Logout</span>
                </li>
                </ul>
            </div>
            <div className='color-block'>
              <div className='colorOption'></div>
              <div className='colorOption'></div>
              <div className='colorOption'></div>
                
             </div>
        </div>
    )
}

export default Sidebar