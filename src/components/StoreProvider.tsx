import configStore from '../store/store';
import { Provider } from "react-redux";

const store = configStore();

const StoreProvider = ({ children }: any) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default StoreProvider;
