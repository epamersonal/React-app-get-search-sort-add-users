import React, { Component } from 'react';

export default class ActiveUser extends Component {

    render() {
        if ("undefined" === typeof this.props.user) {
            return(
                <h2>Ничего не найдено :(</h2>
            );
        }

        return (
            <div className="h-bordered text-center">
                <h3 className="thin_text">Выбран пользователь <b>{this.props.user.firstName} {this.props.user.lastName}</b></h3>
                <table className="table table-condensed text-center">
                    <tbody>
                        <tr>
                            <td>Описание:</td>
                            <td>{this.props.user.description}</td>
                        </tr>
                        <tr>
                            <td>Адрес проживания:</td>
                            <td>{this.props.user.address.streetAddress}</td>
                        </tr>
                        <tr>
                            <td>Город:</td>
                            <td>{this.props.user.address.city}</td>
                        </tr>
                        <tr>
                            <td>Провинция:</td>
                            <td>{this.props.user.address.state}</td>
                        </tr>
                        <tr>
                            <td>Индекс:</td>
                            <td>{this.props.user.address.zip}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}