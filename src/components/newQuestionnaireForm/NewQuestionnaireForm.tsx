import React, { ChangeEvent } from 'react';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import type { FormProps } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};

const NewQuestionnaireForm: React.FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-6">New Questionnaire</h2>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className="max-w-xl"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Intitulé"
                className="border-b-0"
            >
                <Input placeholder="Nom de votre questionnaire" className="border border-gray-900 rounded-lg" />
            </Form.Item>

            <Form.Item<FieldType>
                label="Description"
                className="border-b-0"
            >
                <TextArea
                    showCount
                    maxLength={1000}
                    onChange={onChange}
                    placeholder="Description de votre questionnaire"
                    className="h-64 border border-gray-900 rounded-lg"
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <button className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    VALIDER
                </button>
            </Form.Item>
        </Form>
    </>
);

export default NewQuestionnaireForm;
