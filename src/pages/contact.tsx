// components
import MainLayout from "../components/MainLayout";
import PageTitle from "../components/PageTitle";
// styles
import sass from "@/new-portfolio/styles/pages/Contact.module.scss";
// contacts
import { contactsLinks } from "../utils";
import Head from "next/head";

const contact = () => {
  return (
    <MainLayout>
      <Head>
        <title>Контакты || SXNPAII's Universe 🌌</title>
      </Head>
      <PageTitle
        title="Контакты"
        description="Аккаунты, учётные записи, контакты и соц. сети автора в одном месте. Свяжитесь если возникли какие-то вопросы или же предложения."
      />
      <div className={`${sass.Contacts} flexbox`}>
        <ul>
          <h4 className="heading-text">Основные контакты </h4>
          <li className="basic-text">axurshidbek2005@gmail.com</li>
          <li className="basic-text">+998 93 857 77 66</li>
          <br />
          {contactsLinks
            .map((el) => (
              <li key={el.link}>
                <a href={el.link} className="basic-text" target="_blank">
                  {el.name}
                </a>
              </li>
            ))
            .splice(0, 3)}
        </ul>
        <ul>
          <h4 className="heading-text">Блоги на других платформах</h4>
          {contactsLinks
            .map((el) => (
              <li key={el.link}>
                <a href={el.link} className="basic-text" target="_blank">
                  {el.name}
                </a>
              </li>
            ))
            .splice(3, 3)}
        </ul>
        <ul>
          <h4 className="heading-text">Другие..</h4>
          <li className="basic-text">khurshid7766@yandex.com</li>
          <li className="basic-text">+998 90 485 02 32</li>
          <br />
          {contactsLinks
            .map((el) => (
              <li key={el.link}>
                <a href={el.link} className="basic-text" target="_blank">
                  {el.name}
                </a>
              </li>
            ))
            .splice(6)}
        </ul>
      </div>
    </MainLayout>
  );
};

export default contact;
