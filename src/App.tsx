import "./App.css";
import { Route, Switch } from "wouter";
import Home from "./pages/home";
import BookDetails from "./pages/bookDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layouts/layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

function Router() {
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
