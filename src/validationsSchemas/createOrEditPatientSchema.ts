import * as yup from 'yup';

import { FORM_BASE_NAMES } from '@/types/enums';
import { PatientRecord } from '@/types/common';

export type CreateOrEditPatientSchema = {
  [FORM_BASE_NAMES.CREATE_OR_EDIT_PATIENT]: PatientRecord;
};

export const createOrEditPatientSchema = yup.object().shape({
  [FORM_BASE_NAMES.CREATE_OR_EDIT_PATIENT]: yup.object().shape({
    createdAt: yup.string().required('Created At is required'),
    description: yup.string().required('Description is required'),
    id: yup.string().required('Id is required'),
    name: yup.string().required('Name is required'),
    website: yup.string().required('Website is required'),
  }),
});
