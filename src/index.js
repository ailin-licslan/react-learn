import React from 'react'
//import  ReactDOM   from 'react-dom'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'
import img from './images/pic.jpg'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'


//React study proccess record and for review in the future.


//0.React 基本使用写法
const name = 'LICSLAN'
//JXS 
const title = (
    <h1>hello {name}, You are learning react!</h1>
)
console.log(title);
const songs = [
    { id: 1, name: 'vue1' },
    { id: 2, name: 'vue2' },
    { id: 3, name: 'vue3' }
]
console.log(songs);
const list = (
    <ul>
        {
            songs.map(item => <li key={item.id}>{item.name}</li>)
        }
    </ul>
)
console.log(list)






//1.类组件  有 state 值  动态可以改变的属性   函数组件  方法名必须大写!!!  & 类组件
function Name() {
    return (
        <div>test</div>
    )
}
console.log(Name());

//受控组件  React将state与表单值value绑定到一起，由state的值来控制表单元素的值
//给表单绑定onchange 事件将表单的值设置为state的值   控制表单元素值的变化
class Hello extends React.Component {
    // constructor(){

    //     //ES6 要求
    //     super()
    //     //初始化
    //     this.state = {
    //         count : 0
    //     }
    // }


    //上面写法可以简化为下面的
    state = {
        count: 0,
        test: 'a',
        txt: '',
        city: 'wh',
        isChecked: false
    }


    //错误写法  修改state  this.state.count +=1 

    //数据驱动视图思想  先修改状态 再改变UI

    //抽离 函数  
    onIncrement() {

        //如何处理事件绑定中的this 指向  

        //1.箭头函数
        //<button onClick={this.onIncrement()}> + 1</button>


        //2.Function.prototype.bind()
        //3.class 的实例方法

        console.log("this object is ", this)

        this.setState({
            count: this.state.count + 1
        })

    }


    //input输入框  受控组件
    handleChange = (e) => {
        this.setState({
            txt: e.target.value
        })
    }

    //富文本框 受控组件
    handleContent = (e) => {
        this.setState({
            test: e.target.value
        })
    }

    //handcity
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    //handleChecked
    handleCheck = (e) => {
        this.setState({
            isChecked: e.target.checked
        })
    }








    //优化上面的四种方法(handleChange handleContent handleCity handleCheck)合为一个即可
    handleForm = (e) => {


        const target = e.target

        const name = target.name

        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [name]: value
        })
    }


    constructor() {
        super()
        this.onIncrement = this.onIncrement.bind(this)


        //非受控组件 ： 借助于ref 使用元素DOM 获取表单元素的值  作用：获取DMO 或组件
        this.txtRef = React.createRef()
    }

    //获取文本的值 非受控组件   react 中不推荐直接操作DOM 来获取值  推荐使用受控组件
    getTxt = () => {
        console.log("文本框的值： ", this.txtRef.current.value)
    }


    render() {
        return (
            <div>

                <div>
                    <input type="text" ref={this.txtRef}></input>
                    <button onClick={this.getTxt}>获取文本框的值</button>
                </div>


                <hr></hr>

                <div>
                    test calss, hello react, 有状态的组件 count: {this.state.count}
                </div>


                {/* <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}> + 1</button> */}

                {/* 抽离函数  报错 this undefind */}
                {/* <button onClick={this.onIncrement}> + 1</button> */}

                {/* 1.箭头函数  写法可以的  */}
                {/* <button onClick={() => this.onIncrement()}> + 1</button> */}


                {/* 2.Function.prototype.bind() 可以的  */}

                <hr></hr>

                <div>
                    <button onClick={this.onIncrement}> + 1</button>
                </div>


                <hr></hr>

                <div>

                    {/* 受控组件 React 将state于表单元素value绑定到一起  由state值控制表单元素的值 */}
                    {/* 输入： <input type="text" name="txt" value={this.state.txt} onChange={this.handleChange} placeholder="pls input sth" /> */}

                    输入： <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm} placeholder="pls input sth" />



                </div>

                <hr></hr>
                <div>

                    {/* 富文本：<textarea name='test' value={this.state.test} onChange={this.handleContent}></textarea> */}
                    富文本：<textarea name='test' value={this.state.test} onChange={this.handleForm}></textarea>

                </div>

                <hr></hr>
                {/* <select name='city' value={this.state.city} onChange={this.handleCity}>
                    <option value='sh'>上海</option>
                    <option value='wh'>武汉</option>
                    <option value='bj'>北京</option>
                </select> */}


                <select name='city' value={this.state.city} onChange={this.handleForm}>
                    <option value='sh'>上海</option>
                    <option value='wh'>武汉</option>
                    <option value='bj'>北京</option>
                </select>


                <hr></hr>
                {/* 复选框 */}
                {/* 复选框： <input name='isChecked' type="checkbox" checked={this.state.isChecked} onChange={this.handleCheck}></input> */}
                复选框： <input name='isChecked' type="checkbox" checked={this.state.isChecked} onChange={this.handleForm}></input>


                {/* 3.绑定实例 下面写法就可以   推荐使用哈  onIncrement=()=>{ 推荐使用的写法 }
                
                <button onClick={this.onIncrement}> + 1</button>

                
                onIncrement=()=> {

        //如何处理事件绑定中的this 指向  

        //3.class 的实例方法

        console.log("this object is ", this)

        this.setState({
            count: this.state.count + 1
        })

    }
                
                */}

            </div>
        )
    }

}
console.log(Hello)











