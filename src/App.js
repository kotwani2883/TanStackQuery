import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
const queryClient = new QueryClient();
function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Start Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page == "planets" ? <Planets /> : <People />}
          </div>
        </div>
      </QueryClientProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default App;
