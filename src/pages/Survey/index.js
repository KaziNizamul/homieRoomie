import React from 'react';
// external import
import 'survey-core/modern.css';
import 'survey-creator-core/survey-creator-core.css';
import { Model, StylesManager } from 'survey-core';
import { Survey } from 'survey-react-ui';
// constants
import { json as surveyData } from './constants/surveyData';
// styles
import styles from './survey.module.scss';

const SurveyPage = () => {
  const model = new Model(surveyData);
  StylesManager.applyTheme('orange');
  return (
    <div className={styles.surveyContainer}>
      <Survey
        className={styles.survey}
        model={model}
      />
    </div>
  );
};

export default SurveyPage;
