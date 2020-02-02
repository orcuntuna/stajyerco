import {Provider} from "mobx-react";
import {AuthStore} from "../src/stores";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider AuthStore={AuthStore}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
