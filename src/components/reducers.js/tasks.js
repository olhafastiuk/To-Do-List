const base = [
  {
    id: 1,
    title: `Note 1`,
    description: "",
    time: `25 Jan 2015`,
    completed: false,
  },
  {
    id: 2,
    title: `Note 2`,
    description: "jsavc",
    time: `25 Jan 2015`,
    completed: false,
  },
  {
    id: 3,
    title: `Note 3`,
    description: "",
    time: `25 Jan 2015`,
    completed: false,
  },
];

const n = new Date();
const month = n.getMonth();
const year = n.getFullYear();
const monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = n.getDate();
const newTask = {
  title: undefined,
  description: undefined,
  completed: false,
};

const tasks = (state = base, action) => {
  switch (action.type) {
    case "addTask":
      const task = Object.create(newTask);
      task.title = newTask.title;
      newTask.title = undefined;
      task.description = newTask.description;
      newTask.description = undefined;
      task.id = action.id;
      task.time = `${day} ${monthArr[month]} ${year}`;

      return [...state, task];
    case "done":
      return state.concat([]);
    case "done":
      return state.forEach((el) =>
        el.id === action.id
          ? (el.completed = !el.completed)
          : (el.completed = el.completed)
      );
    case "deleteTask":
      return state.filter((el) => el.id !== action.task);
    case "title":
      newTask.title = action.title;
      return state;
    case "description":
      newTask.description = action.description;
      return state;

    case "edit":
      {
      }
      return state.forEach(function (el) {
        if (el.id === action.id) {
          if (newTask.title != undefined) {
            el.title = newTask.title;
            el.time = `${day} ${monthArr[month]} ${year}`;

            newTask.title = undefined;
          }
          if (newTask.description != undefined) {
            el.description = newTask.description;
            el.time = `${day} ${monthArr[month]} ${year}`;

            newTask.description = undefined;
          }
        }
      });

    default:
      return state;
  }
};

export default tasks;
