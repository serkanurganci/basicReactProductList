import React, { Component } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import alertify from 'alertifyjs'

export default class FormDemo2 extends Component {
    state = {email:'',password:'',city:'',description:''}

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }

    handleSubmit = event => {
        
        event.preventDefault();

        alertify.success(this.state.email + " added to db")
        alertify.success(this.state.password + " added to db")
        alertify.success(this.state.city + " added to db")
        alertify.success(this.state.description + " added to db")
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'></Label>
                        <Input 
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'></Label>
                        <Input 
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        onChange={this.handleChange}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'></Label>
                        <Input 
                        type='textarea'
                        name='description'
                        id='description'
                        placeholder='Description'
                        onChange={this.handleChange}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'></Label>
                        <Input 
                        type='select'
                        name='city'
                        id='city'
                        onChange={this.handleChange}
                        >
                            <option>Ankara</option>
                            <option>Konya</option>
                            <option>Istanbul</option>
                            <option>Erzincan</option>
                            <option>Izmir</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'>Save</Button>
                </Form>
            </div>
        )
    }
}
