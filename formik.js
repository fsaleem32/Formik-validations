import * as Yup from "yup";


//Error Messages
export const errMsg = {
    choiceRequired: "いずれかを選択してください",
    tooLong: "長すぎます。",
    writingRequired: "入力してください",
};


//Create Interface
export interface IPostQuestionnaires {
    aboutSelection: string;
    proceedDiscussion: string;
    declinedSelection: string;
    resignationMessage: string;
}


//create initial Values
export const postInitialValues: IPostQuestionnaires = {
    aboutSelection: "",
    proceedDiscussion: "",
    declinedSelection: "",
    resignationMessage: "",
};


//create Schema
export const postQuestionSchema = Yup.object({
    aboutSelection: Yup.string().required(errMsg.choiceRequired),
    proceedDiscussion: Yup.string().required(errMsg.writingRequired),
    declinedSelection: Yup.string().required(errMsg.writingRequired),
    resignationMessage: Yup.string().required(errMsg.writingRequired),
});

import { ErrorMessage, Field, Form, Formik } from "formik";
import {
    postInitialValues,
    postQuestionSchema,
} from "../../../../constants/interfaces/postQuestionnaries";



<Formik
    initialValues={postInitialValues}
    validationSchema={postQuestionSchema}
    onSubmit={(values) => console.log(values)}
>
    {({ values }) => (
        <Form>
            <div className={styles.input_main}>
                <p>
                    1. 面談を踏まえ、選考に関する気持ちを教えてください
                    <sup>*</sup>
                </p>
                <div className={styles.context_wrapper}>
                    <div className={styles.radioButton}>
                        <div>
                            <Field
                                type="radio"
                                id="前向きにお話を進めたい"
                                name="aboutSelection"
                                value="前向きにお話を進めたい"
                            />
                            <label htmlFor="前向きにお話を進めたい">
                                前向きにお話を進めたい
                            </label>
                        </div>
                        <div>
                            <Field
                                type="radio"
                                id="もう少し検討したい"
                                name="aboutSelection"
                                value="もう少し検討したい"
                            />
                            <label htmlFor="もう少し検討したい">
                                もう少し検討したい
                            </label>
                        </div>
                        <div>
                            <Field
                                type="radio"
                                id="選考を辞退したい"
                                name="aboutSelection"
                                value="選考を辞退したい"
                            />
                            <label htmlFor="選考を辞退したい">気にしない</label>
                        </div>
                    </div>
                    <ErrorMessage
                        className={styles.error}
                        name="aboutSelection"
                        component="div"
                    />
                </div>
            </div>
            <div className={styles.input_main}>
                <p>
                    2.
                    1で「前向きにお話を進めたい」「もう少し検討したい」を選んだ方は、その理由を教えてください
                    <span>(500文字以内)</span>
                </p>
                <div className={styles.context_wrapper}>
                    <Field
                        as="textarea"
                        rows={12}
                        name="proceedDiscussion"
                        placeholder="どういう点に魅力を感じたかなど、具体的な内容を記入しましょう。"
                    />{" "}
                    <ErrorMessage
                        className={styles.error}
                        name="proceedDiscussion"
                        component="div"
                    />
                </div>
            </div>
            <div className={styles.input_main}>
                <p>
                    3.
                    1で「選考を辞退したい」を選んだ方は、その理由を教えてください
                    <span>(500文字以内)</span>
                </p>
                <div className={styles.context_wrapper}>
                    <Field
                        as="textarea"
                        rows={12}
                        name="declinedSelection"
                        placeholder="辞退したいと考える要因になった具体的な内容を記入しましょう。"
                    />
                    <ErrorMessage
                        className={styles.error}
                        name="declinedSelection"
                        component="div"
                    />
                </div>
            </div>
            <div className={styles.input_main}>
                <p>選考辞退のメッセージ</p>
                <div className={styles.context_wrapper}>
                    <Field
                        as="textarea"
                        rows={15}
                        name="resignationMessage"
                        placeholder={`${
                            "株式会社○○　人事担当○○様\n" +
                            "\n" +
                            "お世話になります、先日面接をしていただいた○○と申します。\n" +
                            "面接の際はお忙しい中お時間を作ってくださり誠にありがとうございました。\n" +
                            "\n" +
                            "お時間を頂いたのにも関らずこの様なご連絡になってしまい大変心苦しいのですが、この度の選考は××××の理由により、辞退させて頂きたく存じます。\n" +
                            "身勝手ではございますが、何卒ご容赦くださいます様お願い申し上げます。\n" +
                            "また、本来であれば貴社にお伺いしてお詫びするべき所をメッセージでのご連絡となります事、重ねてお詫び申し上げます。\n" +
                            "\n" +
                            "貴社のますますのご発展とご活躍をお祈り申し上げます。\n" +
                            "\n" +
                            "○○　○○（名前）"
                        }`}
                    />
                    <ErrorMessage
                        className={styles.error}
                        name="resignationMessage"
                        component="div"
                    />
                </div>
            </div>
            <div>
                <button type="submit">sadsada</button>
            </div>
            <div className={styles.btn}>
                <JobButton title="メッセージ画面に戻る" color={true} />
                <JobButton title="この内容で回答する" />
            </div>
        </Form>
    )}
</Formik>
