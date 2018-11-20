import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    }
});

class TextFields extends React.Component {
    state = {
        name: '',
        surname: '',
        mail: '',
        phone: '',
        text: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={24}>
                <form className={classes.container} autoComplete="off">
                    <Grid item xs={12}>
                        <TextField
                            id="standard-name"
                            label="Имя"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-surname"
                            label="Фамилия"
                            className={classes.textField}
                            value={this.state.surname}
                            onChange={this.handleChange('surname')}
                            margin="normal"
                        />
                    </Grid>
                    <TextField
                        id="standard-surname"
                        label="Почта"
                        className={classes.textField}
                        value={this.state.mail}
                        onChange={this.handleChange('surname')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-surname"
                        label="Номер телефона"
                        className={classes.textField}
                        value={this.state.phone}
                        onChange={this.handleChange('phone')}
                        margin="normal"
                    />

                    <TextField
                        id="standard-surname"
                        label="Дополнительная информация"
                        className={classes.textField}
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        margin="normal"
                    />

                </form>
            </Grid>
        );
    }
}

export default withStyles(styles)(TextFields);