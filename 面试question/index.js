// HTML
// 1. 必考：你是如何理解 HTML 语义化的？
// 语义化可以从几个方面去理解
// a.首先是代码结构清晰，便于团队开发和维护
// b.有利于seo搜索引擎，便于爬虫抓取
// c.提高用户体验，比如：title，alt用于解释名词和图片信息。

// 2.meta viewport 是做什么用的，怎么写？
// name为viewport表示供移动设备使用. content定义了viewport的属性

// 3.你用过哪些 HTML 5 标签？

// H5 是什么？

/***
 *  面试
 */

//1.垂直居中的方法
//  方案一： 设置父元素为相对定位， 给子元素设置绝对定位
// #father {
//     width: 500 px;
//     height: 300 px;
//     background - color: skyblue;
//     position: relative;
// }

// #son {
//     width: 100 px;
//     height: 100 px;
//     background - color: green;
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     margin: auto;
// }

// 方案二： 设置父元素为相对定位， 给子元素设置绝对定位， left: 50 % ;
// top: 50 % ;
// margin - left: --元素宽度的一半px;
// margin - top: --元素高度的一半px;

// #father {
//     width: 500 px;
//     height: 300 px;
//     background - color: skyblue;
//     position: relative;
// }

// # son {
//     width: 100 px;
//     height: 100 px;
//     background - color: green;
//     position: absolute;
//     left: 50 % ;
//     top: 50 % ;
//     margin - left: -50 px;
//     margin - top: -50 px;
// }

// 方案三

//     #father {
//         width: 500px;
//         height: 300px;
//         background-color: skyblue;
//         position: relative;
// }

//     #son {
//         background-color: green;
//         position: absolute;
//         left: 50%;
//         top: 50%;
//         transform: translateX(-50%) translateY(-50%);
// }

// 方案四

//   #father {
//         width: 500px;
//         height: 300px;
//         background-color: skyblue;
//         display: flex;
//         justify-content: center;
//         align-items: center;
// }

// 2. 深拷贝与浅拷贝
// 浅拷贝只是复制了对象的引用地址， 两个对象指向同一个内存地址， 所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝
// 深拷贝不仅复制对象的所有层级属性，并且还有自己的内存空间；

// 3.单页面的优缺点
// 优点：
// 1， 用户体验好， 快， 内容的改变不需要重新加载整个页面， 基于这一点spa对服务器压力较小
// 2， 前后端分离
// 3， 页面效果会比较炫酷（ 比如切换页面内容时的转场动画
// 缺点：
// 1. 不利于seo优化
// 2. 浏览器的前后退导航不可用
// 3. 初次加载时耗时多
// 4. 页面的复杂程度提高了很多
// https: //juejin.im/post/5a0ea4ec6fb9a0450407725c

// 4.状态码，
// 403表示 Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
// 502表示 Bad Gateway	作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
// 500表示 服务器内部错误，无法完成请求

// 5.箭头函数跟普通函数区别
// 箭头函数的 this 永远指向其上下文的 this 任何方法都改变不了其指向，如 call() , bind() , apply()
// 普通函数的this指向调用它的那个对象
// 只有一个参数时，() 可省略; 函数体只有一条返回语句时，{} 和 return 都可以省略; 如果要返回一个对象，要简写的话， 需要用()包住这个对象

// 6.权限粒度问题

// 7.数组去除问题

// 8.computed与watch的区别
// watch擅长处理的场景：一个数据影响多个数据
// computed擅长处理的场景：一个数据受多个数据影响
// computed是具有缓存。计算属性是基于它们的依赖进行缓存的
// watch是侦听一个特定的值，当该值变化时执行特定的函数。例如分页组件中，我们可以监听当前页码，当页码变化时执行对应的获取数据的函数。

// 9. vue实现mvvm的原理

// 10. 路由的原理

// 11. 性能优化的问题
// 
// 
// 
// 
// 
//   h5c3, vue优化问题, vue封装组件的问题， 封装了哪些公共的js方法， vue组件传值子组件能改变父组件的数据吗， vue组件方法调用