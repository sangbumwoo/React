import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TodoPage from './pages/Todo';
import LayoutComponent from './components/Layout';
import TodoWithRecoilPage from './pages/TodoWithRecoil';

export interface IAppPageProps {}

const AppPage: React.FunctionComponent<IAppPageProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="/layout" element={<LayoutComponent />}>
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="/todo" element={<LayoutComponent />}>
                    <Route index element={<TodoPage />} />
                </Route>
                <Route path="/todo-with-recoil" element={<LayoutComponent />}>
                    <Route index element={<TodoWithRecoilPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppPage;
