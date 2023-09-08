// src/App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import LineGraph from './components/LineGraph';
import Map from './components/Map';
import { fetchWorldwideData, fetchCountryData, fetchGraphData } from './services/covidService';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Covid-19 Dashboard</h1>
        <LineGraph />
        <Map />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
