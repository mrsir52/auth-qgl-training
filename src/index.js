import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';
import Client from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider as Provider } from 'react-apollo';
import config from './appSync'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const client = new Client({
    url: config.graphqlEndpoint,
    region: config.region,
    auth: {
        type: config.authenticationType,
        apiKey: config.apiKey
    }
})

const WithProvider = () => (
    <Provider client={client}>
        <Rehydrated>
            <Routes />
        </Rehydrated>
    </Provider>

)

ReactDOM.render(<WithProvider/>,
  document.getElementById('root')
);
