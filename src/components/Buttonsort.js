import React, { Component } from 'react';

class Buttonsort extends React.Component {
  
    state = {
      active: false,
    }

     toggleDirection(elem) {
        switch (elem.dataset.direction) {
            case "forward":
                elem.dataset.direction = "backward";
                break;
            case "backward":
                elem.dataset.direction = "forward";
                break;
        }
    }

    handleClick(e) {
        let value = e.target.value,
            direction = e.target.dataset.direction;

        this.props.callback(value, direction);

        this.toggleDirection(e.target);
        this.setState({active: !this.state.active})
    }

    
    render() {
        return (   
            <thead>
                <tr>
                    <th>id
                        <button onClick={this.handleClick.bind(this)} 
                                className={ this.state.active ? "sort-desc btn btn-default sorting__button" : "sort-asc btn btn-default sorting__button" }
                                data-direction="forward" 
                                value="id" >
                            <span className="little-arrow">&#8711;</span>
                        </button>
                    </th>
                    <th>firstName
                        <button onClick={this.handleClick.bind(this)} 
                                className={ this.state.active ? "sort-desc btn btn-default sorting__button" : "sort-asc btn btn-default sorting__button" }
                                data-direction="forward" 
                                value="firstName" >
                            <span className="little-arrow">&#8711;</span>
                        </button>
                    </th>
                    <th>lastName
                        <button onClick={this.handleClick.bind(this)} 
                                className={ this.state.active ? "sort-desc btn btn-default sorting__button" : "sort-asc btn btn-default sorting__button" }
                                data-direction="forward" 
                                value="lastName" >
                            <span className="little-arrow">&#8711;</span>
                        </button>
                    </th>
                    <th>email
                        <button onClick={this.handleClick.bind(this)} 
                                className={ this.state.active ? "sort-desc btn btn-default sorting__button" : "sort-asc btn btn-default sorting__button" }
                                data-direction="forward" 
                                value="email" >
                            <span className="little-arrow">&#8711;</span>
                        </button>
                    </th>
                    <th>phone
                        <button onClick={this.handleClick.bind(this)} 
                                className={ this.state.active ? "sort-desc btn btn-default sorting__button" : "sort-asc btn btn-default sorting__button" }
                                data-direction="forward" 
                                value="phone" >
                            <span className="little-arrow">&#8711;</span>
                        </button>
                    </th>
                </tr>
            </thead>
        );
    }
  }
      

export default Buttonsort;