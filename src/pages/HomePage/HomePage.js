import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { withTodoList } from '../../hocs';
import { InputForm, TodoList, Filters } from '../../components';
import { styles } from '../../styles';

/**
 * The main page of the todo list responsible for the layout
 */
const Homepage = () => (
    <div style={styles.layout}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <h3>@TODO List</h3>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid item xs={12}>
                            <InputForm />
                        </Grid>
                        <Grid item xs={12}>
                            <Filters />
                        </Grid>
                        <Grid item xs={12}>
                            <TodoList />
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withTodoList(Homepage);