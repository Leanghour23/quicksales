import logo from '../assets/logo-quicksales.jpg';
import working from '../assets/working.jpg';
import sale from '../assets/sales-management.png';
import checklists from '../assets/checklists.png';
import invoice from '../assets/invoice.png';
import cash from '../assets/cash-flow.png';
import meeting from '../assets/bussiness-meeting.jpg';
import client1 from '../assets/client-logos/ppl.jpg';
import client2 from '../assets/client-logos/suc.jpg';
import client3 from '../assets/client-logos/pat.jpg';
import client4 from '../assets/client-logos/stt.png';
import contactImage from '../assets/contact-book.png';
import supportImage from '../assets/customer-support.png';
import facebook from '../assets/facebook.png';
import telegram from '../assets/telegram.png';
import topRight from '../assets/top-right.png';

const siteContent = {
  nav: {
    logo: {
        img: logo,
        text: 'Logo',
      title: {
        text: 'Quicksales',
      },
    },
    telegramLink: 'https://t.me/ouchamroeun',
    menus: [
      {
        link: '#Home-content',
        label: {
          en: 'Home',
          kh: 'ទំព័រដើម',
        },
      },
      {
        dropdown: true,
        label: {
          en: 'Service',
          kh: 'សេវាកម្ម',
        },
        submenu: [
          {
            link: '#service-cmd',
            label: {
              en: 'Comtomer Relationship Management',
              kh: 'Comtomer Relationship Management',
            },
          },
          {
            link: '#service-acc',
            label: {
              en: 'Accounting',
              kh: 'Accounting',
            },
          },
        ],
      },
      {
        link: '#Pricing-content',
        label: {
          en: 'Pricing',
          kh: 'តម្លៃ',
        },
      },
      {
        link: '#About-content',
        label: {
          en: 'About',
          kh: 'អំពីពួកយើង',
        },
      },
      {
        link: 'https://t.me/ouchamroeun',
        label: {
          en: 'Contact Us',
          kh: 'ទំនាក់ទំនងពួកយើង',
        },
        external: true,
      },
    ],
  },
  hero: {
    title: {
      en: 'Easy use,',
      kh: 'ងាយស្រួលប្រើ,',
    },
    subtitle: {
      en: 'Easy sales',
      kh: 'ងាយស្រួលលក់',
    },
    description: {
      en: "Quicksales enables faster issue resolution, increases customer retention, and drives greater customer happiness.",
      kh: 'Quicksales ជួយដោះស្រាយបញ្ហាបានលឿនជាងមុន បង្កើនការរក្សាអតិថិជនឱ្យនៅតែប្រើប្រាស់សេវាកម្ម និងបង្កើនការពេញចិត្តរបស់អតិថិជនកាន់តែខ្ពស់។',
    },
    cta: {
      en: 'Get Started Now',
      kh: 'ចាប់ផ្តើម',
    },
    cta2: {
      en: 'Learn more',
      kh: 'ព័ត៌មានបន្ថែម',
        icon: topRight,
    },
    clients: {
      title: {
        en: 'Clients',
        kh: 'អតិថិជនរបស់យើង',
      },
      description: {
        en: 'MANY BRANDS HAVE TRUSTED ON US',
        kh: 'អតិថិជនជាច្រើនបានជឿទុកចិត្តលើយើង',
      },
      logos: [
        { img: client1, text: 'PPL' },
        { img: client2, text: 'StartUP Community' },
        { img: client3, text: 'PATech' },
        { img: client4, text: 'SOTOTIAK TRADING CO., LTD' },
      ],
    },
  },
  about: {
    title: {
      en: 'About Us',
      kh: 'អំពីពួកយើង',
    },
    description: {
      en: 'Experience the future of business with our secure, efficient, and user-friendly digital services',
      kh: 'បទពិសោធន៍អនាគតនៃអាជីវកម្មជាមួយសេវាកម្មឌីជីថលដែលមានសុវត្ថិភាព ប្រសិទ្ធភាព និងងាយស្រួលប្រើប្រាស់',
    },
    banner: {
      img: meeting,
      text: 'Meetings',
    },
    points: [
      {
        title: {
          en: 'Our story',
          kh: 'រឿងរបស់យើង',
        },
        detail: {
          en: 'Founded with the vision of revolutionizing the digital transformation, we are a leading digital tech company dedicated to providing innovative and business solutions.',
          kh: 'បង្កើតឡើងដោយមានចក្ខុវិស័យក្នុងការផ្លាស់ប្តូរឌីជីថលឱ្យកាន់តែទំនើប យើងជាក្រុមហ៊ុនបច្ចេកវិទ្យាឌីជីថលឈានមុខគេ ដែលប្តេជ្ញាផ្តល់ជូននូវដំណោះស្រាយ និងសេវាកម្មអាជីវកម្មប្រកបដោយនវានុវត្តន៍។',
        },
      },
      {
        title: {
          en: 'What is Quick Sales',
          kh: 'អ្វីទៅជាការលក់រហ័ស',
        },
        detail: {
          en: 'Our cutting-edge platform ensures your transactions are safe, streamlined, and easy to manage, empowering you to take control of your bu journey with confidence and convenience.',
          kh: 'វេទិកាទំនើបរបស់យើងធានាថា ប្រតិបត្តិការ និងការគ្រប់គ្រងអាជីវកម្មរបស់អ្នកមានសុវត្ថិភាព រហ័ស និងងាយស្រួលក្នុងការគ្រប់គ្រង។ យើងជួយឱ្យអ្នកមានភាពជឿជាក់ និងភាពងាយស្រួលក្នុងការដឹកនាំ និងអភិវឌ្ឍអាជីវកម្មរបស់អ្នកឆ្ពោះទៅរកភាពជោគជ័យ។',
        },
      },
    ],
  },
  service: {
    title: {
      en: 'Our Services',
      kh: 'សេវាកម្មរបស់យើង',
    },
    description: {
      en: 'Discover the range of services we offer to help you maximize the potential of our CRM system.',
      kh: 'ស្វែងរកជួរសេវាកម្មដែលយើងផ្តល់ដើម្បីជួយអ្នកបង្កើនសក្តានុពលនៃប្រព័ន្ធ CRM របស់យើង។',
    },
    subtitle: {
      en: 'Comtomer Relationship Management',
      kh: 'Comtomer Relationship Management',
    },
    cards: [
      {
        title: {
          en: 'Contact and Lead Management',
          kh: 'ការគ្រប់គ្រងទំនាក់ទំនង និងអតិថិជនសក្តានុពល',
        },
        description: {
          en: 'CRM stores and organizes customer and prospect data, including contact information, interaction history, and preferences.',
          kh: 'CRM ផ្ទុក និងរៀបចំទិន្នន័យអតិថិជន និងអតិថិជនសក្តានុពល រួមទាំងព័ត៌មានទំនាក់ទំនង ប្រវត្តិអន្តរកម្ម និងចំណូលចិត្ត។',
        },
        icon: contactImage,
      },
      {
        title: {
          en: 'Sales Management and Automation',
          kh: 'ការគ្រប់គ្រងការលក់ និងស្វ័យប្រវត្តិកម្ម',
        },
        description: {
          en: 'CRMs help sales teams with pipeline tracking, deal management.',
          kh: 'CRM ជួយក្រុមលក់ជាមួយនឹងការតាមដានបំពង់លក់ និងការគ្រប់គ្រងកិច្ចព្រមព្រៀង។',
        },
        icon: sale,
      },
      {
        title: {
          en: 'Customer Support and Case Management',
          kh: 'ជំនួយអតិថិជន និងការគ្រប់គ្រងករណី',
        },
        description: {
          en: 'CRMs provide customer service teams with tools to manage and resolve issues.',
          kh: 'CRM ផ្តល់ឱ្យក្រុមសេវាកម្មអតិថិជននូវឧបករណ៍ដើម្បីគ្រប់គ្រង និងដោះស្រាយបញ្ហា។',
        },
        icon: supportImage,
      },
    ],
    accTitle: {
      en: 'ACCOUNTING',
      kh: 'ACCOUNTING',
    },
    accCards: [
      {
        title: {
          en: 'Inventory & Asset Optimization',
          kh: 'Inventory & Asset Optimization',
        },
        description: {
          en: 'I transform inventory from a cost center into a strategic asset. Through meticulous tracking, predictive analysis, and streamlined workflows, I ensure operational precision. My focus is on reducing waste, increasing turnover, and delivering clear visibility across the entire supply chain.',
          kh: 'តាមដានវិក្កយបត្រ ចេញឯកសារវិក្កយបត្រ និងរក្សាទុកកំណត់ត្រាបង់ប្រាក់ឲ្យមានរបៀបរៀបរយនៅកន្លែងតែមួយ។',
        },
        icon: checklists,
      },
      {
        title: {
          en: 'Invoice & Billing Management',
          kh: 'Invoice & Billing Management',
        },
        description: {
          en: 'Efficient billing is the backbone of healthy cash flow. My approach focuses on creating streamlined invoicing systems that eliminate payment delays and reduce administrative errors. I design solutions that automate invoice generation, track payment statuses in real-time, and simplify reconciliation processes.',
          kh: 'តាមដានកាលបរិច្ឆេទដែលត្រូវបង់ ការបង់ប្រាក់មួយផ្នែក និងសមតុល្យអតិថិជនជាមួយនឹងទិដ្ឋភាពហិរញ្ញវត្ថុច្បាស់លាស់។',
        },
        icon: invoice,
      },
      {
        title: {
          en: 'Expense Management',
          kh: 'Expense Management',
        },
        description: {
          en: 'Controlling costs is just as critical as driving revenue. My approach to expense management focuses on creating full visibility into where money is going—from operational costs and vendor payments to travel expenses and overhead. I design systems that automate expense tracking, enforce spending policies, and provide real-time budget monitoring. ',
          kh: 'បង្កើតរបាយការណ៍ហិរញ្ញវត្ថុ និងផ្ទៀងផ្ទាត់សកម្មភាពគណនីបានលឿនជាងមុន ដោយចំនួនជំហានធ្វើដោយដៃតិចជាងមុន។',
        },
        icon: cash,
      },
    ],
  },
  pricing: {
    title: {
      en: 'Pricing',
      kh: 'តម្លៃ',
    },
    subtitle: {
      en: 'We understand that every business is unique, and so are your CRM needs.',
      kh: 'យើងយល់ថាអាជីវកម្មនីមួយៗមានលក្ខណៈប្លែកពីគេ ហើយតម្រូវការ CRM របស់អ្នកក៏ដូចគ្នាដែរ។',
    },
    description: {
      en: 'We offer tailored solutions to help you manage customer relationships effectively and drive growth.',
      kh: 'យើងផ្តល់ជូននូវដំណោះស្រាយសមស្របដើម្បីជួយអ្នកក្នុងការគ្រប់គ្រងទំនាក់ទំនងអតិថិជនប្រកបដោយប្រសិទ្ធភាព និងជំរុញកំណើន។',
    },
    actions: [
      {
        en: 'Comtomer Relationship Management',
        kh: 'Comtomer Relationship Management',
        href: '#Pricing-content',
        target: 'crm',
      },
      {
        en: 'Accounting',
        kh: 'Accounting',
        href: '#Pricing-content',
        target: 'acc',
      },
    ],
    monthlyLabel: {
      en: 'Monthly',
      kh: 'ប្រចាំខែ',
    },
    yearlyLabel: {
      en: 'Yearly (5% OFF)',
      kh: 'ប្រចាំឆ្នាំ (5% OFF)',
    },
    plans: [
      {
        variant: 'light',
        group: 'crm',
        title: {
          en: 'Essentials',
          kh: 'Essentials',
        },
        price: 6,
        description: {
          en: 'Start business with smart financial tools',
          kh: 'ការចាប់ផ្តើមអាជីវកម្ម និងអាជីវកម្មខ្នាតតូចទើបតែចាប់ផ្តើមស្វែងរកដំណោះស្រាយ CRM ។',
        },
        features: [
          {
            en: 'Basic CRM System Access',
            kh: 'ការចូលប្រើប្រព័ន្ធ CRM មូលដ្ឋាន',
          },
          {
            en: 'Lead Management',
            kh: 'ការគ្រប់គ្រងព័ត៌មានដំបូងអតិថិជន',
          },
          {
            en: 'Task Management',
            kh: 'ការគ្រប់គ្រងភារកិច្ចទំនាក់ទំនងអតិថិជន',
          },
          {
            en: 'Contact Management',
            kh: 'ការគ្រប់គ្រងព័ត៌មានអតិថិជន',
          },
          {
            en: 'Email Automation',
            kh: 'ស្វ័យប្រវត្តិកម្មអ៊ីមែល',
          },
        ],
      },
      {
        variant: 'dark',
        group: 'crm',
        title: {
          en: 'Advanced',
          kh: 'Advanced',
        },
        featureHeading: {
          en: 'Features',
          kh: 'Features',
        },
        price: 10,
        description: {
          en: 'Advanced financial control for scaling businesses',
          kh: 'សហគ្រាសធំៗត្រូវការប្រព័ន្ធ CRM ដ៏ទូលំទូលាយជាមួយនឹងការគាំទ្រយ៉ាងទូលំទូលាយ និងជម្រើសប្ដូរតាមបំណង។',
        },
        features: [
          {
            en: 'Inventory Management',
            kh: 'ការចូលប្រើប្រព័ន្ធ CRM ពេញលេញ',
          },
          {
            en: 'Sale Management',
            kh: 'ការវិភាគកម្រិតខ្ពស់ និងការរាយការណ៍',
          },
          {
            en: 'Payment Tracking',
            kh: 'ការបែងចែកអតិថិជន',
          },
          {
            en: 'Exepense Mangement',
            kh: 'ការគាំទ្រអាទិភាព',
          },
          {
            en: 'Income Statement',
            kh: 'អ្នកគ្រប់គ្រងគណនីពិសេស',
          },
          {
            en: 'Balance sheet',
            kh: 'អ្នកគ្រប់គ្រងគណនីពិសេស',
          },
        ],
      },
      {
        variant: 'light',
        group: 'acc',
        anchor: 'pricing-cdm',
        title: {
          en: 'Essentials',
          kh: 'Essentials',
        },
        price: 15,
        description: {
          en: 'Start business with smart financial tools',
          kh: 'រក្សាព័ត៌មានទំនាក់ទំនង ព័ត៌មានអតិថិជនសក្តានុពល និងកិច្ចព្រមព្រៀងឱ្យមានរបៀបរៀបរយនៅក្នុងកន្លែងធ្វើការតែមួយ។',
        },
        features: [
          {
            en: 'Contact Management',
            kh: 'ការគ្រប់គ្រងទំនាក់ទំនង',
          },
          {
            en: 'Lead Tracking',
            kh: 'ការតាមដានអតិថិជនសក្តានុពល',
          },
          {
            en: 'Task Follow-up',
            kh: 'ការតាមដានភារកិច្ច',
          },
          {
            en: 'Deal Monitoring',
            kh: 'ការតាមដានកិច្ចព្រមព្រៀង',
          },
          {
            en: 'Quick Reporting',
            kh: 'របាយការណ៍រហ័ស',
          },
        ],
      },
      {
        variant: 'dark',
        group: 'acc',
        anchor: 'pricing-acc',
        title: {
          en: 'Premium',
          kh: 'Premium',
        },
        featureHeading: {
          en: 'Features',
          kh: 'Features',
        },
        price: 30,
        description: {
          en: 'Advanced financial control for scaling businesses',
          kh: 'គ្រប់គ្រងវិក្កយបត្រ ការតាមដានការទូទាត់ និងកំណត់ត្រាគណនីដោយមានការងារដោយដៃតិចជាងមុន។',
        },
        features: [
          {
            en: 'Inventory Management',
            kh: 'ការគ្រប់គ្រងវិក្កយបត្រ',
          },
          {
            en: 'Sale Management',
            kh: 'ការតាមដានការទូទាត់',
          },
          {
            en: 'Payment Tracking',
            kh: 'ទិដ្ឋភាពសមតុល្យ',
          },
          {
            en: 'Exepense Mangement',
            kh: 'ប្រវត្តិវិក័យប័ត្រ',
          },
          {
            en: 'Account Income Statement',
            kh: 'របាយការណ៍គណនី',
          },
          {
            en: 'Balance sheet',
            kh: 'របាយការណ៍គណនី',
          },
        ],
      },
    ],
  },
  faq: {
    title: {
      en: 'FAQ',
      kh: 'FAQ',
    },
    heading: {
      en: 'Frequently Asked Questions',
      kh: 'សំណួរដែលគេសួរញឹកញាប់',
    },
    description1: {
      en: 'Improved conversion rates, included beautiful designs - just a few things our clients love!',
      kh: 'អត្រាបំប្លែងដែលប្រសើរឡើង រួមបញ្ចូលការរចនាដ៏ស្រស់ស្អាត - គ្រាន់តែជារបស់មួយចំនួនដែលអតិថិជនរបស់យើងចូលចិត្ត!',
    },
    accordion: [
      {
        title: {
          en: 'Why choose Quick Sales',
          kh: 'ហេតុអ្វីត្រូវជ្រើសរើស Quick Sales',
        },
        detail: {
          en: 'Choosing Quick Sales as your CRM (Customer Relationship Management) system offers several advantages that can help improve sales processes, customer engagement, and overall business efficiency.',
          kh: 'ការជ្រើសរើសការលក់រហ័សជាប្រព័ន្ធ CRM (ការគ្រប់គ្រងទំនាក់ទំនងអតិថិជន) របស់អ្នកផ្តល់នូវអត្ថប្រយោជន៍ជាច្រើនដែលអាចជួយកែលម្អដំណើរការលក់ ការចូលរួមរបស់អតិថិជន និងប្រសិទ្ធភាពអាជីវកម្មទាំងមូល។',
        },
      },
      {
        title: {
          en: 'What is CRM and how can it benefit my business?',
          kh: 'តើ CRM គឺជាអ្វី ហើយតើវាអាចផ្តល់អត្ថប្រយោជន៍ដល់អាជីវកម្មរបស់ខ្ញុំយ៉ាងដូចម្តេច?',
        },
        detail: {
          en: 'Customer Relationship Management (CRM) is a technology or strategy that businesses use to manage interactions with current and potential customers. CRM systems help organize, track, and nurture customer relationships, providing a 360-degree view of all customer touchpoints, including communications, purchases, support history, and marketing interactions.',
          kh: 'ការគ្រប់គ្រងទំនាក់ទំនងអតិថិជន (CRM) គឺជាបច្ចេកវិទ្យា ឬយុទ្ធសាស្ត្រដែលអាជីវកម្មប្រើប្រាស់ដើម្បីគ្រប់គ្រងអន្តរកម្មជាមួយអតិថិជនបច្ចុប្បន្ន និងសក្តានុពល។ ប្រព័ន្ធ CRM ជួយរៀបចំ តាមដាន និងចិញ្ចឹមទំនាក់ទំនងអតិថិជន ដោយផ្តល់នូវទិដ្ឋភាព 360 ដឺក្រេនៃចំណុចទំនាក់ទំនងអតិថិជនទាំងអស់ រួមទាំងទំនាក់ទំនង ការទិញ ប្រវត្តិគាំទ្រ និងអន្តរកម្មទីផ្សារ។',
        },
      },
      {
        title: {
          en: 'How do I know if CRM is right for my business?',
          kh: 'តើខ្ញុំដឹងដោយរបៀបណាថា CRM ត្រឹមត្រូវសម្រាប់អាជីវកម្មរបស់ខ្ញុំ?',
        },
        detail: {
          en: "Deciding whether a Customer Relationship Management (CRM) system is right for your business depends on your specific needs, goals, and the challenges you're facing. Here are key factors to consider.",
          kh: 'ការសម្រេចចិត្តថាតើប្រព័ន្ធគ្រប់គ្រងទំនាក់ទំនងអតិថិជន (CRM) ត្រឹមត្រូវសម្រាប់អាជីវកម្មរបស់អ្នក អាស្រ័យលើតម្រូវការជាក់លាក់ គោលដៅ និងបញ្ហាប្រឈមដែលអ្នកកំពុងជួបប្រទះ។ នេះគឺជាកត្តាសំខាន់ៗដែលត្រូវពិចារណា។',
        },
      },
      {
        title: {
          en: 'What features should I look for in a CRM system?',
          kh: 'តើខ្ញុំគួររកមើលលក្ខណៈពិសេសអ្វីខ្លះនៅក្នុងប្រព័ន្ធ CRM?',
        },
        detail: {
          en: 'When choosing a CRM system, the right features can help streamline your business operations, improve customer relationships, and drive growth. Here are essential features to consider.',
          kh: 'នៅពេលជ្រើសរើសប្រព័ន្ធ CRM មុខងារត្រឹមត្រូវអាចជួយសម្រួលប្រតិបត្តិការអាជីវកម្មរបស់អ្នក ធ្វើឱ្យទំនាក់ទំនងអតិថិជនប្រសើរឡើង និងជំរុញកំណើន។ នេះគឺជាលក្ខណៈសំខាន់ៗដែលត្រូវពិចារណា។',
        },
      },
      {
        title: {
          en: 'How do I know if CRM is right for my business?',
          kh: 'តើខ្ញុំដឹងដោយរបៀបណាថា CRM ត្រឹមត្រូវសម្រាប់អាជីវកម្មរបស់ខ្ញុំ?',
        },
        detail: {
          en: "Deciding whether a CRM (Customer Relationship Management) system is right for your business depends on your specific needs, the challenges you're facing, and your business goals. Here are some key signs that a CRM might benefit your organization.",
          kh: 'ការសម្រេចចិត្តថាតើប្រព័ន្ធ CRM (ការគ្រប់គ្រងទំនាក់ទំនងអតិថិជន) ត្រឹមត្រូវសម្រាប់អាជីវកម្មរបស់អ្នក អាស្រ័យលើតម្រូវការជាក់លាក់របស់អ្នក បញ្ហាប្រឈមដែលអ្នកកំពុងប្រឈមមុខ និងគោលដៅអាជីវកម្មរបស់អ្នក។ នេះគឺជាសញ្ញាសំខាន់ៗមួយចំនួនដែល CRM អាចផ្តល់អត្ថប្រយោជន៍ដល់ស្ថាប័នរបស់អ្នក។',
        },
      },
    ],
  },
  Testimonuals: {
    eyebrow: "Testimonials",
    heading: "What Our Users Are Saying",
    subheading: "Real Stories of Success and Satisfaction from Our Diverse Community",
    items: [
      {
        text: "This platform has completely transformed the way I manage my business finances. The real-time transaction tracking and seamless payment options have saved me so much time and effort!",
        name: "John Davis",
        role: "Small Business Owner",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        text: "As a freelancer, managing my finances can be overwhelming. The budgeting tools and personalized insights have made it so much easier to stay on top of my expenses and plan for the future.",
        name: "Emily Smith",
        role: "Freelancer",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        text: "The investment options and portfolio management tools on this platform are top-notch. It's a game-changer for anyone serious about growing their wealth.",
        name: "Michael Rodriguez",
        role: "Investor",
        img: "https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        text: "The security features are outstanding. Knowing that my financial data is protected gives me peace of mind, and the platform's efficiency makes it a pleasure to use.",
        name: "James Kim",
        role: "IT Consultant",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        text: "I never thought managing money could be this simple! The user-friendly interface and secure transaction process give me the confidence to handle my finances independently.",
        name: "Sarah Lee",
        role: "College Student",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        text: "The platform's intuitive design and robust features have been a game-changer for my startup. It's helped me streamline operations and focus on growing my business.",
        name: "Laura Brown",
        role: "Entrepreneur",
        img: "https://randomuser.me/api/portraits/women/90.jpg",
      },
    ],
  },
  footer: {
    title: {
      en: 'Quick Sales',
      kh: 'Quick Sales',
    },
    description: {
      en: 'Quick Sales is a trusted IT solution with a platform CRM to empower and make informed systems for business.',
      kh: 'ការលក់រហ័សគឺជាដំណោះស្រាយ IT ដែលអាចទុកចិត្តបានជាមួយនឹងវេទិកា CRM ដើម្បីផ្តល់សិទ្ធិអំណាច និងបង្កើតប្រព័ន្ធព័ត៌មានសម្រាប់អាជីវកម្ម។',
    },
    span: {
      en: '© 2025 Quicksales.asia, inc. All rights reserved.',
      kh: '© 2025 Quicksales.asia, inc. All rights reserved.',
    },
    menuGroups: [
      {
        id: 'home',
        title: {
          en: 'Home',
          kh: 'ទំព័រដើម',
        },
        items: [
          { en: 'Home', kh: 'ទំព័រដើម', href: '#Home-content' },
          { en: 'Service', kh: 'សេវាកម្ម', href: '#Service-content' },
          { en: 'Pricing', kh: 'តម្លៃ', href: '#Pricing-content' },
          { en: 'About', kh: 'អំពីពួកយើង', href: '#About-content' },
        ],
      },
      {
        id: 'company',
        title: {
          en: 'Company',
          kh: 'ក្រុមហ៊ុន',
        },
        items: [
          { en: 'Company', kh: 'ក្រុមហ៊ុន', href: '#' },
          { en: 'Career', kh: 'អាជីព', href: '#' },
          { en: 'Internship', kh: 'កម្មសិក្សា', href: '#' },
          { en: 'About Us', kh: 'អំពីពួកយើង', href: '#About-content' },
        ],
      },
    ],
    contactTitle: {
      en: 'Contact',
      kh: 'ទំនាក់ទំនង',
    },
    contacts: [
      {
        img: facebook,
        text: 'Facebook',
        href: 'https://www.facebook.com/quicksalescrm/',
      },
      {
        img: telegram,
        text: 'Telegram',
        href: 'https://t.me/ouchamroeun',
      },
    ],
  },
};

export default siteContent;
