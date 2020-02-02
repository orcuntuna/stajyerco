import {Provider} from "mobx-react";
import {AuthStore, MainStore} from "../src/stores";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../src/assets/css/fonts.css";
import "../src/assets/css/style.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider AuthStore={AuthStore} MainStore={MainStore}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
