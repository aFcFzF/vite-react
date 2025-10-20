import React from 'react';

import styles from './index.module.less';

const PaymentOptions: React.FC = () => {
  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentMethodSection}>
        <span className={styles.invoiceSelectionLabel}>支付方式</span>
        <img
          alt=""
          src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
          className={styles.paymentMethodIcon}
        />
      </div>
      <div className={styles.invoiceSelectionSection}>
        <span className={styles.invoiceSelectionLabel}>选择关联发票</span>
        <img
          alt=""
          src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
          className={styles.invoiceSelectionIcon}
        />
      </div>
      <a className={styles.paymentConfirmationLink}>支付确认</a>
    </div>
  );
};

export default PaymentOptions;
