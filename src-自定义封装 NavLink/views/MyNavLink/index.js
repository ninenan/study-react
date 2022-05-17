import { NavLink } from "react-router-dom";
import './index.css'

export default function MyNavLink(props) {
  console.log(props)
  return (
    <>
      <NavLink activeClassName="span--active" className='span-a' {...props}></NavLink>
    </>
   )
}
