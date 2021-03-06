import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'enter first and last name please' });
        } else {
            addTech({
                firstName,
                lastName
            });

            M.toast({ html: `${firstName} ${lastName} was added as a new team member` });

// clear fields
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New team member</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)} 
                        />
                        <label htmlFor="firstName" className="active">
                            First name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)} 
                        />
                        <label htmlFor="lastName" className="active">
                            Last name
                        </label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a style={{ margin: '0 1.5rem 1.5rem 0' }} href="#!" onClick={onSubmit} className="modal-close waves-effect purple btn">Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModal);
