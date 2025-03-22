import chalk from "chalk";
import todos from "./todo.js";

function printTodos(){
    todos.forEach(todos=> {
        if(todos.isDone){
            console.log(chalk.green(todos.title));
            
        }else {
            console.log(chalk.red(todos.title));
            
        }
    
});
}

export default printTodos;