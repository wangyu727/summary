/**
 * Created by lenovo on 2018/4/17.
 */
function ClassA() {
    this.color = sColor;/*属性，构造函数中*/
}
ClassA.prototype.sayColor = function () {
    alert(this.color);/*方法*/
};
/*然后在ClassB的构造函数中使用ClassA.call(this)来继承ClassA中的属性*/
function ClassB() {
    ClassA.call(this);/*call可以指向当前具体的实例对象*/
}
/*在用ClassB.prototype等于classA的一个实例对象来继承classA中的方法*/
ClassB.prototype = new ClassA();