import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import styles from './../../common/style/common.module.css';

type PositionProps = {
  position: string;
  setPosition: (E: string) => void;
};

export const Position: React.FC<PositionProps> = ({
  position,
  setPosition,
}) => {
  const positionItems = [
    { value: '0', label: '指定なし' },
    { value: '1', label: '接頭' },
    { value: '2', label: '接尾' },
  ];

  return (
    <>
      <label className={styles.label}>
        <small>位置</small>
      </label>
      <ToggleButtonGroup
        className={styles.formContainer}
        exclusive
        fullWidth
        id='position'
        onChange={(_, newAlignment) => setPosition(newAlignment)}
        size='small'
      >
        {positionItems.map(positionItem => (
          <ToggleButton
            aria-label={positionItem.label}
            className={
              positionItem.value === position
                ? styles.toggleButtonSelected
                : styles.toggleButton
            }
            key={positionItem.value}
            value={positionItem.value}
          >
            <span>{positionItem.label}</span>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};
