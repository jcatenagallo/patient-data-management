import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import tw from 'twin.macro';
import { useRef } from 'react';

import useNiceModal from '@/hooks/useNiceModal';
import useHandleClickOutside from '@/hooks/useHandleClickOutside';

const StyledLayer = tw(motion.div)`
absolute
top-0
left-0
bottom-0
right-0
bg-[rgba(136,136,136,0.4)]
backdrop-blur-[8px]
z-20
`;

const StyledWrapper = tw.div`
absolute
top-0
left-0
bottom-0
right-0
bg-white
flex
flex-col 
p-4
`;

const StyledHeader = tw.header`
flex
items-center
justify-between
`;

const StyledTitle = tw.h2`
text-xl
font-medium
text-darks-black
`;

const StyledFormWrapper = tw.div`
flex
flex-col
`;

const CreateOrEditModal = NiceModal.create(() => {
  const modal = useModal();
  const { isOpen, handleOnClose } = useNiceModal(modal);
  const willChange = useWillChange();
  const ref = useRef(null);

  useHandleClickOutside({
    ref,
    cb: handleOnClose,
  });

  return (
    <AnimatePresence initial={true} mode="popLayout">
      {isOpen && (
        <StyledLayer
          key="isOpen"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          style={{ willChange }}
          transition={{ type: 'spring', duration: 0.8 }}>
          <StyledWrapper ref={ref}>
            <StyledHeader>
              <StyledTitle>Create New Patient</StyledTitle>
              <button onClick={handleOnClose}>
                <XMarkIcon className="h-6 w-6 text-darks-black" />
              </button>
            </StyledHeader>
          </StyledWrapper>
        </StyledLayer>
      )}
    </AnimatePresence>
  );
});

export default CreateOrEditModal;
