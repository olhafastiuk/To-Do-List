const base = [
  {
    id: 1,
    title: `Note 1`,
    description: "",
    date: "25 Jan 2015",
    time: "12:20:23",
    completed: false,
  },
  {
    id: 2,
    title: `Note 2`,
    description: "description",
    date: "25 Jan 2015",
    time: "12:20:23",
    completed: false,
  },
  {
    id: 3,
    title: `Note 3`,
    description: "",
    date: "25 Jan 2015",
    time: "12:20:23",
    completed: false,
  },
];

const newTask = {
  title: undefined,
  description: undefined,
};

export const tasks = (state = base, action) => {
  const n = new Date();
  const month = n.getMonth();
  const year = n.getFullYear();
  const hours = n.getHours();
  const min = n.getMinutes();
  const sec = n.getSeconds();

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
  switch (action.type) {
    case "addTask":
      const task = Object.create(newTask);
      task.id = action.id;
      newTask.title === undefined
        ? (task.title = "")
        : (task.title = newTask.title);
      newTask.title = undefined;
      newTask.description === undefined
        ? (task.description = "")
        : (task.description = newTask.description);
      newTask.description = undefined;
      task.date = `${day} ${monthArr[month]} ${year}`;
      task.time = `${hours}:${min}:${sec}`;
      task.completed = false;

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
        state = state.map(function (el) {
          if (el.id === action.id) {
            if (newTask.title != undefined) {
              if (el.title === newTask.title) {
                el.title = newTask.title;
              } else {
                el.title = newTask.title;
                el.date = `${day} ${monthArr[month]} ${year}`;
                el.time = `${hours}:${min}:${sec}`;
                el.completed = false;
              }

              newTask.title = undefined;
            }
            if (newTask.description != undefined) {
              if (el.description === newTask.description) {
                el.description = newTask.description;
              } else {
                el.description = newTask.description;
                el.date = `${day} ${monthArr[month]} ${year}`;
                el.time = `${hours}:${min}:${sec}`;
                el.completed = false;
              }
              newTask.description = undefined;
            }
          }
          return el;
        });
      }
      return state;

    default:
      return state;
  }
};

export default tasks;