//2.小练习  APP 组件 使用受控组件 完成任务  map的遍历等
class App extends React.Component {

    //初始化 状态
    state = {
        conmments: [
            { id: 1, name: 'Jack', conmment: 'hi React' },
            { id: 2, name: 'Jack2', conmment: 'hi React， try to learn it' },
            { id: 3, name: 'Jack3', conmment: 'hi React, no worry i will take it!' }
        ],
        userName: '',
        content: ''
    }


    renList() {

        //优化  if else 
        if (this.state.conmments.length === 0) {
            return (<div className='no-comment'> no comment pls have some comment ~</div>)
        }
        else {
            return (<ul>
                {
                    this.state.conmments.map(item => (
                        <li key={item.id}>
                            <h3>comment: {item.name}</h3>
                            <p>comment content: {item.conmment}</p>
                        </li>
                    ))
                }
            </ul>)
        }


        // return (this.state.conmments.length === 0 ? (<div className='no-comment'>暂无评论，快去评论吧~</div>) : (
        //     <ul>
        //         {
        //             this.state.conmments.map(item => (
        //                 <li key={item.id}>
        //                     <h3>评论人：{item.name}</h3>
        //                     <p>评论内容：{item.conmment}</p>
        //                 </li>
        //             ))
        //         }
        //     </ul>
        // ))
    }



    handleForm = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    addConmment = () => {


        const { conmments, userName, content } = this.state
        console.log(conmments, userName, content)


        if (userName.trim() === '' || content.trim() === '') {
            alert("Pls input content and username~")
            return
        }


        //记住展开运算符 要空格  [{} ...conmments]
        const newConmments = [
            {
                id: Math.random(),
                name: userName,
                conmment: content
            }, ...conmments]

        this.setState({
            conmments: newConmments,
            //清空文本框
            userName: '',
            content: ''
        })
        console.log("=== The List length have no change here ======>", conmments, userName, content)
    }

    render() {


        //优化后  下面的value之前的this.state.userName 可以简化为userName  name 属性和  state中的 userName  content保持一致 
        const { userName, content } = this.state

        return (

            <div className='app'>

                <div>
                    <input className='user' type='text' placeholder='请输入评论人：' value={userName} name='userName' onChange={this.handleForm} />
                    <br />
                    <br />
                    {/* value here means 受控组件的使用哈 注意！ */}
                    <textarea className='content' cols='30' rows='10' placeholder='请输入评论内容' value={content} name='content' onChange={this.handleForm} />
                    <br />
                    <br />
                    <button onClick={this.addConmment}>发表评论</button>
                </div>

                <br />


                {/* 通过条件渲染 暂无评论  如果conmments===empty 就展示暂无评论 否则暂时下面的 评论列表 */}


                {/*优化代码： {this.state.conmments.length === 0 ? (<div className='no-comment'>暂无评论，快去评论吧~</div>) : (
                    <ul>
                        {
                            this.state.conmments.map(item => (
                                <li key={item.id}>
                                    <h3>评论人：{item.name}</h3>
                                    <p>评论内容：{item.conmment}</p>
                                </li>
                            ))
                        }
                    </ul>
                )} */}

                {/* 优化抽出方法 */}
                {this.renList()}


            </div>



        )
    }

}
console.log(App)











