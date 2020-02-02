import {Provider} from "mobx-react";
import {AuthStore} from "../src/stores";

function MyApp({ Component, pageProps }) {
    return (
        <Provider AuthStore={AuthStore}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
