import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import InputMask from 'react-input-mask';
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
            [name]: event.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { fname, lname, email } = this.state;

        axios.post('/', { fname, lname, email })
            .then((result) => {
                //access the results here....
            });
    }

    render() {
        const { classes } = this.props;

        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
                className={classes.form}
            >
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="standard-name"
                                label="Имя"
                                name='name'
                                fullWidth
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                validators={['required', 'minStringLength:3']}
                                errorMessages={['this field is required', 'Слишком короткое значение ']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="standard-surname"
                                label="Фамилия"
                                fullWidth
                                name='surname'
                                className={classes.textField}
                                value={this.state.surname}
                                onChange={this.handleChange('surname')}
                                margin="normal"
                                validators={['required', 'minStringLength:3']}
                                errorMessages={['this field is required', 'Слишком короткое значение ']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="standard-mail"
                                label="Почта"
                                name='email'
                                fullWidth
                                className={classes.textField}
                                value={this.state.mail}
                                onChange={this.handleChange('mail')}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputMask
                                mask="+7 999 999 99 99"
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                                required
                            >
                                {() => <TextValidator id="standard-surname"
                                                  label="Номер телефона"
                                                  name="phone"
                                                  fullWidth
                                                  className={classes.textField}
                                                  margin="normal"
                                                  />}
                            </InputMask>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="standard-surname"
                                label="Дополнительная информация"
                                fullWidth
                                multiline={true}
                                rows={6}
                                name='text'
                                rowsMax={10}
                                className={classes.textField}
                                value={this.state.text}
                                onChange={this.handleChange('text')}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' variant="contained" color="primary" size='large' className={classes.button}>
                        Отправить
                    </Button>
            </ValidatorForm>
        );
    }
}

export default withStyles(styles)(TextFields);