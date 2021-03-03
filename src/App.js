import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <body>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </body>
      <Footer />
    </Router>
  );
}

export default App;
