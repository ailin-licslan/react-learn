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
class Hello extends React.Component{


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
        count: 0
    }

    render(){
        return  <div>test calss, hello react, 有状态的组件</div>
    }

}
console.log(Hello)



const songs = [
    {id:1, name:'vue1'},
    {id:2, name:'vue2'},
    {id:3, name:'vue3'}
]


const list = (
    <ul>
        {
            songs.map(item=><li key={item.id}>{item.name}</li>)
        }
    </ul>
)
   
console.log(list)

//v17.0

//ReactDOM.render(list, document.getElementById('root'))

//React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，而React 18 不再支持 ReactDOM.render，
createRoot(document.getElementById('root')).render(<Hello />)



//ReactDOM.render(<Hello />, document.getElementById('root'))
