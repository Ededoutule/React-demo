import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'

import ToodItem from "../ToodItem";
class Toods extends Component {

    render() {
        const { toolsList, updateState, deleteState } = this.props

        return (
            <div className="tools">
                {
                    toolsList.map((element) => {
                        return (
                            <ToodItem
                                key={element.id}
                                element={element}
                                updateState={updateState}
                                deleteState={deleteState}
                            />
                        )
                    })
                }

            </div>
        );
    }
}

Toods.propTypes = {};

export default Toods;