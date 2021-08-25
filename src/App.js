import './App.css';
import Home from './views/home';
import About from './views/about';
import Video from './views/video';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';





function App() {
  
  return (
    
  <div className="App">
   <Router>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/video' component={Video} />
              <Route path='/about' component={About} />
          </Switch>
    </Router>
    </div>
    
  );
}

export default App;
