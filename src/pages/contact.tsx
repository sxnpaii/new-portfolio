// components
import MainLayout from "../components/MainLayout";
import PageTitle from "../components/PageTitle";
// styles
import sass from "@/new-portfolio/styles/pages/Contact.module.scss";
// contacts
import { contactsLinks } from "../utils";
import Head from "next/head";

const Contact = () => {
  return (
    <MainLayout>
      <Head>
        <title>Контакты || SXNPAII's Universe 🌌</title>
      </Head>
      <PageTitle
        title="Контакты"
        description="Основные контакты автора. Только актуальные."
      />
      <div className={`${sass.Contacts} flexbox`}>
        <ul>
          <h4 className="heading-text">Основные</h4>
          <div className={sass.List + " w-auto"}>
            <li>
              <a href="mailto:axurshidbek2005@gmail.com">
                <span>axurshidbek2005@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+998938577766">
                <span>+998 93 857 77 66</span>
              </a>
            </li>
          </div>
        </ul>
        <ul>
          <h4 className="heading-text">Социальные сети</h4>
          <div className={sass.List}>
            {contactsLinks.map((contact) => (
              <li>
                <a href={contact.link} target="_black">
                  <img
                    src={`/icons/${contact.name.toLocaleLowerCase()}.svg`}
                    alt={`$${contact.name} icon`}
                  />
                  <span>{contact.name}</span>
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </MainLayout>
  );
};

export default Contact;
