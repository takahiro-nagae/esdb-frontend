import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { SearchListContainer } from '../Search/Pc/SearchListContainer';
import { SpSearchContainer } from '../Search/Sp/SpSearchContainer';
import { useEnchantStore } from '../Search/state/useEnchantStore';

import styles from './Bookmark.module.css';
import { BookMarkResultHead } from './components/BookmarkResultHead';

import { useBookmarkState } from '@/state/useBookmarkState';

export const Bookmark: React.FC = () => {
  const [isRender, setIsRender] = useState(false);
  const { enchants, setEnchants } = useBookmarkState();
  const { immutableEnchants, setImmutableEnchants } = useEnchantStore();

  useEffect(() => {
    if (!isRender) {
      setImmutableEnchants(enchants);
      setIsRender(true);
    }
  }, [enchants]);

  useEffect(() => {
    return () => setIsRender(false);
  }, []);

  const onDragEnd = (e: DragEndEvent) => {
    if (e.over === null || e.active.id === e.over.id) return;

    const oldId = e.active.id;
    const oldIndex = immutableEnchants.findIndex(
      enchant => enchant.enchant_id === oldId,
    );
    const newId = e.over.id;
    const newIndex = immutableEnchants.findIndex(
      enchant => enchant.enchant_id === newId,
    );

    const newEnchants = [...immutableEnchants];
    newEnchants.splice(oldIndex, 1);
    newEnchants.splice(newIndex, 0, immutableEnchants[oldIndex]);
    setImmutableEnchants(newEnchants);
    setEnchants(newEnchants);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Grid
          alignItems='center'
          container
          className={immutableEnchants.length < 1 ? styles.verticalCenter : ''}
          direction='column'
        >
          <BookMarkResultHead />
          {immutableEnchants.length >= 1 && (
            <>
              <BrowserView className={styles.pcContainer}>
                <DndContext onDragEnd={onDragEnd} sensors={sensors}>
                  <SortableContext
                    items={immutableEnchants.map(enchant => enchant.enchant_id)}
                  >
                    <SearchListContainer />
                  </SortableContext>
                </DndContext>
              </BrowserView>
            </>
          )}
        </Grid>
      </Box>
      <MobileView>
        <SpSearchContainer />
      </MobileView>
    </>
  );
};
