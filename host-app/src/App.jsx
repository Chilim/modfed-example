import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const Counter = React.lazy(() => import("counter/Counter"));

const App = () => {
  return (
    <div className="app">
      <header>Host app</header>
      <main>
        <sidebar>Sidebar</sidebar>
        <section>
          <React.Suspense fallback="Loading Button">
            <Counter />
          </React.Suspense>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
