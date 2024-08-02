import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/utils/api';
import endpoints from '@/constants/endpoints';
import { PatientRecord } from '@/types/common';

export const GET_PATIENTS_RECORDS = 'GET_EVENTS_BY_SEARCH';

export const getPatientsRecords = async () => {
  return api({
    url: `${endpoints.users}`,
    method: 'GET',
  });
};

const useGetPatientsRecords = <T = PatientRecord[],>(
  opts?: UseQueryOptions<PatientRecord[], unknown, T, [typeof GET_PATIENTS_RECORDS]>,
) => useQuery([GET_PATIENTS_RECORDS], getPatientsRecords, opts);

export default useGetPatientsRecords;
