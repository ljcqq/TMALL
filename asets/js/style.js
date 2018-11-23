/*------------------------rem工具------------------------*/
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 1366) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/*-------------------------------------------轮播------------------------------------*/
class Slider{
    constructor(id) {
        this.ele = $id(id);
        //获取大图
        //this.ullis = $get($get(this.ele,'ul')[0],'li');
        this.ullis = this.ele.children[0].children;
        //大图数量
        this.num = this.ullis.length;
        //创建元素，并返回所有的ol中的li
        this.ollis = this.createEle();
        //当前下标
        this.indexA = 0;
        //设置轮播
        this.slide();
        //设置事件
        this.setEvent();
        this.timer = null;
        this.autoPlay();
    }
    createEle(){
        let ol = $create('ol');
        let arr = [];
        for(let i = 0;i < this.num;i ++){
            let li = $create('li');
            arr.push(li);
            ol.appendChild(li);
        }
        this.ele.appendChild(ol);
        //文字信息的div
        let div = $create('div');
        div.id = 'msg';
        this.ele.appendChild(div);

        return arr;
    }
    slide(){
        //所有大图display : none ,所有小圆点红色
        for(let i = 0;i < this.num;i ++){
            this.ullis[i].style.display = 'none';
            this.ollis[i].style.backgroundColor = 'red';
        }
        //当前大图block，当前小圆点蓝色
        this.ullis[this.indexA].style.display = 'block';
        this.ollis[this.indexA].style.backgroundColor = "blue";
    }
    setEvent(){
        //给小圆点加移入事件
        for(let i = 0;i < this.num;i ++){
            this.ollis[i].onmouseenter = ()=>{
                this.indexA = i;
                this.slide();
            }
        }
    }
    autoPlay(){
        this.timer = setInterval(()=>{
            this.indexA ++;
            if(this.indexA == this.num){
                this.indexA = 0;
            }
            this.slide();
        },3000)
        this.ele.onmouseenter = ()=>{
            clearInterval(this.timer);
        }
        this.ele.onmouseleave = ()=>{
            this.autoPlay();
        }
    }
}
//工具箱
function $id(id){
    return document.getElementById(id);
}
function $create(tagName) {
    return document.createElement(tagName);
}
/* ------------------------------页面动态数据------------------------------*/
