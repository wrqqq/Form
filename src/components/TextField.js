import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    textField: {

    },
    container: {
        padding: 30
    },
    form: {
        paddingLeft: 20,
        paddingRight: 20
    },
    button: {
        width: 320,
        display: 'block',
        marginTop: 10
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
                <form autoComplete="off" className={classes.form}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="standard-name"
                                label="Имя"
                                fullWidth
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="standard-surname"
                                label="Фамилия"
                                fullWidth
                                className={classes.textField}
                                value={this.state.surname}
                                onChange={this.handleChange('surname')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="standard-surname"
                                label="Почта"
                                fullWidth
                                className={classes.textField}
                                value={this.state.mail}
                                onChange={this.handleChange('surname')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="standard-surname"
                                label="Номер телефона"
                                fullWidth
                                className={classes.textField}
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="standard-surname"
                                label="Дополнительная информация"
                                fullWidth
                                multiline={true}
                                rows={6}
                                rowsMax={10}
                                className={classes.textField}
                                value={this.state.text}
                                onChange={this.handleChange('text')}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" size='large' className={classes.button}>
                        Отправить
                    </Button>
                </form>
        );
    }
}

export default withStyles(styles)(TextFields);