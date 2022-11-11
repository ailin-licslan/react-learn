import React from 'react'
//import  ReactDOM   from 'react-dom'
import { createRoot } from 'react-dom/client'

const name = 'LICSLAN'


//JXS
const title = (
    <h1>hello {name}, You are learning react!</h1>
)

console.log(title);


//函数组件
function Name() {
    return (
        <div>test</div>
    )
}

console.log(Name());


//类组件
class Hello extends React.Component{

    render(){
        return  <div>test calss, hello react</div>
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
   


//v17.0

//ReactDOM.render(list, document.getElementById('root'))

//React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，而React 18 不再支持 ReactDOM.render，
createRoot(document.getElementById('root')).render(list)



//ReactDOM.render(<Hello />, document.getElementById('root'))
