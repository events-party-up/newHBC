import React, { component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import Foect from 'foect';

export default class Validation extends  React.Component {
    render () {
        return (    

<Foect.Form
  defaultValue={{
    email: 'john@doe.com'
  }}
  onValidSubmit={model => {
    console.log(model); // { fullName: 'John Doe', email: 'john@doe.com' ... }
  }}
>
  { /* you can use form for triggering submit or checking form state(form.isSubmitted, form.isValid, ...) */ }
  { form => (
    <View>
      { /* every Foect.Control must have a name and optionally validation rules */ }
      <Foect.Control name="fullName" required minLength={2} maxLength={32}>
        { /* you can use control for getting/setting it's value, checking/updating(control.isValid, control.markAsTouched(), ...) it's state, checking it's errors(control.errors.required) */ }
        { control => (
          <View>
            <Text>Full Name</Text>

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              /* mark control as touched on blur */ 
              onBlur={control.markAsTouched}
               /* update control's value */ 
              onChangeText={(text) => control.onChange(text)}
              /* get control's value */ 
              value={control.value}
            />

            { /* check control state and show error if necessary */ }
            { control.isTouched &&
              control.isInvalid && 
              <Text style={{ color: 'red' }}>Please enter your name.</Text> }
          </View>
        ) }
      </Foect.Control>

      <Foect.Control name="password" required pattern={/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/}>
        { control => (
          <View>
            <Text>Password</Text>

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              secureTextEntry={true}
              onBlur={control.markAsTouched}
              onChangeText={(text) => control.onChange(text)}
              value={control.value}
            />

            { control.isTouched &&
              control.isInvalid && 
              <View>
                { control.errors.pattern ?
                  <Text style={{ color: 'red' }}>Please provide a strong password.</Text> : 
                  <Text style={{ color: 'red' }}>Please enter your password.</Text> }
              </View> }
          </View>
        ) }
      </Foect.Control>

      <Foect.Control name="email" required email>
        { control => (
          <View>
            <Text>Email</Text>

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              keyboardType="email-address"
              onBlur={control.markAsTouched}
              onChangeText={(text) => control.onChange(text)}
              value={control.value}
            />

            { control.isTouched &&
              control.isInvalid && 
              <View>
                <Text>{control.value} is not a valid email.</Text>
              </View> }
          </View>
        ) }
      </Foect.Control>

      { /* submit form */ }
      <Button disabled={form.isInvalid} onPress={() => form.submit()} title="Register" />
    </View>
  ) }
</Foect.Form>

        );
    }
}