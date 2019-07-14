$(()=>{
//    获取用户信息
function getuserinfo() {
    $.ajax({
        url: 'http://127.0.0.1:80/userinfo.php',
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success(res) {
            let userinfo = JSON.parse(res);
            // 遍历对象
            for (const key in userinfo) {
                // 有值就覆盖
                if (userinfo[key]) {
                    $('#py-userinfo-' + key).html(userinfo[key]);
                }
            }

        }
    })
}
    getuserinfo();
})