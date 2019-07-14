$(()=>{
    // 获取所有借款列表
    getBorrowList();
    function getBorrowList() {
        // 发送请求
        $.ajax({
            url:'http://127.0.0.1:80/getborrowlist.php',
            type:'get',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success(res){
                // 获取对象
                let user=JSON.parse(res);
                // 渲染html语句
                user.forEach(val => {    
                    let str=`
                        <tr>
                    <td>${val.userid}</td>
                    <td>${val.title}</td>
                    <td>${val.interest}%</td>
                    <td>${val.borrowmoney}.00</td>
                    <td>${val.repaytime==0?'按月还款':'到期累计'}</td>
                    <td>${(val.hasmoney/val.borrowmoney).toFixed(2)*100}%</td>
                    <td><a href='?id=${val.id}#/seedetails' class="btn btn-danger py-seedetil-btn">查看</a></td>
                </tr>
                    `;                    
                    $('#py-borrow-list').append(str);                    
                });
            }
        })
    }
    
})

