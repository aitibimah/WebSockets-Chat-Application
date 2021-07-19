
import React, { Component } from "react";
import Group from './Group'
import { getGroups } from "../actions/GroupAction"
import PropTypes from "prop-types";
import { connect } from "react-redux";

class GroupList extends Component {

    componentDidMount() {

        this.props.getGroups();
    }

    render() {
        const { groups } = this.props.my_contact;
        return (


            <div id="contacts">
                <ul>

                    {groups.map(group => (

                        <Group key={group.id} group={group} />

                    ))}


                </ul>
            </div>

        )

    }

}


GroupList.propTypes = {
    my_contact: PropTypes.object.isRequired,
    getGroups: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

    my_contact: state.my_contact,
});


export default connect(
    mapStateToProps,
    { getGroups }
)(GroupList);
