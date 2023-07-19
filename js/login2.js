var Email2 = "-";
var Password2 = "-";
var Username2;
    function checkUserName() { //验证用户名
            var fname = document.myform.username.value;
            var reg = /^[0-9a-zA-Z]/;
            if (fname.length != 0) {
                for (i = 0; i < fname.length; i++) {
                    if (!reg.test(fname)) {
                        alert("只能输入字母或数字");
                        return false;
                    }
                }
                if (fname.length < 4 || fname.length > 16) {
                    alert("只能输入4-16个字符");
                    return false;
                }
            } else {
                alert("请输入用户名");
                document.myform.username.focus();
                return false;
            }
            Username2 = fname;
            return true;
        }

        function passCheck() { //验证密码
            var userpass = document.myform.password1.value;
            if (userpass == "") {
                alert("未输入密码 \n" + "请输入密码");
                document.myform.password.focus();
                return false;
            }
            if (userpass.length < 6 || userpass.length > 12) {
                alert("密码必须在 6-12 个字符。\n");
                return false;
            }
            return true;
        }

        function passCheck2() {
            var p1 = document.myform.password1.value;
            var p2 = document.myform.password2.value;
            if (p1 != p2) {
                alert("确认密码与密码输入不一致");
                return false;
            } else {
                Password2 = p2;
                return true;
            }
        }

        function checkEmail() {
            var Email = document.getElementById("email1").value;
            var e = Email.indexOf("@" && ".");
            if (Email.length != 0) {
                if (e > 0) {
                    if (Email.charAt(0) == "@" && ".") {
                        alert("符号@和符号.不能再邮件地址第一位");
                        return false;
                    }
                    else {
                        Email2 = Email;
                        return true;
                    }
                }
                else {
                    alert("电子邮件格式不正确\n" + "必须包含@符号和.符号！");
                    return false;
                }
            }
            else {
                alert("请输入电子邮件！");
                return false;
            }
        }

        function validateform() {
            if (checkUserName() && passCheck() && passCheck2() && checkEmail()){
                alert("注册成功~");
                return true;
            }
            else{
                alert("注册7失败~");
                return false;
            }
                
        }

        function checkEmail2() {
            var Email = document.getElementById("email2").value;
            var e = Email.indexOf("@" && ".");
            if (Email.length != 0) {
                if (e > 0) {
                    if (Email.charAt(0) == "@" && ".") {
                        alert("符号@和符号.不能再邮件地址第一位");
                        return false;
                    }
                    else {
                        Email2 = Email;
                        return true;
                    }
                }
                else {
                    alert("电子邮件格式不正确\n" + "必须包含@符号和.符号！");
                    return false;
                }
            }
            else {
                alert("请输入电子邮件！");
                return false;
            }
        }

        function check1(){
            if(document.myform2.email2.value == Email2  && document.myform2.password3.value == Password2){
                alert("登录成功~");
                window.location.href="index.html?username="+Username2;
            }else{
                alert("邮箱或密码错误,请重新输入~");
            }
        }



