import { useCallback, useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

export const useFreeSearch = () => {
  const [inputParams] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    setInputValue(inputParams.get('search') || '');
  }, [inputParams]);

  const handleSubmit = useCallback(() => {
    const params = new URLSearchParams();
    params.append('search', inputValue);

    navigate({
      pathname: '/search',
      search: `?${createSearchParams(params)}`,
    });
  }, [inputValue, navigate]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 229) {
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  return {
    inputValue,
    setInputValue,
    handleSubmit,
    handleKeyDown,
  };
};
