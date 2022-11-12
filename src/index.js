import React from 'react'
//import  ReactDOM   from 'react-dom'
import { createRoot } from 'react-dom/client'

const name = 'LICSLAN'


//JXS
const title = (
    <h1>hello {name}, You are learning react!</h1>
)

console.log(title);


//函数组件  方法名必须大写  
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
        city: 'wh'
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
    handleCity = (e)=>{
        this.setState({
            city: e.target.value
        })
    }

    constructor() {
        super()
        this.onIncrement = this.onIncrement.bind(this)
    }

    render() {
        return (
            <div>


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

                    {/* 受控组件 */}
                    输入： <input type="text" value={this.state.txt} onChange={this.handleChange} placeholder="pls input sth" />



                </div>

                <hr></hr>
                <div>

                    富文本：<textarea value={this.state.test} onChange={this.handleContent}></textarea>
                </div>

                <hr></hr>
                <select value={this.state.city} onChange={this.handleCity}>
                    <option value='sh'>上海</option>
                    <option value='wh'>武汉</option>
                    <option value='bj'>北京</option>
                </select>


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

//v17.0

//ReactDOM.render(list, document.getElementById('root'))

//React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，而React 18 不再支持 ReactDOM.render，
createRoot(document.getElementById('root')).render(<Hello />)



//ReactDOM.render(<Hello />, document.getElementById('root'))
