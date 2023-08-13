import { projectLists } from "./projects";
import isThisISOWeek from "date-fns/isThisISOWeek";

let projectItems = document.querySelectorAll(".project");
const projectSection = document.querySelector(".projects-section");
const homeItems = document.querySelectorAll(".home");
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const addProject = document.querySelector(".add-project");
const newProject = document.querySelector(".new-project");
const newProjectName = document.querySelector(".new-project-name");
const addBtn = document.querySelector(".done");
const cancelBtn = document.querySelector(".cancel");
const projectHeader = document.querySelector(".project-header");
const projectTasks = document.querySelector(".project-tasks");
const addTaskSection = document.querySelector(".add-task");
const newTaskSection = document.querySelector(".new-task");
const taskAddBtn = document.querySelector(".task-add-btn");
const taskCancelBtn = document.querySelector(".task-cancel-btn");
const newTaskHeader = document.querySelector(".new-task-header");
const newTaskDetails = document.querySelector(".new-task-details");
const newTaskDate = document.querySelector(".new-task-date");
const allTasks = document.querySelector(".all-tasks");
const todayTasks = document.querySelector(".today");
const thisWeekTasks = document.querySelector(".this-week");
const importantTasks = document.querySelector(".important");
const noTasks = document.querySelector(".no-tasks");

const clickEvent = new Event("click");
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Adding a leading zero if needed
const day = today.getDate().toString().padStart(2, "0"); // Adding a leading zero if needed
const todayDate = `${year}-${month}-${day}`;

export default function handleRendering() {
  renderLocalTasks();
  renderStorageProjects();
  renderSelectionBar();
  menuController();
  addNewProject();
  renderProjectHeader();
  addNewTask();
  handleTaskAdd();
  handleTaskcancel();
  handleTaskCheck();
  storeCompletionStat();
  storeImportanceStat();
  handleTaskAddSec();
  renderProjectTasks();
  renderAllTasks();
  renderTodayTasks();
  renderThisWeek();
  renderImportant();
  projectPopUpOptions();
  taskPopUpOptions();
  deleteProject();
  renameProject();
  deleteTask();
  editTask();
}

function renderSelectionBar() {
  const homeArray = Array.from(homeItems);
  const projectArray = Array.from(projectItems);
  projectArray.push(...homeArray);
  projectArray.forEach((item) => {
    item.addEventListener("click", (e) => {
      projectArray.forEach((arrayItem) => {
        arrayItem.classList.remove("selected");
      });
      item.classList.add("selected");
    });
  });
}

function menuController() {
  menuBtn.addEventListener("click", (e) => {
    sideBar.classList.toggle("hidden");
  });
}

function addNewProject() {
  addProject.addEventListener("click", (e) => {
    newProject.classList.remove("hidden");
  });
  handleProjectAdd();
  handleProjectCancel();
  renderSelectionBar();
  renderProjectHeader();
}

function handleProjectAdd() {
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newProject.classList.add("hidden");
    const cloneNode = projectSection.querySelector(".project.hidden").cloneNode(true);
    cloneNode.classList.remove("hidden");
    cloneNode.querySelector(".project-name").textContent = newProjectName.value;
    projectSection.insertBefore(cloneNode, newProject);
    newProjectName.value = "";
    projectItems = document.querySelectorAll(".project");
    renderSelectionBar();
    renderProjectHeader();
  });
}

function handleProjectCancel() {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newProjectName.value = "";
    newProject.classList.add("hidden");
  });
}

function renderProjectHeader() {
  const homeArray = Array.from(homeItems);
  const projectArray = Array.from(projectItems);
  projectArray.push(...homeArray);
  projectArray.forEach((item) => {
    if (item.classList.contains("selected") && projectHeader.textContent === "") {
      projectHeader.textContent = item.querySelector(".title").textContent;
    }
    item.addEventListener("click", (e) => {
      if (item.classList.contains("selected")) {
        projectHeader.textContent = item.querySelector(".title").textContent;
      }
    });
  });
}

function addNewTask() {
  addTaskSection.addEventListener("click", (e) => {
    newTaskSection.querySelector(".new-task-header").value = "";
    newTaskSection.querySelector(".new-task-details").value = "";
    newTaskSection.querySelector(".new-task-date").value = "";
    newTaskSection.classList.remove("hidden");
  });
}

