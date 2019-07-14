
$(function () {
  var slideVerify;  //滑块实例
  $('form').bootstrapValidator({
    // 全局错误提示 
    // 验证反馈图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    // 字段
    fields: {
      username: { // key： 与name有关！
        //   message: '用户名验证失败',
        validators: {// 输入框验证规则
          notEmpty: {// 非空验证
            message: '用户名不能为空'
          },
          stringLength: {// 内容长度
            min: 3,
            max: 9,
            message: '用户名长度必须在3到9位之间'
          },
        }
      },
      pwd: {
        validators: {
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {
            min: 3,
            max: 9,
            message: '密码长度必须在3到9位之间'
          },
        }
      }
    },
    submitHandler: function (validator, form, submitButton) {
      alert("submit");
    }
  });

  // 验证提示
  if (location.search != '') {
    $('.py-error').css('display', 'block')
  }

  //绑定表单提交事件句柄
  $('#login_form').on('submit', function () {
    //根据滑块最后的返回值，决定表单是否提交
    if (slideVerify.slideFinishState) {
      //滑块验证成功
      return true;
    } else {
      //滑块验证失败
      return false
    }

  })

  initSlide();

  function initSlide() {
  
    var SlideVerifyPlug = window.slideVerifyPlug;
    slideVerify = new SlideVerifyPlug('#verify-wrap', {
      wrapWidth: '',//设置 容器的宽度 ,不设置的话，会设置成100%，需要自己在外层包层div,设置宽度，这是为了适应方便点；
      initText: '请按住滑块拖动到最右侧',  //设置  初始的 显示文字
      sucessText: '验证通过',//设置 验证通过 显示的文字
      getSuccessState: function (res) {
        //当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了 
        console.log(res);
      }
    });
  
  }

});
