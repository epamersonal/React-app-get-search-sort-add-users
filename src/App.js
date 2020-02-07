// import React, {Component} from 'react';

// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }
//   componentDidMount() {
//     fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         })
//       });
//   }
  
//   render() {
//     let {isLoaded, items} = this.state;
//     if (!isLoaded) {
//       return <img class='preloader' src='preloader.gif' alt='Загрузка....'/>
//     }
//     else {
//       return (
//         <div className='App'>
//           <table>
//             <thead>
//               <tr>
//                 <td>id</td>
//                 <td>firstName</td>
//                 <td>lastName</td>
//                 <td>Email</td>
//                 <td>Phone</td>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map(item=> (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.firstName}</td>
//                   <td>{item.lastName}</td> 
//                   <td>{item.email}</td> 
//                   <td>{item.phone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )
//     }
//   }
// }

// export default App;


import React, { Component } from 'react';
import Bootstrap from './components/Bootstrap';


export default class App extends Component {
  render() {
    return (
        <Bootstrap />
    );
  }
}


// import React, { useState, useEffect } from 'react';
// import Bootstrap from './components/Bootstrap';
// import Posts from './components/Posts';
// import Pagination from './components/Pagination';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(6);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className='container mt-5'>
//       <h1 className='text-primary mb-3'>My Blog</h1>
//       <Posts posts={currentPosts} loading={loading} />
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       />
//       <Bootstrap />
//     </div>
//   );
// };

// export default App;



// import React, { Component } from 'react';
// import './App.css';
// import Axios from 'axios';

// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       userId: 1,
//       data: []
//     }

//     this.getData = this.getData.bind(this)
//   }
  
//   getData() {
//     const { userId } = this.state
//     Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then(json => {
//       console.log(json.data)
//       this.setState({
//         data: json.data
//       })
//     })
//     .catch(e => {
//       console.error(e)
//     })
//   }

//   componentDidMount() {
//     this.getData()
//   }

//   render() {
//     return (
//       <div className="App">

//       </div>
//     );
//   }
// }

// const UserIdComponent = (props)

// export default App;





// class TodoApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ['a','b','c','d','e','f','g','h','i','j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'],
//       currentPage: 1,
//       todosPerPage: 3
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }

//   render() {
//     const { todos, currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.map((todo, index) => {
//       return <li key={index}>{todo}</li>;
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul>
//           {renderTodos}
//         </ul>
//         <ul id="page-numbers">
//           {renderPageNumbers}
//         </ul>
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('app')
// );





// <UserList callback={this.handleClick.bind(this)} users={this.state.users} />


// const todos = [
//   { id: 1, text: "Go to the gym", completed: false },
//   { id: 2, text: "Do laundry", completed: false },
//   { id: 3, text: "Study for exams", completed: false },
//   { id: 4, text: "Read a book", completed: false },
//   { id: 5, text: "Clean the bedroom", completed: false },
//   { id: 6, text: "Go to the park", completed: false }
// ];

// class TodoList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todoItems: todos,
//       newItem: ""
//     };
//   }

//   addItem = event => {
//     event.preventDefault();
//     this.setState(prevState => {
//       return {
//         todoItems: [
//           ...prevState.todoItems,
//           { id: Math.random(), text: prevState.newItem, completed: false }
//         ],
//         newItem: ""
//       };
//     });
//   };

//   handleInput = event => {
//     this.setState({ newItem: event.target.value });
//   };

//   render() {
//     const itenary = this.state.todoItems;
//     return (
//       <div>
//         {itenary.map(todo => (
//           <div key={todo.id}>
//             <Todo handleClick={this.props.handleClick} thing={todo} />
//           </div>
//         ))}
//         <br />
//         <form onSubmit={this.addItem}>
//           <input
//             type="text"
//             onChange={this.handleInput}
//             value={this.state.newItem}
//             placeholder="Add a new task"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// class Todo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       clicked: false
//     };
//   }

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   render() {
//     const styles = this.state.clicked
//       ? { textDecoration: "line-through" }
//       : { textDecoration: "none" };
//     return (
//       <div style={styles} onClick={this.handleClick} key={this.props.thing.id}>
//         {this.props.thing.text}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<TodoList />, document.getElementById("root"));




