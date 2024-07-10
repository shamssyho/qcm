import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

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

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};


const NewQestioannireForm: React.FC = () => (
    <>
        <h2>New qestionnaire</h2>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Intitulé">
                <Input placeholder="Nom de votre questionnaire"
                    style={{ border: '1px solid #000', borderRadius: '10px' }} />
            </Form.Item>

            <Form.Item<FieldType>
                label="Description">
                <TextArea
                    showCount
                    maxLength={1000}
                    onChange={onChange}
                    placeholder="Description de votre questionnaire"
                    style={{ height: 250, border: '1px solid #000', borderRadius: '10px' }}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <button className="questionnaire-button">
                    VALIDER
                </button>
            </Form.Item>
        </Form>
    </>
);

export default NewQestioannireForm;