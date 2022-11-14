import React from 'react'
//import  ReactDOM   from 'react-dom'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'



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
//生命周期： 一个组件从被创建到挂载到页面运行  再到组件不用时卸载的过程  生命周期的每个阶段总是伴随着一些方法的调用  这些方法就是生命周期的钩子函数  （同VUE 很像  感觉像是谁在模仿或者借鉴谁 ^_^）























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
createRoot(document.getElementById('root')).render(<TestV4 colors={[18, 19]} fn={()=>{console.log("pls print LICSLAN")}} a={1000}/>)


//ReactDOM.render(<Hello />, document.getElementById('root'))
