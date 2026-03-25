import { useTranslation } from "react-i18next";

export default function LegalNoticePage() {
  const { t } = useTranslation();
  const email = "info@giedesports.com";

  return (
    <main className="bg-gray-50 text-black py-20 px-4 md:px-8 lg:px-12 mt-32">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-panton text-principal font-bold mb-6">
          {t("legalPages.legalNotice.title")}
        </h1>

        <div className="space-y-6 text-gray-700 font-montserrat leading-relaxed">
          <p>{t("legalPages.legalNotice.intro")}</p>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.legalNotice.sections.owner.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.owner.text")}</p>
            <ul className="space-y-1">
              <li>
                <span className="font-bold">
                  {t(
                    "legalPages.legalNotice.sections.owner.fields.holderLabel",
                  )}
                  :
                </span>{" "}
                {t("legalPages.legalNotice.sections.owner.fields.holderValue")}
              </li>
              <li>
                <span className="font-bold">
                  {t("legalPages.legalNotice.sections.owner.fields.idLabel")}:
                </span>{" "}
                {t("legalPages.legalNotice.sections.owner.fields.idValue")}
              </li>
              <li>
                <span className="font-bold">
                  {t(
                    "legalPages.legalNotice.sections.owner.fields.addressLabel",
                  )}
                  :
                </span>{" "}
                {t("legalPages.legalNotice.sections.owner.fields.addressValue")}
              </li>
              <li>
                <span className="font-bold">
                  {t("legalPages.legalNotice.sections.owner.fields.emailLabel")}
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
              {t("legalPages.legalNotice.sections.purpose.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.purpose.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.legalNotice.sections.terms.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.terms.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.legalNotice.sections.ip.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.ip.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.legalNotice.sections.liability.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.liability.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.legalNotice.sections.thirdPartyLinks.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.thirdPartyLinks.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.legalNotice.sections.law.title")}
            </h2>
            <p>{t("legalPages.legalNotice.sections.law.text")}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
