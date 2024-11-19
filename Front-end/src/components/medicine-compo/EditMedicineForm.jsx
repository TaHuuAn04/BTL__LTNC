import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber, DatePicker } from 'antd';
import dayjs from 'dayjs';

const EditMedicineForm = ({ medicine, onSave }) => {
    const [form] = Form.useForm();
    const [editedMedicine, setEditedMedicine] = useState(medicine);

    useEffect(() => {
        form.setFieldsValue({
            name: editedMedicine.name,
            type: editedMedicine.type,
            unitPrice: editedMedicine.unitPrice,
            quantityInStock: editedMedicine.quantityInStock,
            expirationDate: dayjs(editedMedicine.expirationDate),
            supplier: editedMedicine.supplier,
            note: editedMedicine.note,
        });
    }, [editedMedicine]);

    const onFinish = (values) => {
        // Convert expirationDate back to string in the required format
        const updatedMedicine = {
            ...editedMedicine,
            ...values,
            expirationDate: values.expirationDate.format('YYYY-MM-DD'),
        };
        onSave(updatedMedicine);
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item
                label="Tên thuốc"
                name="name"
                rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Loại thuốc"
                name="type"
                rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Giá"
                name="unitPrice"
                rules={[{ required: true, message: 'Please input the unitPrice of the medicine!' }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Số lượng"
                name="quantityInStock"
                rules={[{ required: true, message: 'Please input the quantityInStock of the medicine!' }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Ngày hết hạn"
                name="expirationDate"
                rules={[{ required: true, message: 'Please select the expiry date of the medicine!' }]}
            >
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Nhà cung cấp"
                name="supplier"
                rules={[{ required: true, message: 'Please input the supplier of the medicine!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Ghi chú"
                name="note"
                rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Lưu
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditMedicineForm;