//3.组件传值  props   组件是封闭的 要接收外部数据应该通过props来实现
//a.props 作用： 接收传递给组件的值
//b.传递数据 ： 给组件标签
//c.接收数据： 函数组件是通过参数props接收数据 类组件通过this.props接收数据

//函数组件 Test
const Test = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                props: {props.name},
                age: {props.age}
            </h1>
        </div>
    )

}
console.log(Test)

class TestV2 extends React.Component {
    //推荐写法 传props参数哈 
    constructor(props) {

        super(props)

        console.log("test class comonent get props value: " + this.props.name)
    }


    render() {

        console.log(this.props)

        this.props.fn()

        return (
            <div>
                <h1>
                    props: {this.props.name}
                    <br />
                    age: {this.props.age}
                    <br />
                    colors: {this.props.colors}
                    <br />
                    div:{this.props.tag}
                </h1>
            </div>
        )

    }
}
console.log(TestV2)









//4.组件通讯的三种方式
//a. father ---> son
//b. son ---> father
//c. brother --> brother
//d. 跨组件传递 Context

//a. 父传子  参数
//1.父组件提供要传递的state参数 2.给子组件添加标签 比如name 值是state的值 3.子组件通过props接收父组件传递的参数
class Parent extends React.Component {

    state = {
        lastName: 'LIN'
    }

    render() {
        return (
            <div className='parent'>

                父组件使用Child子组件 并且传递了state中的lastName 参数给子组件Child name 赋值 this.state.lastName:
                <Child name={this.state.lastName} />

            </div>
        )
    }
}
console.log(Parent)
const Child = (props) => {
    console.log("==========父组件传过来的值：=========", props.name)
    return (
        <div className='child'>
            <p>子组件接收父组件的数据: {props.name}</p>
        </div>
    )
}


//b. 子传父  参数
//1.父组件提供回调函数 用于接收数据 2.将改函数作为属性值传递给子组件 3.子组件通过props调用回调函数
class ParentV2 extends React.Component {

    state = {
        value: ''
    }

    getChildV2Msg = (msg) => {
        console.log("接收到子组件传过来的参数=========>", msg)
        this.setState({
            value: msg
        })
    }

    render() {
        return (
            <div className='parent'>

                {/* 子组件 并且把父组件的回调函数传给子组件： */}
                当前父组件拿到子组件的值是：{this.state.value}
                <br />
                <ChildV2 getMsg={this.getChildV2Msg} />

            </div>
        )
    }
}
console.log(ParentV2)
class ChildV2 extends React.Component {

    state = {
        childMsg: 'React learning....'
    }


    handleClick = () => {
        this.props.getMsg(this.state.childMsg)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {/* 点我 给父组件传值 传 子组件中的state里面的 childMsg */}
                当前子组件
            </button>
        )
    }

}


//c. 兄弟组件传值  参数
//1.将共享状态提升到最近的公共父组件中 由公共父组件管理这个状态  思想 ： 状态提升 公共父组件职责： 提供共享状态，提供共享状态的方法，要通讯的子组件只需要通过props接收状态或操作状态的方法
class Counter extends React.Component {

    //提供共享状态
    state = {
        count: 0
    }

    //父组件提供修改状态的方法
    onIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (<div>
            {/* <h1>计数器：</h1>
            <button>+1</button> */}


            {/* 父到子通讯 */}
            <Child1 count={this.state.count}></Child1>
            <Child2 onIncrement={this.onIncrement}></Child2>


        </div>)
    }
}
console.log(Counter)

const Child1 = (props) => {
    return (<div>

        <h1>计数器:  {props.count}</h1>

    </div>)
}
console.log(Child1)

const Child2 = (props) => {
    return (<div>
        <button onClick={() => props.onIncrement()}>+1</button>
    </div>)
}
console.log(Child2)


//d.跨组件传递 比如爷孙 ...
//1.调用React.createContext()创建Provider  & Consumer 2 个组件  2.使用Provider 组件作为父节点


//创建context 得到2个组件
const { Provider, Consumer } = React.createContext()

class AppList extends React.Component {

    render() {
        return (
            <Provider value='LICSLAN'>
                <div className='app'>
                    <Node></Node>
                </div>
            </Provider>
        )
    }
}
console.log(AppList)

const Node = (props) => {
    return (<div className='node'>
        <SubNode></SubNode>
    </div>)
}

const SubNode = props => {
    return (<div className='subNode'>
        <Son></Son>
    </div>)
}

const Son = props => {
    return (
        <Consumer>
            {
                data => <span>我是子节点 Value is ： {data}</span>
            }
        </Consumer>
    )
}










