import { Link } from 'react-router-dom';
import React from 'react';
import Form from 'carbon-components-react/lib/components/Form';
import FormGroup from 'carbon-components-react/lib/components/FormGroup';
import TextInput from 'carbon-components-react/lib/components/TextInput';
import Button from 'carbon-components-react/lib/components/Button';
import Checkbox from 'carbon-components-react/lib/components/Checkbox';
import { ArrowRight16 } from '@carbon/icons-react/lib/__generated__/bucket-1';
import { LockAlt } from '@carbon/pictograms-react';

const AccountInfo = ({ navigation }) => {
  const { next } = navigation;
  return (
    <div className=' bx--col-lg-15 signup--box'>
      <div className='lock'>
        <LockAlt />
      </div>
      <div className='signup--heading'>
        <li>
          <p>Signup to Uvation Identity</p>
        </li>
        <li>
          <span>Already have an account?</span>
          <span>
            <Link to='/'>Log in</Link>
          </span>
        </li>

        <Form>
          <div className='form-heading'>
            <h4>1.Account Information</h4>
            <h6>Email address</h6>
            <p>
              Your email address will become your ID, which you'll us to log in
              to all Uvation products.
            </p>
          </div>
          <FormGroup legendText=''>
            <TextInput
              labelText=''
              inputMode='email'
              id='test4'
              invalidText='Invalid email.'
              placeholder='address@email.com'
            />
          </FormGroup>

          <FormGroup legendText=''>
            <TextInput.PasswordInput
              hidePasswordLabel='Hide password'
              id='test3'
              invalidText='A valid value is required'
              labelText='Password '
              placeholder='*******'
              showPasswordLabel='Show password'
            />
            <div className='helping-text'>
              <div className='items'>
                <span>- 8characters minimum </span>
                <span>-One uppercase character</span>
              </div>
              <div className='items'>
                <span>-One lowercase characters</span>
                <span> - One number</span>
              </div>
            </div>
          </FormGroup>

          <Button
            className='btn--full'
            kind='primary'
            renderIcon={ArrowRight16}
            tabIndex={0}
            type='submit'
            onClick={next}
          >
            Continue
          </Button>
          <FormGroup legendText=''>
            <Checkbox labelText='I read and I agree with the ' id='unchecked' />
            <span className='terms'>
              <Link to=''>terms Conditions & Privacy Statement</Link> set by
              Uvation Inc"
            </span>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};
export default AccountInfo;
