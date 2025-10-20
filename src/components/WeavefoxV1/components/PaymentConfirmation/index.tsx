import React from 'react';

import styles from './index.module.less';

const PaymentConfirmation: React.FC = () => {
  return (
    <div className={styles.paymentContainer}>
      <div className={styles.headerSection}>
        <span className={styles.confirmationText}>支付确认</span>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.itemDetails}>
          <div className={styles.itemHeader}>
            <span className={styles.incentiveItemId}>激励条目ID</span>
            <span className={styles.rewardAmount}>返点激励金额</span>
            <span className={styles.paymentMethod}>支付方式</span>
            <span className={styles.paymentMethod}>支付方式</span>
            <span className={styles.paymentMethod}>关联发票</span>
          </div>
          <div className={styles.itemBody}>
            <span className={styles.displayConfirm}>0004-展示可以确认</span>
            <span className={styles.amountValue}>1元</span>
            <span className={styles.bankTransfer}>支付到银行卡</span>
            <span className={styles.paymentMethod}>XXXXXXXXXXXX-1</span>
            <span className={styles.invoiceAssociation}>
              已关联发票1条，已填写退票金额:1元
            </span>
          </div>
        </div>
        <div className={styles.separatorLine} />
        <div className={styles.invoiceDetails}>
          <span className={styles.invoiceNumber}>发票编号</span>
          <span className={styles.issueDate}>开票时间</span>
          <span className={styles.invoiceType}>开票类型</span>
          <span className={styles.refundableAmount}>可退票金额（元）</span>
          <span className={styles.refundedAmount}>退票金额（元）</span>
        </div>
        <div className={styles.invoiceItem}>
          <span className={styles.ticketNumber}>票据号码0</span>
          <span className={styles.issueTime}>2025-01-0104:20:00</span>
          <span className={styles.creditInvoice}>信用金开票</span>
          <span className={styles.availableRefund}>824.83</span>
          <span className={styles.refundedValue}>1</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