//5.props 深入理解和使用
//1.children 与 props 一样  可以是任意值  文本  react元素 JXS 组件 函数...
const TestV3 = (props) => {

    console.log("The children node is ", props)

    return (<div>
        <h1>组件标签的字节点：</h1>
        {props.children}
    </div>)
}
console.log(TestV3)

//2.props 校验 创建组件时 指定props类型 格式  
//安装包  npm install --save prop-types  导入 props-types  使用组件名.propTypes={} 给组件添加校验规则


const TestV4 = (props) => {
    props.fn()
    const arr = props.colors
    const lis = arr.map((item, index) => <li key={index}>{item}</li>)
    return (<div><ul>
        {lis}
    </ul>
        <button>Default value: {props.a}</button>
    </div>)
}

//3.属性props 校验定义 必须是数组 推荐创建组件时   常见约束规则  array bool func number object string  
//具体约束定义  查看官方文档  https://www.npmjs.com/package/prop-types
TestV4.propTypes = {
    colors: PropTypes.array,
    a: PropTypes.number,
    fn: PropTypes.func.isRequired,
    tag: PropTypes.element,
    filter: PropTypes.shape({
        area: PropTypes.string,
        price: PropTypes.number
    })
}

//给props  传入默认值  在未传值时生效
TestV4.defaultProps = {
    a: 100
}








//6.组件的生命周期  意义：组件的生命周期有助于理解组件的运行方式  完成更加复杂的组件功能  分析组件错误原因
//生命周期： 一个组件从被创建到挂载到页面运行  再到组件不用时卸载的过程  
//生命周期的每个阶段总是伴随着一些方法的调用  这些方法就是生命周期的钩子函数  （同VUE 很像  感觉像是谁在模仿或者借鉴谁 ^_^）
//钩子函数的作用 为开发人员在不同阶段操作组件提供了时机
//只有类组件才有生命周期 ！！！ 可以让页面动起来  函数组件不可以
//1.创建时  （挂载阶段） 执行时机 组件创建时 （页面加载时） constructor(创建时) --> render(创建时+更新时)  -->componentDidMount(卸载时)  
//constructor(创建时):  初始化state 为事件处理程序绑定this
//render(创建时+更新时)：每次组件渲染都会触发 渲染UI  注意：不能调用 setState() 递归更新 报错！
//componentDidMount(卸载时): 组件挂载后 完成DOM 渲染 发送网络请求 和 DOM 操作
//钩子函数componentDidMount()

class LifeCycle extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            count: 0,
            value: 'xxxxx'
        }

        console.log('1.生命周期钩子函数： constructor')

        const title = document.getElementById('LICSLAN')

        //拿不到的哈 null  不可以操作 DOM   只能在componentDidMount操作哈  记住了 
        console.log("constructor title is :", title)
    }


    //钩子函数
    componentDidMount() {

        //前端断点调试
        debugger

        const title = document.getElementById('LICSLAN').innerHTML

        console.log("componentDidMount title is :", title)

        this.setState({
            //因为修改了 state 就会触发  render() 钩子函数
            value: title
        })

        //操作DOM 演示
        console.log('3.生命周期钩子函数： componentDidMount')


        //可以发送Ajax 请求  请求后端数据哈  记住了    VUE 生命周期里面有好几次可以发送Ajax 请求
    }

    render() {


        //拿不到的哈 null  不可以操作 DOM   只能在componentDidMount操作哈  记住了 

        const title = document.getElementById('LICSLAN')

        console.log("render title is :", title)

        console.log('2.生命周期钩子函数： render')

        return (<div>
            <h1 id='LICSLAN'>统计豆豆被打的次数</h1>
            <button id='btn'>打豆豆</button>
            <p>hi : {this.state.value}</p>
        </div>)
    }

}
console.log("constructor title is :", LifeCycle)


//2.更新时  钩子函数componentDidUpdate() 
//三种情况触发 render方法执行 组件接收新属性 props 会重新渲染  setState()时会重新渲染  forceUpdate()时也会重新渲染
//执行顺序  先执行 render() ---> 再执行componentDidUpdate()
//render 每次组件渲染都会触发 渲染UI 和 挂载阶段是相同的render
//componentDidUpdate  可以发送网络请求 Ajax 可以操作DOM 如果要setState() 必须放在一个if条件中  和挂载时不一样 挂载阶段不可以使用 setState()!!!!

