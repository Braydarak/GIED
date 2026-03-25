import { useTranslation } from "react-i18next";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const email = "info@giedesports.com";

  return (
    <main className="bg-gray-50 text-black py-20 px-4 md:px-8 lg:px-12 mt-32">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-panton text-principal font-bold mb-6">
          {t("legalPages.privacyPolicy.title")}
        </h1>

        <div className="space-y-6 text-gray-700 font-montserrat leading-relaxed">
          <p>{t("legalPages.privacyPolicy.intro")}</p>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.controller.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.controller.text")}</p>
            <ul className="space-y-1">
              <li>
                <span className="font-bold">
                  {t(
                    "legalPages.privacyPolicy.sections.controller.fields.controllerLabel",
                  )}
                  :
                </span>{" "}
                {t(
                  "legalPages.privacyPolicy.sections.controller.fields.controllerValue",
                )}
              </li>
              <li>
                <span className="font-bold">
                  {t(
                    "legalPages.privacyPolicy.sections.controller.fields.idLabel",
                  )}
                  :
                </span>{" "}
                {t(
                  "legalPages.privacyPolicy.sections.controller.fields.idValue",
                )}
              </li>
              <li>
                <span className="font-bold">
                  {t(
                    "legalPages.privacyPolicy.sections.controller.fields.addressLabel",
                  )}
                  :
                </span>{" "}
                {t(
                  "legalPages.privacyPolicy.sections.controller.fields.addressValue",
                )}
              </li>
              <li>
                <span className="font-bold">
                  {t(
                    "legalPages.privacyPolicy.sections.controller.fields.emailLabel",
                  )}
                  :
                </span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-principal font-bold hover:text-turquesa65 transition-colors"
                >
                  {email}
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.dataProcessed.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.dataProcessed.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.purposes.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.purposes.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.legalBasis.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.legalBasis.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.retention.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.retention.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.recipients.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.recipients.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.rights.title")}
            </h2>
            <p>
              {t("legalPages.privacyPolicy.sections.rights.textBeforeEmail")}{" "}
              <a
                href={`mailto:${email}`}
                className="text-principal font-bold hover:text-turquesa65 transition-colors"
              >
                {email}
              </a>
              {t("legalPages.privacyPolicy.sections.rights.textAfterEmail")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.privacyPolicy.sections.security.title")}
            </h2>
            <p>{t("legalPages.privacyPolicy.sections.security.text")}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
