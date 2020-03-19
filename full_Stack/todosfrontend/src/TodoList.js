import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm'; 

const APIURL="/api/todos/";
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[]
        };this.addTodo=this.addTodo.bind(this);
    }

    componentWillMount(){
        this.loadTodos();
    }

    loadTodos(){
        fetch(APIURL)
        .then(res=>{
            if (!res.ok){
            if (res.status >=400 && res.status<500){
                return res.json().then(data=>{
                    let err={errorMessage:data.message};
                    throw err;
                })
            }else{
                let err={errorMessage:"Please try again later, Server is not responding."};
                throw err;
            }
        }
        return res.json();
    })
    .then(todos=> this.setState({todos}));
}

        addTodo(val){
            fetch(APIURL,{
                method:'post',
                headers:new Headers({
                    'Content-Type': 'application/json',
                }),
                body:JSON.stringify({name:val})
            })
        .then(res=>{
            if (!res.ok){
            if (res.status >=400 && res.status<500){
                return res.json().then(data=>{
                    let err={errorMessage:data.message};
                    throw err;
                })
            }else{
                let err={errorMessage:"Please try again later, Server is not responding."};
                throw err;
            }
        }
        return res.json();
    })
    .then(newTodo=>{
        this.setState({todos:[...this.state.todos,newTodo]})
    })
        }

    deleteTodo(id){
        const deleteUrl=APIURL+id;
        fetch(deleteUrl,{
            method:'delete',
        })
    .then(res=>{
        if (!res.ok){
        if (res.status >=400 && res.status<500){
            return res.json().then(data=>{
                let err={errorMessage:data.message};
                throw err;
            })
        }else{
            let err={errorMessage:"Please try again later, Server is not responding."};
            throw err;
     }
    }
})
.then(()=>{
    const todos=this.state.todos.filter(todo=>todo._id!==id);
    this.setState({todos:todos});
});
}


toggleTodo(todo){
    const updateUrl=APIURL+todo._id;
    fetch(updateUrl,{
            method:'put',
            headers:new Headers({
                'Content-Type': 'application/json',
            }),
            body:JSON.stringify({completed:!todo.completed})
        })
    .then(res=>{
        if (!res.ok){
        if (res.status >=400 && res.status<500){
            return res.json().then(data=>{
                let err={errorMessage:data.message};
                throw err;
            })
        }else{
            let err={errorMessage:"Please try again later, Server is not responding."};
            throw err;
     }
    }return res.json();
})

.then(updatedTodo=>{
    const todos=this.state.todos.map(t=>
        (t._id===updatedTodo._id)
        ?{...t,completed : !t.completed}
        : t
    )
    this.setState({todos:todos});
});
}


    render(){
        const todos=this.state.todos.map((t)=>(
        <TodoItem key={t._id}
        {...t} 
        onDelete={this.deleteTodo.bind(this,t._id)}
        onToggle={this.toggleTodo.bind(this,t)}/>
        ));
        return (
            <div>
                <ul>
            <h1>Todo List</h1>
            <TodoForm addTodo={this.addTodo}
            />
            {todos}
            </ul>
            </div>
        );
    }
}

export default TodoList;