import React from 'react';
import { withState } from 'recompose';
import TextField from '@material-ui/core/TextField';

const InputForm = ({ input, handleInputChange }) => (
    <TextField
        style={{ width: '100%' }}
        placeholder="Add TODO Item"
        value={input}
        onChange={(event) => handleInputChange(event.target.value)}
    />
);

export default withState('input', 'handleInputChange', '')(InputForm);