// 배열 내장함수

// filter
const todos = [
    {
        id:1,
        text: 'javascript',
        done: true,
    },
    {
        id: 2,
        text: 'function',
        done: true,
    },
    {
        id: 3,
        text: 'object',
        done: true,
    },
    {
        id: 4,
        text: 'array',
        done: false
    }
];

const tasksNotDone = todos.filter(todo => todo.done===false);
console.log(tasksNotDone);