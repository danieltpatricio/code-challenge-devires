import React, { memo, ReactNode } from 'react';
import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface IProps {
  isOpen: boolean;
  children: ReactNode;
  title: ReactNode;
  action: ReactNode;
  submitForm: string;
  onClose: () => void;
}

function Modal(props: IProps) {
  const { isOpen, onClose, children, title, action, submitForm } = props;

  return (
    <ModalChakra isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button variant="ghost" type="submit" form={submitForm}>
            {action}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
}

export default memo<IProps>(Modal);
