let projectItems = document.querySelectorAll(".project");
const homeItems = document.querySelectorAll(".home");
const addBtn = document.querySelector(".done");
const projectHeader = document.querySelector(".project-header");
const projectContent = document.querySelector(".project-content");
const newTaskHeader = document.querySelector(".new-task-header");
const newTaskDetails = document.querySelector(".new-task-details");
const newTaskDate = document.querySelector(".new-task-date");
const taskAddBtn = document.querySelector(".task-add-btn");
const newProjectName = document.querySelector(".new-project-name");
const projectTasks = document.querySelector(".project-tasks");

const homeArray = Array.from(homeItems);
let projectArray = Array.from(projectItems);

export let projectLists = JSON.parse(localStorage.getItem("projectLists")) || [];

export default function handleProjects() {
  storeProject();
  storeTasks();
}

function task(taskTitle, details, date, importance, completionStatus) {
  return {
    taskTitle,
    details,
    date,
    importance,
    completionStatus,
  };
}

function project(title) {
  let taskLists = [];
  function addTask(taskTitle, details, date, importance, completionStatus) {
    const newTask = task(taskTitle, details, date, importance, completionStatus);
    taskLists.push(newTask);
  }

  return {
    title,
    taskLists,
    addTask,
  };
}

function addTask(project, taskTitle, details, date, importance, completionStatus) {
  const newTask = task(taskTitle, details, date, importance, completionStatus);
  project.taskLists.push(newTask);
}

projectLists.forEach((project) => {
  if (!project.addTask) {
    project.addTask = function (taskTitle, details, date, importance, completionStatus) {
      addTask(this, taskTitle, details, date, importance, completionStatus);
    };
  }
});

function storeProject() {
  addBtn.addEventListener("click", (e) => {
    const projectName = newProjectName.value;
    const projectListItem = project(projectName);
    projectLists.push(projectListItem);
    localStorage.setItem("projectLists", JSON.stringify(projectLists));
  });
}

function storeTasks() {
  taskAddBtn.addEventListener("click", (e) => {
    projectLists.forEach((project) => {
      if (projectHeader.textContent === project.title) {
        const taskTitle = newTaskHeader.value;
        const details = newTaskDetails.value;
        let date;
        if (newTaskDate.value !== "") {
          date = newTaskDate.value;
        } else date = "No Due Date";
        console.log(project);
        project.addTask(taskTitle, details, date, false, false);
        localStorage.setItem("projectLists", JSON.stringify(projectLists));
      }
    });
  });
}