class LifeCycleV2 extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {

        //state 更新时   render 也会执行
        this.setState({
            count: this.state.count + 1
        })

        //此时 forUpdate()时 render 也会执行
        //this.forceUpdate()
    }

    render() {

        console.log("属性state 更新时 生命周期钩子函数 render会执行render")
        return (<div>
            <CounterX count={this.state.count}></CounterX>
            <button onClick={this.handleClick} id='btn'>打豆豆</button>
        </div>)
    }

}

class CounterX extends React.Component {

    //props接收新值时   render 也会执行
    render(props) {
        console.log("子组件 生命周期钩子函数 当新接收 props时 会执行 render")
        return <h1 id='LICSLAN'>统计打豆豆次数: {this.props.count}</h1>
    }


    //注意： 要更新 setState 一定要放在 if条件中
    componentDidUpdate(prevProps) {

        console.log("子组件 生命周期钩子函数 当新接收 props时 会执行componentDidUpdate")


        console.log("prevProps is :", prevProps, "当前props is：", this.props)
        const title = document.getElementById('LICSLAN')


        console.log("xxxxxxxxxxxxxx===", title.innerHTML)

        if (prevProps !== this.props) {

            this.setState({

            })

            //或者发送 Ajax 请求 
        }
    }
}
console.log(LifeCycleV2)




//3.卸载阶段 执行时机 组件从页面消失
//钩子函数 componentWillUnmount()   比如执行清理工作  清理定时器

class LifeCycleV3 extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {

        //state 更新时   render 也会执行
        this.setState({
            count: this.state.count + 1
        })

        //此时 forUpdate()时 render 也会执行
        //this.forceUpdate()
    }

    render() {

        console.log("属性state 更新时 生命周期钩子函数 render会执行render")
        return (<div>

            {
                this.state.count > 3 ? (<p>豆豆都打完了 ~~</p>) : (
                    <CounterY count={this.state.count}></CounterY>
                )
            }

            <button onClick={this.handleClick} id='btn'>打豆豆</button>
        </div>)
    }

}

class CounterY extends React.Component {

    componentDidMount() {
        this.timeId = setInterval(() => {
            console.log("定时器正在执行~~~~")
        }, 500);
    }

    //props接收新值时   render 也会执行
    render(props) {
        console.log("子组件 生命周期钩子函数 当新接收 props时 会执行 render")
        return <h1 id='LICSLAN'>统计打豆豆次数: {this.props.count}</h1>
    }


    //注意： 要更新 setState 一定要放在 if条件中
    componentDidUpdate(prevProps) {

        console.log("子组件 生命周期钩子函数 当新接收 props时 会执行componentDidUpdate")


        console.log("prevProps is :", prevProps, "当前props is：", this.props)
        const title = document.getElementById('LICSLAN')


        console.log("xxxxxxxxxxxxxx===", title.innerHTML)

        if (prevProps !== this.props) {

            this.setState({

            })

            //或者发送 Ajax 请求 
        }
    }


    //组件从页面消失时 就会执行
    componentWillUnmount() {
        console.log("组件从页面小时 count>3 时 执行 ")
        //清理定时器
        clearInterval(this.timeId)
        console.log("===================定时器被清理了==============================")
    }
}
console.log(LifeCycleV3)








//7.组件复用场景    如果组件中的部分功能相似或者相同  如何处理呢  复用组件的状态逻辑 state & 操作state的方法  高阶组件
//两种方式处理  1.render props模式  2 高阶组件 完全利用react自身特点的编码技巧 演化而成的固定模式 写法

//1.render props 模式  封装 mouse 组件
class Mouse extends React.Component {

    //鼠标位置state 
    state = {
        x: 0,
        y: 0
    }

    //鼠标移动事件处理程序
    handleMouseMove = (e) => {

        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    //监听鼠标移动事件 创建时使用
    componentDidMount() {

        window.addEventListener('mousemove', this.handleMouseMove)
    }

    //推荐在组件卸载时移除事件绑定 自己加的事件 需要处理  非react自己实现的需要移除
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
    }

    render() {
        //将组件内部的属性  暴露到外部
        //return this.props.render(this.state)
        return this.props.children(this.state)
    }
}

//属性校验
Mouse.propTypes = {
    children: PropTypes.func.isRequired
}

