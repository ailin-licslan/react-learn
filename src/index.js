import React from 'react'
import  ReactDOM   from 'react-dom'

const name = 'LICSLAN'


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
        return  <div>test calss</div>
    }

}

//ReactDOM.render(title, document.getElementById('root'))


ReactDOM.render(<Hello />, document.getElementById('root'))
