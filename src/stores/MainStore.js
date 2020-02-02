import {observable, action} from "mobx";

class MainStore {
    @observable mobile_header_menu_visible = false;
    @action mobile_header_menu_toggle(){
        this.mobile_header_menu_visible = !this.mobile_header_menu_visible;
    }
}

const store = new MainStore();
export default store;
