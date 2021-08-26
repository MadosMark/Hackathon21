import './App.css';
import Home from './views/home';
import About from './views/about';
import Video from './views/video';
import Mark from './views/mark';
import Frida from './views/frida';
import Viktor from './views/viktor';
import Matilda from './views/matilda';
import Rasmus from './views/rasmus';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';





function App() {
  
  return (
    
  <div className="App">
   <Router>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/video' component={Video} />
              <Route path='/about' component={About} />
              <Route path='/mark' component={Mark} />
              <Route path='/frida' component={Frida} />
              <Route path='/viktor' component={Viktor} />
              <Route path='/matilda' component={Matilda} />
              <Route path='/rasmus' component={Rasmus} />
          </Switch>
    </Router>
    </div>
    
  );
}

export default App;
