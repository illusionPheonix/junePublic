$(()=>{
    $(".py-register .py-code").mouseenter(function(){
        $('.py-register .py-info').hide();
        $('.py-register .py-scan').show();
        $(this).hide(); 
    })
    $('.py-register').mouseleave(function(){
        $('.py-register .py-code').show();
        $('.py-register .py-info').show();
        $('.py-register .py-scan').hide();
    })
})

$(()=>{
    $(() => {
        // 获取所有借款列表
        getBorrowList();
        function getBorrowList() {
            // 发送请求
            $.ajax({
                url: 'http://127.0.0.1:80/getborrowlist.php',
                type: 'get',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success(res) {
                    // 获取对象
                    let user = JSON.parse(res);

                    // 渲染html语句
                    user.forEach(val => {

                        let str = `
                             <tr>
                            <td>${val.title}</td>
                            <td>借贷双方约定利率
                                <p>${val.interest}%</p>
                            </td>
                            <td>借款金额
                                <p>${val.borrowmoney}元</p>
                            </td>
                            <td>借款期限
                                <p> ${val.borrowtime}个月</p>
                            </td>
                            <td>
                                <div class="py-pro">借款进度</div>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                        aria-valuemax="100" style="width: ${(val.hasmoney / val.borrowmoney) * 100}%;">
                                        <span class="sr-only">${(val.hasmoney / val.borrowmoney)*100}% Complete</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href='?id=${val.id}#/seedetails' class="btn btn-danger py-seedetil-btn">查看</a>
                            </td>
                        </tr>
                    `;

                        $('#py-first-borrowlist').append(str);

                    });

                }
            })
        }
    })
})