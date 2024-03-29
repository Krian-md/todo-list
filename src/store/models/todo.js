export default {
  actions: {
    async fetchTodos(context, limit = 5) {
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=' + limit,
        );
        // const res = await fetch('https://.typicode.com/todos?_limit=' + limit);

        const todos = await res.json();

        context.commit('updateTodos', todos);
      } catch (error) {
        context.commit('setMessage', error.message);
      }
    },
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    createTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    deleteTodo(state, id) {
      state.todos.splice(findIndexOf(state, id), 1);
    },
    doneTodo(state, id) {
      let todo = state.todos[findIndexOf(state, id)];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  state: {
    todos: [],
  },
  getters: {
    validTodos(state) {
      return state.todos.filter((todo) => {
        return todo.title;
      });
    },
    allTodos(state) {
      return state.todos;
    },
  },
};

function findIndexOf(state, id) {
  return state.todos.findIndex((todo) => todo.id === id);
}
