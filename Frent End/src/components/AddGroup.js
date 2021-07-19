import { Component } from "react"
import Header from "./Header"
import MyContactResult from "./MyContactResult"


import { getMyContacts } from "../actions/ContactActions"
import { createGroup, getCategroies } from "../actions/GroupAction"
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddGroup extends Component {


    constructor() {
        super();

        this.state = {
            nameGroup: '',
            active: 1,
            image: 'imageGroup.png',
            description: '',
            category: {},
            users: [],
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCategory = this.handleCategory.bind(this);




    }



    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }



    }

    componentDidMount() {
        this.props.getMyContacts();
        this.props.getCategroies();


        // this.handelUsersList();
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onClick(e) {
        //console.log(e.target.value)
        this.handleCheckChieldElement(e)
    }





    onSubmit(e) {
        e.preventDefault();

        const group = {

            "nameGroup": this.state.nameGroup,
            "active": this.state.active,
            "description": this.state.description,
            "category": this.state.category,
            "users": this.state.users

        };

        this.props.createGroup(group, this.props.history);


        console.log(group);

    }


    search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].id == nameKey) {
                return false;
            }
        }

        return true;
    }


    handleCategory(e) {

        console.log(e.target.value)
        let cat = { id: e.target.value };
        this.setState({ category: cat })

    }

    handleCheckChieldElement(event) {


        let users = this.state.users

        if (users.length == 0) {

            let newUser = { id: event.target.value };
            users.push(newUser);

        } else {

            for (let i = 0; i < users.length; i++) {


                if (users[i].id == event.target.value && event.target.checked == false) {
                    users = users.filter(function (el) { return el.id != event.target.value; });

                    break;
                }
                else if (event.target.checked == true && this.search(users[i].id, users) == false) {
                    let newUser = { id: event.target.value };
                    users.push(newUser);

                    break;
                }


            }

        }



        console.log(users)

        this.setState({ users: users })




    }


    /* handelUsersList() {

        const { mycontacts } = this.props.my_contact

        let users = [];
        mycontacts.map(contact => (
            users.push({ id: contact.user.id })
        ))

        this.setState({ users: users })

    } */

    render() {

        const { mycontacts } = this.props.my_contact
        const { categories } = this.props.my_contact



        return (
            <div className="content">
                <Header title="Add Group" image="/images/addgroup.jpg" />
                <form className="contacts AddContact  my-3 mx-3" onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <label htmlFor="nameGroup" className="col-sm-2 col-form-label">Name Group</label>
                        <div className="col-sm-10">
                            <input
                                name="nameGroup"
                                type="text"
                                className="form-control"
                                id="nameGroup"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text"
                                name="description"
                                className="form-control"
                                id="description"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                            <select
                                className="form-control"
                                name="category"
                                onChange={this.handleCategory}
                            >

                                {categories.map(category => (
                                    <option value={category.id}>{category.name}</option>
                                ))}


                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="State" className="col-sm-2 col-form-label">State</label>
                        <div className="col-sm-10">
                            <select
                                name="active"
                                className="form-control"
                                onChange={this.onChange}
                            >
                                <option value='1'>Active</option>
                                <option value='0'>Disable</option>

                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="description" className="col-12 col-form-label">Add Friend</label>

                        <div className="col mb-5">

                            <ul>
                                {mycontacts.map(contact => (

                                    <li key={contact.id} className="contact card mb-1">
                                        <div className="wrap">
                                            <img src={`/images/profile/${contact.user.profile.image}`} alt="" />
                                            <div className="row">
                                                <div className="meta col-sm-10">
                                                    <p className="name">{contact.user.profile.firstName + " " + contact.user.profile.lastName}</p>
                                                    <p className="preview">{contact.user.profile.bio}</p>
                                                </div>

                                                <div className="col-sm-2">
                                                    <div className="addFriendToGroup custom-control form-control-lg custom-checkbox">
                                                        <input
                                                            name="users[]"
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id={`customCheck${contact.user.id}`}
                                                            value={contact.user.id}
                                                            onClick={this.onClick}
                                                        // checked={this.props.isChecked}

                                                        />
                                                        <label className="custom-control-label" htmlFor={`customCheck${contact.user.id}`}
                                                        ></label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>






                                ))}








                            </ul>



                        </div>
                    </div>









                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark w-75 mb-4" style={{ bottom: 0, position: 'absolute' }}>Add Group</button>
                    </div>
                </form>
            </div>
        )

    }
}




AddGroup.propTypes = {
    my_contact: PropTypes.object.isRequired,
    getMyContacts: PropTypes.func.isRequired,
    createGroup: PropTypes.func.isRequired,
    getCategroies: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

    my_contact: state.my_contact,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { getMyContacts, createGroup, getCategroies }
)(AddGroup);

