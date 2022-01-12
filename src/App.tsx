import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle, { GlobalContainer } from './styles/global';
import store from './store';

import MainContent from './components/mainContent';
import Carousel from './components/carousel';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <GlobalContainer>
                <Carousel />
                <MainContent />
                <GlobalStyle />
            </GlobalContainer>
        </Provider>
    );
};
export default App;
