$(()=>{
    // 点击事件
    $('#py-recharge-btn').on('click',function(){
        // 获取input框的值
        let newrecharge = $('#newrecharge').val();
        
        // 发送请求
        $.ajax({
            url:"http://127.0.0.1:80/recharge.php",
            type:'get',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data:{
                newrecharge: newrecharge
            },
            success(res){
                console.log(res);
                
                switch(res){
                    case 'ok':
                        alert('充值成功！');
                        location.href ='http://127.0.0.1:3000/#/personal';
                        break;
                    case 10001:
                        alert('充值失败！');
                        break;
                }
                
            }
        })
        
    })



})