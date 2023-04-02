import React from 'react';
// external import
import 'survey-core/defaultV2.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
// constants
import surveyData from './constants/surveyData';

const SurveyPage = () => {
  const model = new Model(surveyData);
  return <Survey model={model}></Survey>;
};

export default SurveyPage;
