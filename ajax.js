/**
 * Created by lenovo on 2018/4/15.
 */
// 第一步;创建XMLHttpRequest对象
xmlhttp = new XMLHttpRequest();
IE:new ActiveXObject();

/*第二步：向服务器发送请求*/
xmlhttp.open("get/post",url,ture);
xmlhttp.send();
/*执行会掉，在回调函数中进行相应的dom操作*/
xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        /*就可以执行相应的dom操作*/
        document.getElementById("mydiv").innerHTML = xmlhttp.responseText;
    }
};

<script src="http://www.example.net/api?param1=1&param2=2"></script>