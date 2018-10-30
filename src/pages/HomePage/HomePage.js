import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { withTodoList } from '../../hocs';
import { InputForm } from '../../components';

const Homepage = () => (
    <div style={{ margin: '0 auto', maxWidth: '1024px' }}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid item xs={12}>
                            <InputForm />
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withTodoList(Homepage);