function handleTaskCheck() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("dynamic-mark")) {
      e.target.classList.toggle("checked");
      e.target.closest(".task").classList.toggle("completed");
    } else if (e.target.classList.contains("star-outline")) {
      if (e.target.closest(".star").querySelector(".filled-star").classList.contains("star-unselected")) {
        e.target.closest(".star").querySelector(".filled-star").classList.remove("star-unselected");
      }
    } else if (e.target.classList.contains("filled-star")) {
      if (!e.target.closest(".star").querySelector(".filled-star").classList.contains("star-unselected")) {
        e.target.closest(".star").querySelector(".filled-star").classList.add("star-unselected");
      }
    }
  });
}

function handleTaskAdd() {
  taskAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskSection.classList.add("hidden");
    const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
    cloneTaskNode.classList.remove("hidden");
    cloneTaskNode.classList.add("rendered-task");
    cloneTaskNode.querySelector(".task-header").textContent = newTaskHeader.value;
    cloneTaskNode.querySelector(".task-details").textContent = newTaskDetails.value;
    if (newTaskDate.value !== "") {
      cloneTaskNode.querySelector(".date-info").textContent = newTaskDate.value;
    } else cloneTaskNode.querySelector(".date-info").textContent = "No Due Date";
    projectTasks.insertBefore(cloneTaskNode, newTaskSection);
  });
}

function handleTaskcancel() {
  taskCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskSection.classList.add("hidden");
  });
}

function handleTaskAddSec() {
  homeItems.forEach((homeDiv) => {
    homeDiv.addEventListener("click", (e) => {
      addTaskSection.classList.add("hidden");
    });
  });

  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("trigger-task")) {
      addTaskSection.classList.remove("hidden");
    }
  });
}

function renderProjectTasks() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("trigger-task")) {
      noTasks.classList.add("hidden");
      clearProjectTasks();
      const projectName = projectHeader.textContent;
      projectLists.forEach((listItem) => {
        if (listItem.title === projectName && listItem.taskLists.length !== 0) {
          for (let i = 0; i < listItem.taskLists.length; i++) {
            const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
            cloneTaskNode.classList.remove("hidden");
            cloneTaskNode.classList.add("rendered-task");
            cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
            cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
            cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
            if (listItem.taskLists[i].completionStatus) {
              cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
              cloneTaskNode.classList.add("completed");
            }
            if (listItem.taskLists[i].importance) {
              cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
            }
            projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          }
        }
      });
    }
  });
}

function clearProjectTasks() {
  const redneredTaskNode = projectTasks.querySelectorAll(".rendered-task");
  redneredTaskNode.forEach((node) => {
    projectTasks.removeChild(node);
  });
}

function renderAllTasks() {
  allTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
        cloneTaskNode.classList.remove("hidden");
        cloneTaskNode.classList.add("rendered-task");
        cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
        cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
        cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
        if (listItem.taskLists[i].completionStatus) {
          cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
          cloneTaskNode.classList.add("completed");
        }
        if (listItem.taskLists[i].importance) {
          cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
        }
        projectTasks.insertBefore(cloneTaskNode, newTaskSection);
        taskFlag++;
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }
  });
}

function renderTodayTasks() {
  todayTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        if (listItem.taskLists[i].date === todayDate) {
          const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
          cloneTaskNode.classList.remove("hidden");
          cloneTaskNode.classList.add("rendered-task");
          cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
          cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
          cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
          if (listItem.taskLists[i].completionStatus) {
            cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
            cloneTaskNode.classList.add("completed");
          }
          if (listItem.taskLists[i].importance) {
            cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
          }
          projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          taskFlag++;
        }
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }
  });
}

function renderThisWeek() {
  thisWeekTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        const itemDate = listItem.taskLists[i].date;
        const [year, month, day] = itemDate.split("-").map(Number);
        const itemArgDate = new Date(year, month - 1, day);
        if (isThisISOWeek(itemArgDate)) {
          const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
          cloneTaskNode.classList.remove("hidden");
          cloneTaskNode.classList.add("rendered-task");
          cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
          cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
          cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
          if (listItem.taskLists[i].completionStatus) {
            cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
            cloneTaskNode.classList.add("completed");
          }
          if (listItem.taskLists[i].importance) {
            cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
          }
          projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          taskFlag++;
        }
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }
  });
}

