import { DatePicker } from 'antd';
import React from 'react';
import SubHeader from '../components/sub_header/Sub_header';
import DepositionDataTable from '../components/Tables/DepositionDataTable';

export const Dashboard = () => {
  return (
    <>
      <SubHeader />
      <DepositionDataTable />
    </>
  );
};
