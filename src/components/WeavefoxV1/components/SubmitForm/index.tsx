import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const SubmitForm: React.FC = () => {
  const onSubmitClick = () => {};

  return (
    <div className={styles.formContainer}>
      <Button
        type="primary"
        onClick={onSubmitClick}
        className={styles.submitButton}
      >
        提交
      </Button>
    </div>
  );
};

export default SubmitForm;
