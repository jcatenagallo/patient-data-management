import { NiceModalHandler } from '@ebay/nice-modal-react';
import { useEffect, useState } from 'react';

type Props = {
  onRemove?: () => void;
};

const useNiceModal = (
  niceModal: NiceModalHandler<Record<string, unknown>>,
  { onRemove }: Props = {},
) => {
  const { visible: open, remove, hide } = niceModal;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);

    const isClosing = !open && isOpen;

    if (!isClosing) return;

    const timeout = setTimeout(() => {
      remove();
      onRemove?.();
    }, 300);

    return () => {
      if (isClosing) return;
      clearTimeout(timeout);
    };
  }, [onRemove, open, isOpen, remove]);

  const handleOnClose = () => {
    hide();
    document.body.style.overflow = 'auto';
  };

  return { isOpen, handleOnClose };
};

export default useNiceModal;
