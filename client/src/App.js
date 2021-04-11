import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login/Login';
import MovieList from './pages/MovieList/MovieList';
import MovieInfo from './pages/MovieInfo/MovieInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-column h-100">
          <Header />
          <Container className="content" fluid>
            <Row>
              <Col className="my-4">
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/movies" />}
                  />
                  <Route exact path="/movies" component={MovieList} />
                  <Route path="/movies/:movieId/:title" component={MovieInfo} />
                </Switch>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
