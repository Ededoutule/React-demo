import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

class Header extends Component {
    searchUserDate = async () => {
        let value = this?.searchText?.value
        PubSub.publish('updateState',{ isFirst: false, isLoading: true })
        try {
            let userDate = await axios.get(`https://api.github.com/search/users?q=${value}`)
            console.log(userDate)
            PubSub.publish('updateState',{ users: userDate.data.items, isLoading: false, err: '' })
        } catch (err) {
            PubSub.publish('updateState',{ err: err.message, isLoading: false })
        }

    }
    render() {
        return (
            <div>
                <h2>Search Github Users</h2>
                <input ref={e => this.searchText = e} type='text' placeholder='请输入'  />
                <button onClick={this.searchUserDate}>Search</button>
            </div>
        );
    }
}

export default Header;