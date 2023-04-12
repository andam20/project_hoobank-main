import { feul, sim, people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, food } from "../assets";

export const navLinks = [{
        id: "home",
        title: "Home",
        path: '/'
    },
    {
        id: "Accountant",
        title: "Accountant",
        path: '/accountant'
    },
    {
        id: "Account",
        title: "Account",
        path: "/account"
    },
    {
        id: "Add Expense",
        title: "Add Expense",
        path: '/addExpense'
    },
];

export const features = [{
        id: "feature-1",
        icon: feul,
        category: "Feul",
        date: "Yesterday",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, officia?",
        acc: "Accepted",
        pb: "Payed Back",
        price: "$25",
    },
    {
        id: "feature-2",
        icon: food,
        category: "Feul",
        date: "20-Mar-2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, officia?",
        acc: "Accepted",
        pb: "Not Payed Back",
        price: "75,000 IQD",
    },
    {
        id: "feature-3",
        icon: sim,
        category: "Feul",
        date: "10-Mar-2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, officia?",
        acc: "Pending",
        pb: "Not Payed Back",
        price: "$0.25",
    },
    {
        id: "feature-3",
        icon: feul,
        category: "Feul",
        date: "10-Mar-2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, officia?",
        acc: "Rejected",
        pb: "Not Payed Back",
        price: "1,250 IQD",
    },
];

export const feedback = [{
        id: "feedback-1",
        content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content: "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [{
        id: "stats-1",
        title: "Income",
        value: "$500",
    },
    {
        id: "stats-2",
        title: "Expense",
        value: "$150",
    },
    {
        id: "stats-3",
        title: "Total",
        value: "$350",
    },
];

export const footerLinks = [{
        title: "Useful Links",
        links: [{
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Community",
        links: [{
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Partner",
        links: [{
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

export const socialMedia = [{
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [{
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];