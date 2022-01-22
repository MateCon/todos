import { render } from 'react-dom';
import App from "./components/App";
import StoreProvider from './components/StoreProvider';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import "./index.css";

const Root = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":filter" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
};

render(
  <Root />,
  document.getElementById('root')
);
