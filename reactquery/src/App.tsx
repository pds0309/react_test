import { QueryClient, QueryClientProvider } from "react-query";

import Blog from "./blogs/Blog";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Blog></Blog>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
