$(()=>{
    // 初始化页面，根据页面参数显示不同的页面
    init();
    function init() {
        // 获取search内容
        let search=location.search;
        // 获取等号后面的值
        let pyType=search.substring(search.indexOf('=')+1);
        // 判断类型
        switch(pyType){
            case 'credit':
                $("#py-borrow-title").html('信用');
                break; 
            case 'car':
                $("#py-borrow-title").html('汽车抵押');
                break; 
            case 'house':
                $("#py-borrow-title").html('住房抵押');
                break; 
        }
        
    }


    // 点击事件
    $("#py-borrowmoney").on("change", Calculated);
    $("#py-interest").on("change", Calculated);
    $("#py-borrowtime").on("change", Calculated);
    // 计算利息和管理费
    function Calculated(){
        // 获取输入框
    let borrowmoney = $("#py-borrowmoney").val();
    let interest = $("#py-interest").val();
    let borrowtime = $("#py-borrowtime").val();
    // 计算利息
    let totalInterest = borrowmoney * interest / 100 / 12 * borrowtime;
    // 放入对应的框
    $("#py-totalInterest").html(totalInterest.toFixed(2));  
    // 计算管理费
        let managementFee = borrowmoney*0.02;
        $('#py-managementFee').html(managementFee);
    }
  
})