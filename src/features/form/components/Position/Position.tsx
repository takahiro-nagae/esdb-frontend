import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import styles from './../../common/style/common.module.css';
import { POSITION_ITEMS } from './const';

type PositionProps = {
  position: string;
  setPosition: (E: string) => void;
};

export const Position: React.FC<PositionProps> = ({
  position,
  setPosition,
}) => {
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
        {POSITION_ITEMS.map(positionItem => (
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
