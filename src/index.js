import React from 'react'
//import  ReactDOM   from 'react-dom'
import { createRoot } from 'react-dom/client'

const name = 'LICSLAN'

//JXS 
const title = (
    <h1>hello {name}, You are learning react!</h1>
)
console.log(title);


//函数组件  方法名必须大写!!!
function Name() {
    return (
        <div>test</div>
    )
}
console.log(Name());


//类组件  有 state 值  动态可以改变的属性
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

//受控组件  React将state与表单值value绑定到一起，由state的值来控制表单元素的值
//给表单绑定onchange 事件将表单的值设置为state的值   控制表单元素值的变化


const songs = [
    { id: 1, name: 'vue1' },
    { id: 2, name: 'vue2' },
    { id: 3, name: 'vue3' }
]


const list = (
    <ul>
        {
            songs.map(item => <li key={item.id}>{item.name}</li>)
        }
    </ul>
)
console.log(list)








// 小练习  APP 组件 使用受控组件 完成任务  map的遍历等

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


        if (userName.trim()==='' || content.trim()===''){
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
            userName:'',
            content:''
        })
        console.log("=== The List length have no change here ======>",conmments, userName, content)
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



                {this.renList()}




            </div>



        )
    }

}

console.log(App)




//v17.0

//ReactDOM.render(list, document.getElementById('root'))

//React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，而React 18 不再支持 ReactDOM.render，

//Hello 组件使用
//createRoot(document.getElementById('root')).render(<Hello />)

//App 组件使用 小练习
createRoot(document.getElementById('root')).render(<App />)


//ReactDOM.render(<Hello />, document.getElementById('root'))
