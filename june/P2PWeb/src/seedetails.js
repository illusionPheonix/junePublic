$(()=>{
    // 获取search中的id
    let borrowid = location.search.split('=')[1];
    // 初始化
    init();
    function init() {
        // 发送请求
        $.ajax({
            url: "http://127.0.0.1:80/investmoney.php",
            type: 'get',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                borrowid
            },
            success(res) {
               let borrowinfo=JSON.parse(res);
                for (const key in borrowinfo) {
                    $('#py-detail-' + key).html(borrowinfo[key]);
              }
                $('#py-detail-repaytime').html(borrowinfo.repaytime==0?'按月还款':'到期累计');
                // 进度
                $('#py-detail-progress').html(parseInt(borrowinfo.hasmoney / borrowinfo.borrowmoney * 100));      
            }
        })
        
    }
    // 获取投资金额，发送请求
    $('#py-detail-btn').on('click',function(){
        let investmoney = $('#py-investmoney').val();
        // 发送请求
        $.ajax({
            url: "http://127.0.0.1:80/Updatemoney.php",
            type: 'get',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                investmoney,
                borrowid
            },
            success(res) {
                switch (res) {
                    case 'ok':
                        alert('投资成功！');
                        $('#py-investmoney').val('');
                        init();
                        break;
                    case "10001":
                        alert('投资失败！');
                        break;
                }

            }
        })
        
    })



})