import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./widget.scss"
const Widget = ({type}) => {
 
  let data;

  switch(type){
      case "user":
          data={
              title:"USERS",
              isMoney:false,
              link:"See all users",
              icon:<PersonOutlineIcon className='icon'/>
          }
          break;
          case "order":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon className='icon'/>
            }
            break;
            case "user":
                data={
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    icon:<PersonOutlineIcon className='icon'/>
                }
                break;
                case "user":
                    data={
                        title:"USERS",
                        isMoney:false,
                        link:"See all users",
                        icon:<PersonOutlineIcon className='icon'/>
                    }
                    break;
              default:
                break;
  }
  return (
    <div className='widget'>
     <div className='left'>
     <span className='title'>USERS</span>
     <span className='counter'>12234</span>
     <span className='link'>See all users</span>
     </div>
     <div className='right'>
       <div className='percentage positive'>
       
       <KeyboardArrowUpIcon className='icon'/>
       20%
       </div>
       <PersonOutlineIcon className='icon'/>
     </div>
    </div>
  )
}

export default Widget