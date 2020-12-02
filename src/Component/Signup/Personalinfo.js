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
import ComboBox from 'carbon-components-react/lib/components/ComboBox';

const items = [
  {
    id: 'option-0',
    text:
      'An example option that is really long to show what should be done to handle long text',
  },
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3',
    selected: true,
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
  {
    id: 'option-5',
    text: 'Option 5',
  },
];

const Personalinfo = ({ navigation }) => {
  // const {go,previous } = navigation;
  const { previous } = navigation;

  return (
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
            <Link to='#' onClick={previous}>
              Log in
            </Link>
          </span>
        </li>

        <Form>
          <div className='form-heading'>
            <div className='backButton'>
              <Link to='/'>
                <ArrowLeft16 /> Back
              </Link>
            </div>
            <h4>3.Personal Information</h4>
          </div>
          <div className='perInfo'>
            <FormGroup legendText='First name'>
              <TextInput
                labelText=''
                inputMode='text'
                id='test2'
                invalidText='Invalid email.'
                placeholder='Uvation ID'
              />
            </FormGroup>
            <FormGroup legendText='Last name' className='last-name'>
              <TextInput
                labelText=''
                inputMode='text'
                id='test2'
                invalidText='Invalid email.'
                placeholder='Uvation ID'
              />
            </FormGroup>
          </div>
          <div>
            <ComboBox
              onChange={() => {}}
              id=''
              titleText='Country or state'
              placeholder='USA'
              items={items}
              itemToString={(item) => (item ? item.text : '')}
            />
          </div>
          <div className='finish'>
            <Button
              className='btn--full'
              kind='primary'
              renderIcon={ArrowRight16}
              tabIndex={0}
              type='submit'
              // onClick={go}
              as={Link}
              to='/'
            >
              Finish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Personalinfo;
