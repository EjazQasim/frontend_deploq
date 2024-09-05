import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ConfigProvider } from 'antd';
import Layout from './components/Layout/Layout';
import customTheme from './theme'; // Import the custom theme file
import { ApolloProvider } from '@apollo/client';
import client from './config/apolloClient';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          ...customTheme, // Use the updated custom theme tokens
        },
      }}
    >
      <ApolloProvider client={client}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </Layout>
        </Router>
      </ApolloProvider>
    </ConfigProvider>
  );
}

export default App;