class Lin extends React.Component {
    render() {
        return (<div>
            <h1>render props 模式</h1>

            <Mouse render={(mouse) => {
                return <p>鼠标的位置 ： {mouse.x}, {mouse.y}</p>
            }}></Mouse>


            <Mouse>{

                mouse => { return (<p>鼠标的位置 ： {mouse.x}, {mouse.y}</p>) }
            }

            </Mouse>

            {/* 猫捉老鼠的功能 */}
            <Mouse render={(mouse) => {
                return <img src={img} alt="star" style={{
                    position: 'absolute',
                    top: mouse.y - 50,
                    left: mouse.x - 30
                }} />
            }}></Mouse>

        </div>)
    }
}

console.log(Lin)

//换成 children 更好理解   Context 中的用法就是render模式 <Consumer></Consumer>  代码优化的地方  1.可以添加 props 校验  2.组件卸载时 解除mouse move事件
class Linchildren extends React.Component {
    render() {
        return (<div>
            <h1>render props 模式</h1>

            {/* children 方式 */}
            <Mouse>

                {(mouse) => <p>鼠标的位置 ： {mouse.x}, {mouse.y}</p>}

            </Mouse>

            {/* 猫捉老鼠的功能  children 方式 */}
            <Mouse>
                {
                    (mouse) => {
                        return (
                            <img src={img} alt='start' style={
                                {
                                    position: 'absolute',
                                    top: mouse.y - 50,
                                    left: mouse.x - 30
                                }
                            } />
                        )
                    }
                }
            </Mouse>
        </div>)
    }
}
console.log(Linchildren)



//2.组件 High-Order-component 是一个函数 接收要包装的组件 返回增强后的组件
//高阶组件内部创建一个类组件 在这个类组件中提供复用的状态逻辑代码  通过props将复用的状态传递给被包装组件WrappedComponent
//创建函数  
//a.名称约定以with 开头 
//b.指定函数参数  参数应该以大写字母开头（作为要渲染的组件） 
//c.在函数内部创建一个类组件  提供复用的状态逻辑代码
//d.在该组件中，渲染参数组件， 同时将状态通过props传递给参数组件

function withMouse(WarppedComponent) {

    //此组件提供复用状态的逻辑
    class Mouse extends React.Component {
        //鼠标状态
        state = {
            x: 0,
            y: 0
        }

        handleMouseMove = (e) => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }


        //控制鼠标绑定事件
        componentDidMount() {

            window.addEventListener('mousemove', this.handleMouseMove)

        }

        //解绑鼠标事件
        componentWillUnmount() {
            Window.removeEventListener('mousemove', this.handleMouseMove)
        }

        render() {
            console.log("=========xxxxxxxxxxx=========", this.props)
            //props state 一起传递 避免 props丢失问题
            return <WarppedComponent {...this.state} {...this.props}></WarppedComponent>;
        }
    }

    //设置displayName
    Mouse.displayName = `LICSLAN-${getDisPlayName(WarppedComponent)}`

    return Mouse
}

//获取disPlayName 
function getDisPlayName(WarppedComponent) {
    return WarppedComponent.displayName || WarppedComponent.name || 'defaultName'
}

//测试高阶组件   参数作为参数传入
const Position = props => {
    console.log("The props is =========>", props)
    return (
        <p>
            鼠标当前的位置： (X: {props.x}, Y: {props.y})
        </p>
    )
}

const Move = props => (
    <img src={img} alt="xx" style={{
        position: 'absolute',
        top: props.y - 45,
        left: props.x - 30
    }} />

)


//获取增强后的组件
const MousePosition = withMouse(Position)
const MovePic = withMouse(Move)

//渲染增强后的组件
class HighComponent extends React.Component {
    render() {
        return (<div>
            <h1>高阶组件</h1>
            <MousePosition a={1} />
            <MovePic />
        </div>)
    }
}
console.log(HighComponent)









//8.React 原理揭秘   
//a.setState 更新是异步的
//b.知道JSX转发过程
//c.知道React更新机制
//d.对组件进行性能优化
//f.虚拟DOM & Diff算法

class StateUnderstanding extends React.Component {

