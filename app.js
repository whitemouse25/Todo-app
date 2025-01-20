const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', async () => {
    const taskText = sanitizeInput(taskInput.value.trim());
    if (taskText) {
        await addTaskToFirestore(taskText);
        renderTasks();
        taskInput.value = "";
    }
});

async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "todos"), {
        text: taskText,
        completed: false
    });
}

async function renderTasks() {
    const tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";
    tasks.forEach(task => {
        if (!task.data().completed) {
            const taskItem = document.createElement("li");
            taskItem.id = task.id;
            taskItem.textContent = task.data().text;
            taskList.appendChild(taskItem);
        }
    });
}

async function getTasksFromFirestore() {
    const data = await getDocs(collection(db, "todos"));
    return data.docs;
}

// Remove Task on Click
taskList.addEventListener('click', async (e) => {
    if (e.target.tagName === 'LI') {
        await removeTaskFromFirestore(e.target.id);
        renderTasks();
    }
});

async function removeTaskFromFirestore(taskId) {
    await deleteDoc(doc(db, "todos", taskId));
}

function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}

