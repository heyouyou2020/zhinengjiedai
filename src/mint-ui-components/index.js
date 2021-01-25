import Vue from 'vue';
// mint-ui可以直接导入全局的MintUI来用
import { Button, Swipe, SwipeItem, Lazyload, Indicator, Toast, Spinner, Popup,Loadmore } from 'mint-ui';
import 'mint-ui/lib/button/style.css';
import 'mint-ui/lib/swipe/style.css';
import 'mint-ui/lib/swipe-item/style.css';
import 'mint-ui/lib/lazyload/style.css';
import 'mint-ui/lib/indicator/style.css';
import 'mint-ui/lib/toast/style.css';
import 'mint-ui/lib/spinner/style.css';
import 'mint-ui/lib/popup/style.css';
import 'mint-ui/lib/loadmore/style.css';

const mintUI = () => {
    Vue.component(Spinner.name, Spinner);
    Vue.component(Button.name, Button);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Popup.name, Popup);
    Vue.component(Loadmore.name, Loadmore);
    Vue.use(Lazyload);
    Vue.prototype.$indicator = Indicator;
    Vue.prototype.$toast = Toast;
};

export default mintUI;