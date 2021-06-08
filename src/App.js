import{Route,Switch} from 'react-router-dom';
import './App.css';
import Allmeetups from './pages/Allmeetups';
import Newmeetup from './pages/Newmeetup';
import Favourite from './pages/Favourite';

import Layout from './Components/layout/Layout';

function App() {
  return <Layout>
    <Switch>
    <Route path='/' exact={true}>
    <Allmeetups/>
    </Route>
    <Route path='/favourite'>
    <Favourite/>
    </Route>
    <Route path='/new-meetups'>
    <Newmeetup/>
    </Route>
    </Switch>
    </Layout>
}

export default App;
