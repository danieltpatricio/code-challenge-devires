import React, { memo } from 'react';
import { ButtonGroup, Grid, IconButton, Text } from '@chakra-ui/react';
import TrashIcon from 'mdi-react/TrashIcon';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';

interface IProps {
  confirmDelete: boolean;
  onConfirmDelete: () => void;
  onDelete: () => void;
}

function ButtonDelete(props: IProps) {
  const { confirmDelete, onConfirmDelete, onDelete } = props;

  if (confirmDelete) {
    return (
      <Grid gridTemplateColumns="1fr auto" alignItems="center" gridGap="2">
        <Text>Tem certeza de que deseja excluir?</Text>
        <ButtonGroup justifyContent="center" size="sm">
          <IconButton
            aria-label="remover tarefa"
            icon={<CloseIcon />}
            onClick={onConfirmDelete}
          />
          <IconButton
            aria-label="remover tarefa"
            icon={<CheckIcon />}
            onClick={onDelete}
          />
        </ButtonGroup>
      </Grid>
    );
  }

  return (
    <IconButton
      size="sm"
      aria-label="remover tarefa"
      onClick={onConfirmDelete}
      icon={<TrashIcon size="16px" />}
    />
  );
}

export default memo<IProps>(ButtonDelete);
