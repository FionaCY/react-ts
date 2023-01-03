import * as React from 'react';
import BasicLayout from '@/pages/BasicLayout';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store';
import { HashRouter, Route, Routes } from "react-router-dom";
import Error from "@/pages/Error";
import Home from "@/pages/Home";

function App () {
  return (
    <Provider store={store}>
      <HashRouter>
          <BasicLayout>
            <Routes>
                <Route path="/error" element={<Error />}></Route>
                <Route path="/" element={<Home />}></Route>
                {/* {Routes} */}
            </Routes>
            </BasicLayout>
      </HashRouter>
    </Provider>
  );
}

export default App;