function renderImportant() {
  importantTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        if (listItem.taskLists[i].importance) {
          const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
          cloneTaskNode.classList.remove("hidden");
          cloneTaskNode.classList.add("rendered-task");
          cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
          cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
          cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
          if (listItem.taskLists[i].completionStatus) {
            cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
            cloneTaskNode.classList.add("completed");
          }
          if (listItem.taskLists[i].importance) {
            cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
          }
          projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          taskFlag++;
        }
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }

    projectTasks.addEventListener("click", (e) => {
      if (e.target.classList.contains("filled-star")) {
        sideBar.querySelector(".selected").dispatchEvent(clickEvent);
      }
    });
  });
}

function storeCompletionStat() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("dynamic-mark")) {
      const checkedHeader = e.target.closest(".task").querySelector(".task-header").textContent;
      if (e.target.classList.contains("checked")) {
        projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].completionStatus = true;
            }
          }
        });
      } else {
        projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].completionStatus = false;
            }
          }
        });
      }
      localStorage.setItem("projectLists", JSON.stringify(projectLists));
    }
  });
}

function storeImportanceStat() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("star-outline")) {
      let checkedHeader = e.target.closest(".task").querySelector(".task-header").textContent;
      let testNode = e.target.closest(".star").querySelector(".filled-star");
      if (!testNode.classList.contains("star-unselected")) {
        projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].importance = true;
            }
          }
        });
      }
      localStorage.setItem("projectLists", JSON.stringify(projectLists));
    } else if (e.target.classList.contains("filled-star")) {
      let checkedHeader = e.target.closest(".task").querySelector(".task-header").textContent;
      let testNode = e.target.closest(".star").querySelector(".filled-star");
      if (testNode.classList.contains("star-unselected")) {
        projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].importance = false;
            }
          }
        });
      }
      localStorage.setItem("projectLists", JSON.stringify(projectLists));
    }
  });
}

function projectPopUpOptions() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("more-options")) {
      const nodePopUp = e.target.closest(".project").querySelector(".options-popup");
      if (!nodePopUp.classList.contains("hidden")) {
        e.target.closest(".project").querySelector(".options-popup").classList.toggle("hidden");
      } else {
        clearPopUps();
        e.target.closest(".project").querySelector(".options-popup").classList.toggle("hidden");
      }
    }
  });
}

function taskPopUpOptions() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("more-options")) {
      const nodePopUp = e.target.closest(".task").querySelector(".task-options-popup");
      if (!nodePopUp.classList.contains("hidden")) {
        e.target.closest(".task").querySelector(".task-options-popup").classList.toggle("hidden");
      } else {
        clearPopUps();
        e.target.closest(".task").querySelector(".task-options-popup").classList.toggle("hidden");
      }
    }
  });
}

function clearPopUps() {
  const optionsPopUp = document.querySelectorAll(".options-popup");
  optionsPopUp.forEach((popup) => {
    popup.classList.add("hidden");
  });
}

function deleteProject() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-project")) {
      const projectNode = e.target.closest(".options-popup").parentNode;
      const projectName = projectNode.querySelector(".project-name").textContent;
      for (let i = 0; i < projectLists.length; i++) {
        if (projectLists[i].title === projectName) {
          projectLists.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem("projectLists", JSON.stringify(projectLists));
      projectSection.removeChild(projectNode);
      allTasks.dispatchEvent(clickEvent);
    }
  });
}

function deleteTask() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
      const taskNode = e.target.closest(".task-options-popup").parentNode;
      const taskName = taskNode.querySelector(".task-header").textContent;
      projectLists.forEach((project) => {
        for (let i = 0; i < project.taskLists.length; i++) {
          if (project.taskLists[i].taskTitle === taskName) {
            project.taskLists.splice(i, 1);
            break;
          }
        }
      });
      localStorage.setItem("projectLists", JSON.stringify(projectLists));
      projectTasks.removeChild(taskNode);
    }
  });
}

