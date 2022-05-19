import { NavLink } from "react-router-dom";
import './index.css'

export default function MyNavLink(props) {
  return (
    <>
      <NavLink activeClassName="span--active" className='span-a' {...props}></NavLink>
    </>
   )
}
