import { useTranslation } from "react-i18next";

export default function CookiesPolicyPage() {
  const { t } = useTranslation();
  const email = "info@giedesports.com";

  return (
    <main className="bg-gray-50 text-black py-20 px-4 md:px-8 lg:px-12 mt-32">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-panton text-principal font-bold mb-6">
          {t("legalPages.cookiesPolicy.title")}
        </h1>

        <div className="space-y-6 text-gray-700 font-montserrat leading-relaxed">
          <p>{t("legalPages.cookiesPolicy.intro")}</p>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.cookiesPolicy.sections.whatAreCookies.title")}
            </h2>
            <p>{t("legalPages.cookiesPolicy.sections.whatAreCookies.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.cookiesPolicy.sections.cookiesUsed.title")}
            </h2>
            <p>{t("legalPages.cookiesPolicy.sections.cookiesUsed.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.cookiesPolicy.sections.thirdParty.title")}
            </h2>
            <p>{t("legalPages.cookiesPolicy.sections.thirdParty.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.cookiesPolicy.sections.disable.title")}
            </h2>
            <p>{t("legalPages.cookiesPolicy.sections.disable.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-panton font-bold text-principal">
              {t("legalPages.cookiesPolicy.sections.contact.title")}
            </h2>
            <p>
              {t("legalPages.cookiesPolicy.sections.contact.textBeforeEmail")}{" "}
              <a
                href={`mailto:${email}`}
                className="text-principal font-bold hover:text-turquesa65 transition-colors"
              >
                {email}
              </a>
              {t("legalPages.cookiesPolicy.sections.contact.textAfterEmail")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
