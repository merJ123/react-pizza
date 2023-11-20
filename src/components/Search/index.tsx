import React from 'react';
import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
// @ts-ignore
import debounce from 'lodash.debounce';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  const inputEl = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue("");
    inputEl.current?.focus();
  };

  // Отложенное выполнение запроса на бэк
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );
  ////////////////////////////////////////

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputEl}
        onChange={onChangeInput}
        className={styles.input}
        value={value}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}

export default Search;
