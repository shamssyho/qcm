import React from 'react';
import { Form, Input, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { createQuestionnaire } from '../../services/api';

const NewQuestionnaireForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            await createQuestionnaire(values);
            notification.success({
                message: 'Questionnaire créé',
                description: 'Le questionnaire a été créé avec succès.'
            });
            form.resetFields();
        } catch (error) {
            notification.error({
                message: 'Erreur',
                description: 'Une erreur est survenue lors de la création du questionnaire.'
            });
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-6">Nouveau Questionnaire</h2>
            <Form
                form={form}
                name="new_questionnaire"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    label="Intitulé"
                    rules={[{ required: true, message: 'Veuillez saisir le nom du questionnaire!' }]}
                >
                    <Input placeholder="Nom de votre questionnaire" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea
                        showCount
                        maxLength={1000}
                        placeholder="Description de votre questionnaire"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800">
                        VALIDER
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};

export default NewQuestionnaireForm;
