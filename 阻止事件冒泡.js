/**
 * Created by lenovo on 2018/4/13.
 */
function stopBubble(e){
    if (e && e.stopPropagation){/*判断浏览器是否支持stopPropagation*/
        e.stopPropagation();/*如果支持就是用stopPropagation()*/
    }
    else
    {
        window.event.cancelBubble = true;/*IE10及以下浏览器使用这个可以组织事件冒泡*/
    }
}