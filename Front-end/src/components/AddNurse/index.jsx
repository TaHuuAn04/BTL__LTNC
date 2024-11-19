import { Button, Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import React from 'react';

// const cx = classNames.bind(styles)
const { Option } = Select;
const CollectionCreateForm = ({ initialValues, onFormInstanceReady }) => {
    const [selectedFloor, setSelectedFloor] = useState();
    const [optionRoom, setOptionRoom] = useState([]);

    const handleFloorChange = (floor) => {
        setSelectedFloor(floor);
        generateRoom(floor);
    };

    const generateRoom = (floor) => {
        const startRoom = floor * 100 + 1;
        const endRoom = floor * 100 + 10;
        const opt = [];
        for (let i = startRoom; i <= endRoom; i++) {
            opt.push(
                <Option key={i} value={String(i)}>
                    {i}
                </Option>,
            );
        }
        setOptionRoom(opt);
    };

    const [form] = Form.useForm();
    useEffect(() => {
        onFormInstanceReady(form);
    }, []);
    return (
        <Form layout="vertical" form={form} name="form_in_modal">
            <Form.Item
                name="name"
                label="Họ tên"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập họ tên',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="sex"
                label="Giới tính"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn giới tính cho y tá!',
                    },
                ]}
            >
                <Select placeholder="Vui lòng chọn giới tính">
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="qualifications"
                label="Chứng chỉ"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn chứng chỉ!',
                    },
                ]}
            >
                <Checkbox.Group
                    style={{
                        width: '100%',
                    }}
                >
                    <Row>
                        <Col span={14}>
                            <Checkbox value="Điều dưỡng cơ bản">Điều dưỡng cơ bản</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="Điều dưỡng nâng cao">Điều dưỡng nâng cao</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item
                name="floor"
                label="Tầng"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn tầng!',
                    },
                ]}
            >
                <Select id="floor" placeholder="Vui lòng chọn tầng" onChange={handleFloorChange}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="room"
                label="Phòng"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn phòng!',
                    },
                ]}
            >
                <Select placeholder="Vui lòng chọn phòng">{optionRoom}</Select>
            </Form.Item>
            <Form.Item
                name="time_off"
                label="Ngày nghĩ trong tuần"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn ngày nghĩ trong tuần!',
                    },
                ]}
            >
                <Checkbox.Group
                    style={{
                        width: '100%',
                    }}
                >
                    <Row>
                        <Col span={14}>
                            <Checkbox value="2">Thứ 2</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="3">Thứ 3</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="4">Thứ 4</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="5">Thứ 5</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="6">Thứ 6</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="7">Thứ 7</Checkbox>
                        </Col>
                        <Col span={14}>
                            <Checkbox value="8">Chủ nhật</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
        </Form>
    );
};
const CollectionCreateFormModal = ({ open, onCreate, onCancel, initialValues, callAPI, updateTotal }) => {
    const [formInstance, setFormInstance] = useState();
    return (
        <Modal
            open={open}
            title="Thêm mới y tá"
            okText="Xác nhận"
            cancelText="Hủy"
            okButtonProps={{
                autoFocus: true,
            }}
            onCancel={onCancel}
            destroyOnClose
            onOk={async () => {
                try {
                    const values = await formInstance?.validateFields();
                    formInstance?.resetFields();
                    onCreate(values);
                    callAPI(values);
                    updateTotal();
                } catch (error) {
                    console.log('Failed:', error);
                }
            }}
        >
            <CollectionCreateForm
                initialValues={initialValues}
                onFormInstanceReady={(instance) => {
                    setFormInstance(instance);
                }}
            />
        </Modal>
    );
};
const AddNurse = ({ callAPI, updateTotal }) => {
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setFormValues(values);
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Thêm y tá
            </Button>
            <CollectionCreateFormModal
                open={open}
                onCreate={onCreate}
                onCancel={() => setOpen(false)}
                initialValues={{
                    modifier: 'public',
                }}
                callAPI={callAPI}
                updateTotal={updateTotal}
            />
        </>
    );
};
export default AddNurse;
