$(() => {
    // 处理页面加载的函数
    function loadPage() {
        // 获取路径
        let path = window.location.hash.substr(2);
        // 建立hash地址和页面之间的关系
        let routerOBJ = {
            "accountflow_list": '/views/personal/accountflow_list.html',
            "bid_request_list": '/views/personal/bid_request_list.html',
            "borrow_apply": '/views/personal/borrow_apply.html',
            "borrowBidReturn_list": '/views/personal/borrowBidReturn_list.html',
            "login_list": '/views/personal/login_list.html',
            "money_withdraw_list": '/views/personal/money_withdraw_list.html',
            "realAuth": '/views/personal/realAuth.html',
            "recharge_list": '/views/personal/recharge_list.html',
            "userinfo": '/views/personal/userinfo.html',           
            "personaCenter": '/views/personal/personaCenter.html'        
        }
        // 判断
        switch (path) {
            case "accountflow_list": $('.py-right-content').load(routerOBJ["accountflow_list"]);
                break;
            case "bid_request_list": $('.py-right-content').load(routerOBJ["bid_request_list"]);
                break;
            case "borrow_apply": $('.py-right-content').load(routerOBJ["borrow_apply"]);
                break;
            case "borrowBidReturn_list": $('.py-right-content').load(routerOBJ["borrowBidReturn_list"]);
                break;
            case "login_list": $('.py-right-content').load(routerOBJ["login_list"]);
                break;
            case "money_withdraw_list": $('.py-right-content').load(routerOBJ["money_withdraw_list"]);
                break;
            case "realAuth": $('.py-right-content').load(routerOBJ["realAuth"]);
                break;
            case "recharge_list": $('.py-right-content').load(routerOBJ["recharge_list"]);
                break;
            case "userinfo": $('.py-right-content').load(routerOBJ["userinfo"]);
                break;
            case "personaCenter": $('.py-right-content').load(routerOBJ["personaCenter"]);
                break;
            default: window.location.href='/index.html';
        }
    }
    // 先自动加载页面
    loadPage();
    // 监听hash变化
    window.addEventListener('hashchange', loadPage);
})





$(() => {
    $('.py-right-content').load('/views/personal/borrow_apply.html');
})