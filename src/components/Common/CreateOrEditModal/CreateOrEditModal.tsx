import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import tw from 'twin.macro';
import { useId, useMemo, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import useNiceModal from '@/hooks/useNiceModal';
import useHandleClickOutside from '@/hooks/useHandleClickOutside';
import { PatientRecord } from '@/types/common';
import {
  CreateOrEditPatientSchema,
  createOrEditPatientSchema,
} from '@/validationsSchemas/createOrEditPatientSchema';
import { FORM_BASE_NAMES } from '@/types/enums';
import { DefaultAvatar } from '@/assets/images';

import FormContent from './FormContent';
import CreateOrdEditButton from './CreateOrEditButton';

const StyledLayer = tw(motion.div)`
fixed
top-0
left-0
bottom-0
right-0
bg-[rgba(136,136,136,0.4)]
backdrop-blur-[8px]
z-20
flex
justify-center
items-center
`;

const StyledWrapper = tw(motion.div)`
absolute
top-0
left-0
bottom-0
right-0
bg-white
flex
flex-col 
p-6
bg-white
overflow-y-auto

tablet:relative
tablet:w-full
tablet:max-w-lg
tablet:rounded-2xl
`;

const StyledHeader = tw.header`
flex
items-center
justify-between
`;

const StyledTitle = tw.h2`
text-xl
font-light
text-darks-black
`;

const StyledFormWrapper = tw.section`
flex
flex-col
`;

type Props = {
  patientData?: PatientRecord;
};

const CreateOrEditModal = NiceModal.create(({ patientData }: Props) => {
  const modal = useModal();
  const { isOpen, handleOnClose } = useNiceModal(modal);
  const willChange = useWillChange();
  const ref = useRef(null);
  const id = useId();
  const isEditMode = !!patientData;
  const formBaseName = FORM_BASE_NAMES.CREATE_OR_EDIT_PATIENT;
  const defuatlValues: CreateOrEditPatientSchema = {
    [formBaseName]: {
      name: patientData?.name || '',
      website: patientData?.website || '',
      avatar: patientData?.avatar || DefaultAvatar,
      description: patientData?.description || '',
      createdAt: patientData?.createdAt || new Date().toISOString(),
      id: patientData?.id || id,
    },
  };

  const form = useForm<CreateOrEditPatientSchema>({
    resolver: yupResolver(createOrEditPatientSchema),
    defaultValues: defuatlValues,
  });

  const titleLabel = useMemo(
    () => (isEditMode ? 'Edit Patient' : 'Create New Patient'),
    [isEditMode],
  );

  useHandleClickOutside({
    ref,
    cb: handleOnClose,
  });

  return (
    <FormProvider {...form}>
      <AnimatePresence initial={true} mode="popLayout">
        {isOpen && (
          <StyledLayer
            key="isOpen"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{ willChange }}
            transition={{ type: 'spring', duration: 0.8 }}>
            <StyledWrapper
              ref={ref}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              initial={{ y: '-100%' }}
              style={{ willChange }}
              transition={{ type: 'spring', duration: 0.6 }}>
              <StyledHeader>
                <StyledTitle>{titleLabel}</StyledTitle>
                <button onClick={handleOnClose}>
                  <XMarkIcon className="h-6 w-6 text-darks-black" />
                </button>
              </StyledHeader>
              <FormContent formBaseName={formBaseName} />
              <CreateOrdEditButton
                formBaseName={formBaseName}
                isEditMode={isEditMode}
                onCloseModal={handleOnClose}
              />
              <StyledFormWrapper />
            </StyledWrapper>
          </StyledLayer>
        )}
      </AnimatePresence>
    </FormProvider>
  );
});

export default CreateOrEditModal;
