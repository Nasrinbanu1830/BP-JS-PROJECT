const saveChanges = () => {
    const taskData = {
        id:'${Date.now()}',
        imageUrl: document.getElementById("imageUrl"),
        taskTitle: document.getElementById("tasktitle"),
        tastType: document.getElementById("tasktype"),
        taskDescription: document.getElementById("taskdescription"),
    };
    console.log(taskData);
};
