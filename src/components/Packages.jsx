import { Check, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const whatsappNumber = "967780095211";

const packages = [
  {
    name: "الباقة الأساسية",
    label: "حل متكامل للانطلاق",
    description: "باقة تجمع أهم احتياجات مشروعك لبناء حضور بصري ورقمي واضح.",
    features: [
      "تصميم هوية بصرية متكاملة",
      "تصميم تجربة وواجهات المستخدم UI/UX",
      "تصميم وتطوير صفحة هبوط متجاوبة",
    ],
    featured: true,
  },
  {
    name: "باقة UI/UX + هوية بصرية",
    label: "للعلامات التي تستعد للنمو",
    description: "هوية قوية وتجربة استخدام واضحة تمنح مشروعك حضورًا متماسكًا.",
    features: [
      "هوية بصرية متكاملة ودليل استخدام",
      "تصميم تجربة وواجهات المستخدم UI/UX",
      "نظام بصري متناسق للمنتج الرقمي",
    ],
  },
  {
    name: "باقة UI/UX + صفحة هبوط",
    label: "لتقديم منتجك بوضوح",
    description:
      "تجربة رقمية وصفحة هبوط تساعدانك على عرض فكرتك وتحقيق أهدافها.",
    features: [
      "تصميم تجربة وواجهات المستخدم UI/UX",
      "تصميم صفحة هبوط متجاوبة",
      "تهيئة الصفحة لعرض الخدمة أو المنتج",
    ],
  },
  {
    name: "الباقة الأسبوعية للسوشيال ميديا",
    label: "حضور مستمر كل أسبوع",
    description: "محتوى بصري أسبوعي يحافظ على حضور علامتك وتفاعلها.",
    features: [
      "تخطيط محتوى أسبوعي",
      "تصميم منشورات وقصص للسوشيال ميديا",
      "محتوى متناسق مع هوية العلامة",
    ],
  },
  {
    name: "الباقة نصف الشهرية للسوشيال ميديا",
    label: "لإيقاع محتوى متوازن",
    description: "حل مرن لإدارة المحتوى البصري على مدار نصف الشهر.",
    features: [
      "تخطيط محتوى لنصف شهر",
      "تصميم منشورات وقصص للسوشيال ميديا",
      "تنويع بصري يحافظ على تفاعل الجمهور",
    ],
  },
  {
    name: "الباقة الشهرية للسوشيال ميديا",
    label: "لحضور رقمي متكامل",
    description: "إدارة بصرية شهرية تمنح علامتك استمرارية وتناسقًا في المحتوى.",
    features: [
      "خطة محتوى شهرية",
      "تصميم منشورات وقصص للسوشيال ميديا",
      "قوالب بصرية متناسقة للعلامة",
    ],
  },
];

const getWhatsappLink = (packageName) => {
  const message = `مرحبًا فريق كاف ديجيتال، أرغب في الاستفسار عن ${packageName}. أود معرفة التفاصيل والبدء بمناقشة مشروعي.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const Packages = () => {
  return (
    <section
      id="packages"
      className="relative overflow-hidden border-y border-border-purple/60 bg-secondary-bg py-24"
    >
      <div
        className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-soft-purple/80 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary-purple/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-md bg-soft-purple px-4 py-1.5 text-sm font-bold text-primary-purple">
            باقات مصممة لمشروعك
          </span>
          <h2 className="mb-4 font-sans text-3xl font-extrabold leading-tight text-dark-purple sm:text-4xl">
            اختر نقطة البداية، ونحن نبني معك ما بعدها
          </h2>
          <p className="text-base font-medium leading-[1.8] text-secondary-text sm:text-lg">
            خيارات مرنة تساعدك على الانطلاق بوضوح، من تأسيس الهوية إلى بناء
            تجربة رقمية متكاملة.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {packages.map((packageItem, index) => (
            <motion.article
              key={packageItem.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                packageItem.featured
                  ? "border-primary-purple bg-white shadow-lg shadow-primary-purple/10 lg:-translate-y-3"
                  : "border-border-purple/80 bg-white/75"
              }`}
            >
              {packageItem.featured && (
                <div className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-primary-purple px-4 py-2 text-xs font-bold text-white shadow-lg shadow-primary-purple/20">
                  {/* <Sparkles className="h-3.5 w-3.5" /> */}
                  الأنسب لمعظم المشاريع
                </div>
              )}

              <div className="mb-8">
                <p className="mb-3 text-sm font-bold text-primary-purple">
                  {packageItem.label}
                </p>
                <h3 className="mb-3 text-2xl font-extrabold text-dark-purple">
                  {packageItem.name}
                </h3>
                <p className="min-h-14 text-sm leading-7 text-secondary-text">
                  {packageItem.description}
                </p>
              </div>

              <div className="mb-8 flex-1 border-t border-border-purple/60 pt-6">
                <p className="mb-4 text-xs font-bold tracking-wide text-dark-purple">
                  تشمل الباقة:
                </p>
                <ul className="space-y-3.5">
                  {packageItem.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-secondary-text"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-purple text-primary-purple">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsappLink(packageItem.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-400/20"
              >
                <MessageCircle className="h-5 w-5" />
                استفسر عن الباقة عبر واتساب
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-secondary-text">
          لا تجد ما يناسب احتياجك؟ نصمم لك باقة خاصة بعد فهم أهداف مشروعك.
        </p>
      </div>
    </section>
  );
};

export default Packages;
