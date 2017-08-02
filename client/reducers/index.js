import { combineReducers } from 'redux';
import department from './department';
import selector from './selector';
import departmentRate from './departmantRate';

export default combineReducers(
    {department, selector, departmentRate}
)
