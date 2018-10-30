import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import TextField from '@material-ui/core/TextField';
import { TodoConsumer } from '../../contexts';

/**
 * Input form to add a todo item
 */
const InputForm = ({ input, handleInputChange }) => (
    <TodoConsumer>
        {({ addItem }) => <TextField
            style={{ width: '100%' }}
            placeholder="Add TODO Item"
            value={input}
            onKeyPress={(event) => {
                if (event.key === 'Enter' && event.target.value) {
                    addItem(event.target.value);
                    handleInputChange('');
                }
            }}
            onChange={(event) => handleInputChange(event.target.value)}
        />}
    </TodoConsumer>
);

InputForm.propTypes = {
    input: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default withState('input', 'handleInputChange', '')(InputForm);