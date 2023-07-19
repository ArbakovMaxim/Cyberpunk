import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {
  // Определение схемы валидации с использованием Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Пожалуйста, введите ваше имя"),
    email: Yup.string()
      .email("Некорректный адрес электронной почты")
      .required("Пожалуйста, введите ваш email"),
    agreement: Yup.boolean().oneOf(
      [true],
      "Вы должны согласиться с условиями пользовательского соглашения"
    ),
  });

  interface Props {
    name: string;
    email: string;
    agreement: boolean;
  }

  // Обработка отправки формы
  const handleSubmit = (values: Props) => {
    console.log("Отправленные данные:", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        file: null,
        agreement: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <div className="wrapperFormName">
              <label className="inputLabel" htmlFor="name">
                Как тебя зовут?
              </label>
              <Field
                className="fieledForm"
                type="text"
                id="name"
                name="name"
                onFocus={(e: {
                  target: {
                    previousSibling: {
                      classList: { add: (arg0: string) => any };
                    };
                  };
                }) => e.target.previousSibling.classList.add("hidden")}
                onBlur={(e: {
                  target: {
                    value: string;
                    previousSibling: {
                      classList: { remove: (arg0: string) => any };
                    };
                  };
                }) =>
                  e.target.value === "" &&
                  e.target.previousSibling.classList.remove("hidden")
                }
              />
            </div>
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <div className="wrapperFormName">
              <label className="inputLabel" htmlFor="email">
                Твой е-mail
              </label>
              <Field
                className="fieledForm"
                type="email"
                id="email"
                name="email"
                onFocus={(e: {
                  target: {
                    previousSibling: {
                      classList: { add: (arg0: string) => any };
                    };
                  };
                }) => e.target.previousSibling.classList.add("hidden")}
                onBlur={(e: {
                  target: {
                    value: string;
                    previousSibling: {
                      classList: { remove: (arg0: string) => any };
                    };
                  };
                }) =>
                  e.target.value === "" &&
                  e.target.previousSibling.classList.remove("hidden")
                }
              />
            </div>
            <ErrorMessage name="email" component="div" />
          </div>

          <div className="inputLabelType">
            <label htmlFor="file" className="inputSkrin">
              Прикрепить скриншот <br />
              <span className="spanType">.png / .jpg / .pdf</span>
              <input
                className="inputSkrin"
                type="file"
                id="file"
                name="file"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0];
                  setFieldValue("file", file);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              <Field type="checkbox" name="agreement" />
              Согласен с условиями пользовательского соглашения
            </label>
            <ErrorMessage name="agreement" component="div" />
          </div>

          <button type="submit">Отправить</button>
        </Form>
      )}
    </Formik>
  );
};
