import {observable, action} from "mobx";

class AuthStore {
    @observable logged_in = false;
    @observable logged_user = null;
}

const store = new AuthStore();
export default store;
