import { QueryClient, QueryClientProvider } from "react-query";

import Blog from "./blogs/Blog";
import React from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Blog></Blog>
      </div>
    </QueryClientProvider>
  );
}

export default App;