    state = {
        count: 0
    }
    handleClick = () => {

        //此处更新是异步的 因为下面的打印的值 是+1之前的值
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log("state.count: ", this.state.count )


        // this.setState({
        // console.log('第二次调用count不会状态改变: ', state)    
        //     count: this.state.count + 1
        // })
        // console.log("state.count222: ", this.state.count )


        //推荐更新state 语法写法 但也是异步更新  state props 都表示最新的了 这种写法 回调函数写法
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        })


        this.setState((state, props) => {
            console.log('第二次调用状态会改变: ', state)
            return {
                count: state.count + 1
            }
        },
            //第二个参数 状态更新后并且重新渲染后立即执行
            () => {

                //componentUpdate 钩子函数相似这里触发时机  dom渲染完成后触发发
                console.log("状态更新完成", this.state.count)
                console.log("xxxxxxxxxxx", document.getElementById('title').innerHTML)
                document.title = "modify title "+ this.state.count
            })
        console.log("state.count: ", this.state.count)


    }




    render() {
        return <div>
            <h1 id='title'>计数器：{this.state.count}</h1>
            <button onClick={this.handleClick}>+1</button>
        </div>
    }
}
console.log(StateUnderstanding)


//组件更新机制  1.修改state 2.更新组件UI
//过程： 父组件重新渲染时 也会重新渲染子组件 但只会渲染当前子组件树(当前组件及其所有子组件)  根组件更新  那么所有的子组件都会更新的 

//组件性能优化  
//1.减轻state  state只存储跟组件渲染相关的数据 注意：不用做渲染的数据不要放在state中 比如定时器ID等,对于这种需要在多个方法中用到的数据应该放在this中
//2.避免不必要的重新渲染  父组件更新引起子组件更新 问题 如果子组件没有任何地方变化时也会被重新渲染 这个有必要吗？ 如何避免不必要的渲染呢？ 
//FIX： shouldComponentUpdate(nextProps,nextState)钩子函数 通过此函数返回值判断是否需要重新渲染 true表示需要  false表示不需要 
//shouldComponentUpdate 触发时机 更新阶段的钩子函数 组件重新渲染前执行
class TimeTest extends React.Component {
    state = {
        count: 0,
        number:0
    }
    handleClick = () => {
        console.log("=========================")
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }

    handleNumber = () => {
        console.log("=========================")
        this.setState(state => {
            return {
                number: Math.floor(Math.random()*5)
            }
        })
    }


    //最新的props  最新的state  避免不必要的重新渲染   shouldComponentUpdate 先执行  再执行 render
    shouldComponentUpdate(nextProps,nextState){

        console.log("nextState, nextProps, thisState=====", nextState,nextProps,this.state)
        //false 阻止 render 渲染
        //return false



        //如果生成随机数前后2次相同的话 就控制不执行render()
        if (this.state.number===nextState.number){
            return false
        }

        return true
    }

    render() {

        console.log('组件更新了~~~')

        return (<div>
            <h1>计数器：{this.state.count}</h1>
            <button onClick={this.handleClick}>+1</button>
            <br></br>

            {/* <h2>随机数：{this.state.number}</h2>   */}
            <NumberTest number={this.state.number}/>
            <button onClick={this.handleNumber}>重新生成</button>
           
        </div>)
    }
}
console.log(TimeTest)

class NumberTest extends React.Component{


    shouldComponentUpdate(nextProps){
        if(nextProps.number!==this.props.number){return true} 
        return false

    }

    render(){
        console.log("子组件中的render~~~~~~")
        return (<h2>随机数：{this.props.number}</h2>  )
    }
}

//3.纯组件和ReactComponent功能相似  区别 purecomponent内部自动实现了shouldComponentUpdate钩子函数 不需要手动比较
//原理：纯组件通过分别对比state props的值  来决定是否渲染新组件
//使用非常简单  创建组件时 改成  class TimeTest extends React.PureComponent 即可   纯组件内部的对比是浅层对比  shallow compare 
//shallow compare  值类型对比 比较2个值是否相同即可   对于引用类型来说  只比较对象的引用地址是否相同
//注意： state or props 属性为引用类型时  应该创建新数据 不要直接修改原数据！！！    引用类似推荐对比的时候是去创建新的对象哈 
const object = {a:0}
const newObj = object
newObj.a = 5
console.log("cvcvvsfdfdasfdsfd================",newObj===object)



//虚拟DOM & DIFF 算法  React 如何做到部分更新的呢   （虚拟DOM & DIFF 算法）
//虚拟DOM （React 元素） 本质上是一个JS对象用来描叙你希望在屏幕上看到的内容UI  
//组件render()调用后 根据状态和JSX结构生成虚拟DOM 对象

