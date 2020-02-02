import {Provider} from "mobx-react";
import {AuthStore} from "../src/stores";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../src/assets/css/fonts.css";
import "../src/assets/css/style.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider AuthStore={AuthStore}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
