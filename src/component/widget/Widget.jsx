import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import "./widget.scss"
const Widget = ({type}) => {
 
  let data;

  const amount=100;
  const diff=20

  switch(type){
      case "user":
          data={
              title:"USERS",
              isMoney:false,
              link:"See all users",
              icon:<PersonOutlineIcon className='icon' style={{color:"crimson",
            backgroundColor:"rgba(255,0,0,0.2"}}/>
          }
          break;
          case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link: "View all orders",
                icon:<ShoppingCartOutlinedIcon className='icon'/>
            }
            break;
            case "erarning":
                data={
                     title: "EARNINGS",
                    isMoney: true,
                     link: "View net earnings",
                    icon:<MonetizationOnOutlinedIcon className='icon'/>
                }
                break;
                case "banlance":
                    data={
                        title: "BALANCE",
                        isMoney: true,
                        link: "See details",
                        icon:<AccountBalanceWalletOutlinedIcon className='icon'/>
                    }
                    break;
              default:
                break;
  }
  return (
    <div className='widget'>
     <div className='left'>
     <span className='title'>{data.title}</span>
     <span className='counter'>{data.isMoney && "$"}{amount}</span>
     <span className='link'>{data.link}</span>
     </div>
     <div className='right'>
       <div className='percentage positive'>
       
       <KeyboardArrowUpIcon className='icon'/>
       {diff}%
       </div>
       {data.icon}
     </div>
    </div>
  )
}

export default Widget