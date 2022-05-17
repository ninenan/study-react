import { Route, Switch } from "react-router-dom";
import News from "./component/News";
import Message from "./component/Message";
import MyNavLink from "../MyNavLink";
import './index.css'
import { Redirect } from "react-router-dom";

function Home() {
  return (
    <div className='p-home-container'>
      <div className='p-home-title'>
        我是 Home 页面
        <MyNavLink to="/home/news">News</MyNavLink>
        <MyNavLink to="/home/messgae">Message</MyNavLink>
      </div>
      <Switch>
        <Route path="/home/news" component={News} />
        <Route path="/home/messgae" component={Message} />
        <Redirect to="/home/news" />
      </Switch>
    </div>
  )
}

export default Home
