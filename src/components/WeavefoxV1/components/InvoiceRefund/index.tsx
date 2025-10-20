import React, { useState } from 'react';
import { Alert, InputNumber, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const InvoiceRefund: React.FC = () => {
  const [inputNumberValue, setInputNumberValue] = useState();
  const [field0Value, setField0Value] = useState('');
  const [field0Value2, setField0Value2] = useState('');
  const [field0Value3, setField0Value3] = useState('');

  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.headerSection}>
        <span className={styles.selectInvoiceLabel}>选择关联发票</span>
      </div>
      <Alert
        type="error"
        message={
          <span className={styles.associatedInvoicesLabel}>
            提示：退票金额之和需完全等于返点激励金额；每条关联发票的退票金额填入需小于等于可开票金额
          </span>
        }
        showIcon
        className={styles.alertMessage}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.amountSection}>
          <span className={styles.associatedInvoicesLabel}>返点激励金额</span>
          <span className={styles.incentiveAmountValue}>1元</span>
        </div>
        <div className={styles.associatedInvoicesSection}>
          <span className={styles.associatedInvoicesLabel}>*关联发票</span>
          <span className={styles.associatedInvoicesInfo}>
            已关联发票4条，已填写退票金额：1元，满足退票条件
          </span>
        </div>
        <div className={styles.addInvoiceSection}>
          <div className={styles.addInvoiceButtonGroup}>
            <PlusOutlined className={styles.addInvoiceIcon} />
            <a className={styles.addInvoiceLink}>添加发票</a>
          </div>
          <div className={styles.removeInvoiceSection}>
            <img
              alt=""
              src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
              className={styles.invoiceImage}
            />
            <span className={styles.removeInvoiceLabel}>删除发票</span>
          </div>
        </div>
        <div className={styles.invoiceDetailsHeader}>
          <span className={styles.invoiceNumberLabel}>发票编号</span>
          <span className={styles.issueDateLabel}>开票时间</span>
          <span className={styles.refundableAmountLabel}>开票类型</span>
          <span className={styles.refundableAmountLabel}>可退票金额（元）</span>
          <span className={styles.refundedAmountLabel}>退票金额（元）</span>
        </div>
        <div className={styles.invoiceList}>
          <div className={styles.invoiceItem}>
            <span className={styles.invoiceNumberValue}>票据号码0</span>
            <span className={styles.issueDateValue}>2025-01-0104:20:00</span>
            <span className={styles.invoiceTypeValue}>信用金开票</span>
            <span className={styles.refundableAmountValue}>3</span>
            <InputNumber
              disabled={false}
              defaultValue={0}
              placeholder="1"
              value={inputNumberValue}
              onChange={e => {
                setInputNumberValue(e);
              }}
              className={styles.refundInputNumber}
            />
          </div>
          <div className={styles.invoiceItem2}>
            <span className={styles.invoiceNumberValue}>票据号码 1</span>
            <span className={styles.issueDateValue2}>2025-01-0104:20:01</span>
            <span className={styles.invoiceTypeValue2}>信用金开票</span>
            <span className={styles.refundableAmountValue2}>63.83</span>
            <Input
              placeholder="0"
              value={field0Value}
              onChange={e => {
                setField0Value(e.target.value);
              }}
              className={styles.refundInput}
            />
          </div>
          <div className={styles.invoiceItem3}>
            <span className={styles.invoiceNumberValue}>票据号码2</span>
            <span className={styles.issueDateValue}>2025-01-0104:20:02</span>
            <span className={styles.invoiceTypeValue3}>信用金开票</span>
            <span className={styles.refundableAmountValue3}>1049.65</span>
            <Input
              placeholder="0"
              value={field0Value2}
              onChange={e => {
                setField0Value2(e.target.value);
              }}
              className={styles.refundInput2}
            />
          </div>
          <div className={styles.invoiceItem4}>
            <span className={styles.invoiceNumberValue}>票据号码3</span>
            <span className={styles.issueDateValue2}>2025-01-0104:20:03</span>
            <span className={styles.invoiceTypeValue}>信用金开票</span>
            <span className={styles.refundableAmountValue2}>918</span>
            <Input
              placeholder="0"
              value={field0Value3}
              onChange={e => {
                setField0Value3(e.target.value);
              }}
              className={styles.clsInput3}
            />
          </div>
        </div>
        <div className={styles.clsDiv30} />
      </div>
    </div>
  );
};

export default InvoiceRefund;
