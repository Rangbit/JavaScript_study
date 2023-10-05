let input =  prompt("What would you like to do?");
const todos = ['todo 1', 'todo 2'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("******************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i+1}: ${todos[i]}`);
        }
        console.log("******************");
    } else if (input === 'new'){
        const newTodo = prompt('what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list;`);
    } else if (input === 'delete'){
        const index = parseInt(prompt('Enter the index number'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index-1, 1);
            console.log(`${deleted} delete success`);
        }
    } else {

    }
    input =  prompt("What would you like to do?");
}

console.log("Quit the app");

