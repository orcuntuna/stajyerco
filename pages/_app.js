import {Provider} from "mobx-react";
import stores from "../src/stores";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../src/assets/css/fonts.css";
import "../src/assets/css/style.css";
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={stores}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
