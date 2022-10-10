import { QueryClient, QueryClientProvider } from "react-query";

import Blog from "./blogs/Blog";
import InfinitePeople from "./infinitescrolls/InfinitePeople";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <Blog /> */}
        <InfinitePeople />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
