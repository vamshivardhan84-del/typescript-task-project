let nextId = 1;
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
export function completeTask(tasks, id) {
    return tasks.map(function (task) {
        if (task.id === id) {
            return { ...task, status: "done" };
        }
        return task;
    });
}
export function filterByStatus(tasks, status) {
    return tasks.filter(function (task) {
        return task.status === status;
    });
}
export function deleteTask(tasks, id) {
    return tasks.filter(function (task) {
        return task.id !== id;
    });
}
