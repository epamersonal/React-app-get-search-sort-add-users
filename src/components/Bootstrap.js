import React, { Component } from 'react';
import ActiveUser from './Activeuser';
import Buttonsort from './Buttonsort';
import Search from './Search';
import '../App.css';

class Bootstrap extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            newFirstName: "",
            newLastName: "",
            newEmail: "",
            newPhone: "",
            activeUser: [],
            isLoaded: false,
            currentPage: 1,
            usersPerPage: 10
        };
        this.handle = this.handle.bind(this);
    }
    handle(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    addNewUser = event => {
        event.preventDefault();
        this.setState(prevState => {
          return {
            users: [
              { id: Math.floor(Math.random()*100), firstName: prevState.newFirstName, lastName: prevState.newLastName, email: prevState.newEmail, phone: prevState.newPhone}, ...prevState.users
            ],
            newFirstName: "",
            newLastName: "",
            newEmail: "",
            newPhone: ""
          };
        });
      };
    
    handleFirstName = event => {
    this.setState({ newFirstName: event.target.value });
    };
    handleLastName = event => {
        this.setState({newLastName: event.target.value});
    }
    handleEmail = event => {
        this.setState({newEmail: event.target.value});
    }
    handlePhone = event => {
        this.setState({newPhone: event.target.value});
    }

    componentDidMount() {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}', true);

        request.onload = () => {
            if(request.status >= 200) {

                let users = JSON.parse(request.responseText);
                this.setState({
                    users: users,
                    activeUser: users[0],
                    isLoaded: true,
                });
            }
        }

        request.onerror = () => {
            console.log('Something is wrong with this XMLHttpRequest');
        }

        request.send();
    }

    handleClick(uid) {
        this.updateActiveUser(this.getUserById(uid));
    }

    handleSearch(value) {
        this.searchUsers(value);
    }

    handleSorting(value, direction) {

        let users = this.state.users;

        switch(value) {
            case "id":
                users = users.sort((a, b) => a.id > b.id);
                break;
            case "firstName":
                users = users.sort((a, b) => a.firstName > b.firstName);
                break;
            case "lastName":
                users = users.sort((a, b) => a.lastName > b.lastName);
                break;
            case "email":
                users = users.sort((a, b) => a.email > b.email);
                break;
            case "phone":
                users = users.sort((a, b) => a.phone > b.phone);
                break;
        }

        if ("id" === value) {
            switch(direction) {
                case "forward":
                    users = users.sort((a, b) => {
                        if (a.id > b.id) {
                            return 1;
                        } else if (a.id < b.id) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "backward":
                    users = users.sort((a, b) => {
                        if (a.id < b.id) {
                            return 1;
                        } else if (a.id > b.id) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
            }
        }
        else if ("firstName" === value) {
            switch (direction) {
                case "forward":
                    users = users.sort((a, b) => {
                        if (a.firstName > b.firstName) {
                            return 1;
                        } else if (a.firstName < b.firstName) {
                            return -1;
                        }

                        return 0;
                    });
                    break;
                case "backward":
                    users = users.sort((a, b) => {
                        if (a.firstName < b.firstName) {
                            return 1;
                        } else if (a.firstName > b.firstName) {
                            return -1;
                        }

                        return 0;
                    });
                    break;
            }
        } else if ("lastName" === value) {
            switch (direction) {
                case "forward":
                    users = users.sort((a, b) => {
                        if (a.lastName > b.lastName) {
                            return 1;
                        } else if (a.lastName < b.lastName) {
                            return -1;
                        }

                        return 0;
                    });
                    break;
                case "backward":
                    users = users.sort((a, b) => {
                        if (a.lastName < b.lastName) {
                            return 1;
                        } else if (a.lastName > b.lastName) {
                            return -1;
                        }

                        return 0;
                    });
                    break;
            }
        } else if ("email" === value) {
            switch(direction) {
                case "forward":
                    users = users.sort((a, b) => {
                        if (a.email > b.email) {
                            return 1;
                        } else if (a.email < b.email) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "backward":
                    users = users.sort((a, b) => {
                        if (a.email < b.email) {
                            return 1;
                        } else if (a.email > b.email) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
            }
        } else if ("phone" === value) {
            switch(direction) {
                case "forward":
                    users = users.sort((a, b) => {
                        if (a.phone > b.phone) {
                            return 1;
                        } else if (a.phone < b.phone) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "backward":
                    users = users.sort((a, b) => {
                        if (a.phone < b.phone) {
                            return 1;
                        } else if (a.phone > b.phone) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
            }
        }

        this.setState({
            users: users
        });

        this.updateActiveUser(this.state.users[0]);
    }

    searchUsers(value) {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
        request.onload = () => {
            if(request.status >= 200) {
                let source = JSON.parse(request.responseText);

                let users = source.filter((user) => {
                    return user.firstName.toLowerCase().indexOf(value.toLowerCase()) != -1
                });

                    this.setState({
                        users: users
                    })

                    this.updateActiveUser(users[0]);
            }
        }
        request.send();
    }

    getUserById(e) {
        let id = parseInt(e.currentTarget.id);
        let user = this.state.users.filter((user) => user.id === id);
        return user[0];
    }

    updateActiveUser(user) {
        this.setState({
            activeUser: user
        })
    }

    render() {
        let {isLoaded, users, currentPage, usersPerPage} = this.state;
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
        const renderUsers = currentUsers.map((user, index) => {
            return (
            <tr onClick={this.handleClick.bind(this)} key={index} id={user.id} >
                <td>{ user.id }</td>
                <td>{ user.firstName }</td>
                <td>{ user.lastName }</td>
                <td>{ user.email }</td>
                <td>{ user.phone }</td>
            </tr>
            );
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handle}
                >
                    {number}
                </li>
            );
        });
        if (!isLoaded) {
            return <img className='preloader' src='preloader.gif' alt='Загрузка....'/>
        }
        else {
            return (
                <div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Search callback={this.handleSearch.bind(this)} />
                        </div>
                    </div>
                    <div className="add-user">
                        <form onSubmit={this.addNewUser}>
                            <input
                            type="text"
                            onChange={this.handleFirstName}
                            value={this.state.newFirstName}
                            placeholder="FirstName"
                            />
                            <input
                            type="text"
                            onChange={this.handleLastName}
                            value={this.state.newLastName}
                            placeholder="LastName"
                            />
                            <input
                            type="text"
                            onChange={this.handleEmail}
                            value={this.state.newEmail}
                            placeholder="Email"
                            />
                            <input
                            type="text"
                            onChange={this.handlePhone}
                            value={this.state.newPhone}
                            placeholder="Phone"
                            />
                            <button>Добавить</button>
                        </form>
                    </div>
                    <table>
                        <Buttonsort callback={this.handleSorting.bind(this)}  />
                        <tbody>                           
                            {renderUsers}
                        </tbody>
                    </table>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                    <div>
                        <ActiveUser user={this.state.activeUser} />
                    </div>
                </div>
            )
        }
    }
}


export default Bootstrap;