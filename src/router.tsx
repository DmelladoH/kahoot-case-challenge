import { Route, Switch } from "wouter";
import Home from "./pages/home/home";
import BookDetails from "./pages/bookDetails/bookDetails";

export default function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/page/:page">
        {(params) => <Home page={params.page} />}
      </Route>
      <Route path="/:id">{(params) => <BookDetails id={params.id} />}</Route>
    </Switch>
  );
}
