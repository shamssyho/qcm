import React from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { createQuestionnaire } from '../../services/api';

const NewQuestionnaireForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: { name: string; description: string }) => {
        try {
            const response = await createQuestionnaire(values);
            console.log('Questionnaire Created:', response);
            form.resetFields();  // Reset the form fields after successful submission
        } catch (error) {
            console.error('Failed to create questionnaire:', error);
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-6">New Questionnaire</h2>
            <Form
                form={form}
                name="newQuestionnaire"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Intitulé"
                    name="name"
                    rules={[{ required: true, message: 'Please input the name of the questionnaire!' }]}
                >
                    <Input placeholder="Nom de votre questionnaire" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input the description!' }]}
                >
                    <TextArea showCount maxLength={1000} placeholder="Description de votre questionnaire" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        VALIDER
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default NewQuestionnaireForm;
