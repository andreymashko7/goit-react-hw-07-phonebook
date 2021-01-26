import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { getFilter } from '../../redux/phonebook-selectors';
import * as contactsActions from '../../redux/phonebook-actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
