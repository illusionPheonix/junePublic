$(() => {
    // 处理页面加载的函数
    function loadPage() {
        // 获取路径
        let path = window.location.hash.substr(2);
        // 建立hash地址和页面之间的关系
        // 一级路由
        let routerOBJ = {
            "main": '/views/main/main.html',
            "invest": '/views/invest/invest.html',
            "borrow": '/views/borrow/borrow.html',
            "personal": '/views/personal/personal.html',
            "beginners": '/views/beginners/beginners.html',
            "aboutUs": '/views/aboutUs/aboutUs.html',
            "recharge":'/views/recharge.html',
            "moneyWithdraw_apply": '/views/moneyWithdraw_apply.html',
            "borrow_apply": '/views/personal/borrow_apply.html',
            "seedetails":'/views/invest/seedetails.html'
        }
        // 二级路由
        let secondRouter = {
            "personal/accountflow_list": '/views/personal/accountflow_list.html',
            "personal/bid_request_list": '/views/personal/bid_request_list.html',
            "personal/borrow_apply": '/views/personal/borrow_apply.html',
            "personal/borrowBidReturn_list": '/views/personal/borrowBidReturn_list.html',
            "personal/login_list": '/views/personal/login_list.html',
            "personal/money_withdraw_list": '/views/personal/money_withdraw_list.html',
            "personal/realAuth": '/views/personal/realAuth.html',
            "personal/recharge_list": '/views/personal/recharge_list.html',
            "personal/userinfo": '/views/personal/userinfo.html',
            "personal/personalCenter": '/views/personal/personalCenter.html'
        }
      
        twolevel(path, routerOBJ, secondRouter, '#content','.py-right-content');
        // 路由一一对应函数
        function twolevel(path, firstrouter, secondrouter,indexContainer, innerContainer) {
            // 判断是否在一级导航中
            for (const key in firstrouter) {
                if(key===path){
                    if (key === 'personal') {
                        $(indexContainer).load(firstrouter["personal"], function () {
                            $(innerContainer).load(secondrouter["personal/personalCenter"]);
                        });//个人中心
                        return;
                    } else {
                        $(indexContainer).load(firstrouter[key]);
                        return;
                    }
                }
            }
            // 判断是是否在二级导航中
            for (const key in secondrouter) {
                if(key===path){
                    if ($(innerContainer).length != 0) { //如果节点存在  直接加载account二级路由
                        $(innerContainer).load(secondrouter[key]);
                        return;
                    } else { //如果节点不存在  现加载一级路由personal  再加载二级路由account
                        $(indexContainer).load(firstrouter['personal'], function () {
                            $(innerContainer).load(secondrouter[key]);
                        });
                        return;
                    }
                }
            }
            // 否则就直接跳到index
            $(indexContainer).load(firstrouter["main"]);
        }

        // 导航激活样式切换
        $('#py-first-nav li').removeClass('active');
        // 激活当前菜单
        // 判断是否个人中心
        if(path.includes('personal')){
            $('#py-first-personal').addClass('active');
        }else if(path){
            $('#py-first-'+path).addClass('active');
        }else{
            $('#py-first-main').addClass('active');
        }
    }
    // 先自动加载页面
    loadPage();
    // 监听hash变化
    window.addEventListener('hashchange', loadPage);

    // 获取session
    getSession();
    function getSession() {
        $.ajax({
            url: 'http://127.0.0.1:80/getsession.php',
            type: 'get',
            // 前端携带cookie、
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: (res) => {
       
                $('#py-user').html(res != '' ? res : '登录');
                $('#py-register').html(res ? '退出' : '快速注册');
                if (res) {
                    $('#py-user').attr('href', 'http://127.0.0.1:3000/#/personal');
                    $('#py-register').on('click', clearCookie);
                    $('#py-register').attr('href', 'http://127.0.0.1:3000/');
                } else {
                    $('#py-user').attr('href', 'http://127.0.0.1:3000/login.html');
                    $('#py-register').attr('href', 'http://127.0.0.1:3000/register.html');
                }
            }
        })
    }
// 清除cookie
    function clearCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
            }
        }

    }

    
})