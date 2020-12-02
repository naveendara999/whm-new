import { Link } from 'react-router-dom';
import React from 'react';
import Form from 'carbon-components-react/lib/components/Form';
import FormGroup from 'carbon-components-react/lib/components/FormGroup';
import TextInput from 'carbon-components-react/lib/components/TextInput';
import Button from 'carbon-components-react/lib/components/Button';
import { LockAlt } from '@carbon/pictograms-react';
import {
  ArrowLeft16,
  ArrowRight16,
} from '@carbon/icons-react/lib/__generated__/bucket-1';

const VerifyInfo = ({ navigation }) => {
  const { previous, next } = navigation;
  return (
    <>
      <div className='bx--col-lg-15 signup--box'>
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
              <Link to='#'>Log in</Link>
            </span>
          </li>

          <Form>
            <div className='form-heading'>
              <div className='backButton'>
                <Link to='/' onClick={previous}>
                  <ArrowLeft16 /> Back
                </Link>
              </div>
              <h4>2.Verify Email</h4>
              <h6>Verify Email</h6>
              <div className='helpingLabel'>
                <p>
                  Your email address will become your ID, which you’ll use to
                  log into all Uvation products.
                </p>
                <Link to='#'>Edit Email</Link>
              </div>
            </div>
            <FormGroup legendText=''>
              <TextInput
                labelText='Verification Code'
                inputMode='text'
                id='test2'
                invalidText='Invalid email.'
                placeholder=''
              />
            </FormGroup>
          </Form>
        </div>
        <div className='resend-code'>
          <Button
            kind='primary'
            renderIcon={ArrowRight16}
            tabIndex={0}
            type='submit'
            onClick={next}
          >
            Next
          </Button>

          <Button
            className='btn-resend'
            kind='secondary'
            renderIcon={ArrowRight16}
            tabIndex={0}
            type='submit'
          >
            Resend Code
          </Button>
        </div>
      </div>
    </>
  );
};
export default VerifyInfo;