//React原理揭秘  
//1.工作角度  应用第一  原理第二
//2. state异步更新
//3.父组件更新导致子组件更新 纯组件提升性能
//4.虚拟DOM ==>  state + JSX
//5.虚拟DOM 不是正在的DOM 虚拟DOM可以让react脱离浏览器的束缚 使其跨平台应用提供了保障  开发react 是面向虚拟DOM 开发  react native --> 安卓 / IOS 



//REACT 路由使用
//现代前端应用大多是SPA 单页面应用程序  也就是只有一个HTML页面的应用程序 因为用户体验更好 对服务器压力更小  所以受欢迎  为了有效的使用单个页面来管理原来多页面功能 前端路由应运而生
//作用：让用户从一个视图(页面)导航到另一个视图(页面)  URL <===>与组件的对应关系
//使用 <Router> 包裹整个应用  使用Link作为导航菜单  路由入口  
//使用Route组件配置路由规则和要展示的组件  路由出口

const First = () => <h1>页面一内容</h1>
const Home = () => <h1>页面Home内容</h1>
const X = () => <h1>React studying ~~~</h1>

//v18 路由写法与之前的版本不一致需要注意
const TestRouter = () => (
    <Router>
        <div>
            <h1> React 路由基础 </h1>
            <br></br>
            <Link to='/first'> <h1>页面一</h1> </Link>
            <br></br>
            <Link to='/second'> <h1>页面二</h1> </Link>
            <br></br>
            <Routes>
                <Route path='/first' element={<First />}></Route>
                <Route path='/second' element={<Home />}></Route>
                <Route path='/' element={<X/>}></Route>
            </Routes>
        </div>
    </Router>
)

    


console.log(TestRouter, Route, Link)


















//v17.0 写法
//ReactDOM.render(list, document.getElementById('root'))
//React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，而React 18 不再支持 ReactDOM.render， 使用createRoot

//1.Hello 组件使用
//createRoot(document.getElementById('root')).render(<Hello />)

//2.App 组件使用 小练习  主要设计受控组件使用  setState 赋值 等功能   map 遍历
//createRoot(document.getElementById('root')).render(<App />)


//3.组件 传值 props 使用   类组件 Test  函数组件 TestV2 传递参数类型不做限制 String Number Objec Function JXS...  props只能读 不能写
//注意：使用类组件时 如果写了构造函数  应该将props传递给super() 否则无法在构造函数中获取到props  undefind
//createRoot(document.getElementById('root')).render(<Test name="LICSLAN" age={19} />)
//createRoot(document.getElementById('root')).render(<TestV2 name="LICSLANV2" age={20} colors={['a', 'read', 'green']} fn={() => { console.log("==function test==") }} tag={<p>xxxx</p>} />)


//4.组件参数传递
//4.1 父传子
//createRoot(document.getElementById('root')).render(<Parent />)

//4.2 子传父  子传父 思路利用回调函数 父组件提供回调 子组件调用 将要传递的数据作为回调函数的参数 和 VUE 一样
//createRoot(document.getElementById('root')).render(<ParentV2 />)

//4.3 兄弟组件
//createRoot(document.getElementById('root')).render(<Counter />)

//4.4 跨组件传递
// createRoot(document.getElementById('root')).render(<AppList />)

//5.1 props  children
//createRoot(document.getElementById('root')).render(<TestV3><p>I'm the children node</p></TestV3>)

//5.2 propTypes   Failed prop type: Invalid prop `colors` of type `number` supplied to `TestV4`, expected `array`.  arr.map is not a function
//createRoot(document.getElementById('root')).render(<TestV4 colors={18}/>)
//createRoot(document.getElementById('root')).render(<TestV4 colors={[18, 19]} fn={()=>{console.log("pls print LICSLAN")}} a={1000}/>)


//6.Life cycle understanding
//6.1 createRoot(document.getElementById('root')).render(<LifeCycle />)
//6.2 createRoot(document.getElementById('root')).render(<LifeCycleV2 />)
//6.3 createRoot(document.getElementById('root')).render(<LifeCycleV3 />)


//7.组件复用 props render模式   高阶组件 High order component(包装模式增强组件功能)
// createRoot(document.getElementById('root')).render(<Lin />)
// createRoot(document.getElementById('root')).render(<Linchildren />)
//createRoot(document.getElementById('root')).render(<HighComponent />)
//createRoot(document.getElementById('root')).render(<StateUnderstanding />)
//createRoot(document.getElementById('root')).render(<TimeTest tag={1} />)
createRoot(document.getElementById('root')).render(<TestRouter />)



//ReactDOM.render(<Hello />, document.getElementById('root'))
