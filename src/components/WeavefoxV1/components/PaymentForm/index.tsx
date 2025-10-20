import React, { useState } from 'react';
import { Form, Radio, Select, message } from 'antd';

import styles from './index.module.less';

const PaymentForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const formInitialValues = { selectPaymentMethod: '', paymentInfo: '' };

  // 提交表单
  const onFinish = async () => {
    if (loading) {
      return;
    }

    try {
      setLoading(true);

      // 提交表单数据
    } catch (e) {
      message.error('提交失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.paymentMethodSection}>
        <span className={styles.paymentMethodLabel}>支付方式</span>
      </div>
      <div className={styles.incentiveDetailsSection}>
        <div className={styles.incentiveItemContainer}>
          <div className={styles.incentiveItemHeader}>
            <span className={styles.paymentMethodLabel}>激励条目ID</span>
            <span className={styles.incentiveAmountLabel}>返点激励金额</span>
          </div>
          <div className={styles.incentiveItemBody}>
            <span className={styles.paymentMethodLabel}>0004-展示可以确认</span>
            <span className={styles.incentiveAmountValue}>1元</span>
          </div>
        </div>
        <Form
          form={form}
          initialValues={formInitialValues}
          labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
          layout="horizontal"
          wrapperCol={{ xs: { span: 24 }, sm: { span: 18 } }}
          onFinish={onFinish}
          className={styles.formWrapper}
        >
          <Form.Item
            name="selectPaymentMethod"
            label="选择支付方式"
            labelCol={{ sm: { span: 6 }, xs: { span: 24 } }}
            layout="horizontal"
            required
            wrapperCol={{ sm: { span: 18, offset: 0 }, xs: { span: 24 } }}
          >
            <Radio.Group defaultValue="1" className={styles.radiosWrapper}>
              <Radio value="1">
                <img
                  alt=""
                  src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                  className={styles.paymentOptionIcon}
                />
              </Radio>
              <Radio checked={false} value="2">
                <img
                  alt=""
                  src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                  className={styles.paymentOptionIcon}
                />
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="paymentInfo"
            label="支付信息"
            labelCol={{ sm: { span: 6 }, xs: { span: 24 } }}
            layout="horizontal"
            required
            wrapperCol={{ sm: { span: 18, offset: 0 }, xs: { span: 24 } }}
          >
            <Select
              disabled={false}
              options={[]}
              placeholder="xxxxxxxxxxxx-1"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PaymentForm;
