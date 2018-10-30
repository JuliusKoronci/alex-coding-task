import React from 'react';
import { withState } from 'recompose';
import TextField from '@material-ui/core/TextField';
import { TodoConsumer } from '../../contexts';

const InputForm = ({ input, handleInputChange }) => (
    <TodoConsumer>
        {({ addItem }) => <TextField
            style={{ width: '100%' }}
            placeholder="Add TODO Item"
            value={input}
            onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    addItem(event.target.value);
                    handleInputChange('');
                }
            }}
            onChange={(event) => handleInputChange(event.target.value)}
        />}
    </TodoConsumer>
);

export default withState('input', 'handleInputChange', '')(InputForm);