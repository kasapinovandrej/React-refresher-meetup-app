import { Route, Switch } from 'react-router-dom';
import AllMeetup from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetup} />
        <Route path="/new-meetup" component={NewMeetup} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Layout>
  )
}

export default App;