function renameProject() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("rename")) {
      const projectNode = e.target.closest(".options-popup").parentNode;
      const projectName = projectNode.querySelector(".project-name").textContent;
      const renameNode = projectSection.querySelector(".rename-project").cloneNode(true);
      projectNode.classList.add("hidden");
      renameNode.classList.remove("hidden");
      projectNode.insertAdjacentElement("afterend", renameNode);
      const renameBtn = renameNode.querySelector(".rename-done");
      const cancelBtn = renameNode.querySelector(".cancel");

      renameNode.querySelector("input").value = projectName;

      renameNode.querySelector("input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          renameBtn.click();
        }
      });

      renameBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        const newName = renameNode.querySelector("input").value;
        projectNode.querySelector(".project-name").textContent = newName;
        projectLists.forEach((item) => {
          if (item.title === projectName) {
            item.title = newName;
            localStorage.setItem("projectLists", JSON.stringify(projectLists));
          }
        });
        projectSection.removeChild(renameNode);
        projectNode.classList.remove("hidden");
        projectNode.dispatchEvent(clickEvent);
      });

      cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        projectSection.removeChild(renameNode);
        projectNode.classList.remove("hidden");
        projectNode.dispatchEvent(clickEvent);
      });
    }
  });
}

function editTask() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      const taskNode = e.target.closest(".task-options-popup").parentNode;
      const taskName = taskNode.querySelector(".task-header").textContent;
      const taskDetails = taskNode.querySelector(".task-details").textContent;
      const dueDate = taskNode.querySelector(".date-info").textContent;
      const editTaskNode = newTaskSection.cloneNode(true);
      const editDoneBtn = editTaskNode.querySelector(".done");
      const editCancelBtn = editTaskNode.querySelector(".cancel");

      editTaskNode.classList.remove("hidden");
      taskNode.classList.add("hidden");

      editTaskNode.querySelector(".new-task-header").value = taskName;
      editTaskNode.querySelector(".new-task-details").value = taskDetails;
      editTaskNode.querySelector(".new-task-date").value = dueDate;

      taskNode.insertAdjacentElement("afterend", editTaskNode);

      editDoneBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        const newName = editTaskNode.querySelector(".new-task-header").value;
        const newDetails = editTaskNode.querySelector(".new-task-details").value;
        let newDate;
        if (editTaskNode.querySelector(".new-task-date").value === "") {
          newDate = "No Due Date";
        } else {
          newDate = editTaskNode.querySelector(".new-task-date").value;
        }

        projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === taskName) {
              project.taskLists[i].taskTitle = newName;
              project.taskLists[i].details = newDetails;
              project.taskLists[i].date = newDate;
            }
          }
        });

        taskNode.querySelector(".task-header").textContent = newName;
        taskNode.querySelector(".task-details").textContent = newDetails;
        taskNode.querySelector(".date-info").textContent = newDate;
        projectTasks.removeChild(editTaskNode);
        taskNode.classList.remove("hidden");
        localStorage.setItem("projectLists", JSON.stringify(projectLists));
        sideBar.querySelector(".selected").dispatchEvent(clickEvent);
      });

      editCancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        taskNode.classList.remove("hidden");
        projectTasks.removeChild(editTaskNode);
      });
    }
  });
}

function renderStorageProjects() {
  projectLists.forEach((projects) => {
    const cloneNode = projectSection.querySelector(".project.hidden").cloneNode(true);
    cloneNode.classList.remove("hidden");
    cloneNode.querySelector(".project-name").textContent = projects.title;
    projectSection.insertBefore(cloneNode, newProject);
    projectItems = document.querySelectorAll(".project");
    renderSelectionBar();
    renderProjectHeader();
  });
}

function renderLocalTasks() {
  let taskFlag = 0;
  projectLists.forEach((listItem) => {
    for (let i = 0; i < listItem.taskLists.length; i++) {
      const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
      cloneTaskNode.classList.remove("hidden");
      cloneTaskNode.classList.add("rendered-task");
      cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
      cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
      cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
      if (listItem.taskLists[i].completionStatus) {
        cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
        cloneTaskNode.classList.add("completed");
      }
      if (listItem.taskLists[i].importance) {
        cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
      }
      projectTasks.insertBefore(cloneTaskNode, newTaskSection);
      taskFlag++;
    }
  });
  if (taskFlag === 0) {
    noTasks.classList.remove("hidden");
  }
}
