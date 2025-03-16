import "./App.css";
import { Route, Switch } from "wouter";
import Home from "./pages/home";
import BookDetails from "./pages/bookDetails";

function App() {
  return <Router />;
}

export default App;

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/page/:page?/offset/:offset?">
        {(params) => <Home offset={params.offset} page={params.page} />}
      </Route>
      <Route path="/:id">{(params) => <BookDetails id={params.id} />}</Route>
    </Switch>
  );
}
