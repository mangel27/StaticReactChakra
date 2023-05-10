
const getCurrentURL = () => {
   const origin =
        typeof window !== 'undefined' && window.location.pathname
            ? window.location.pathname
            : '';

    const URL = `${origin}`;
    return URL;
}
export default {
    title: "Halaplay - India's Leading Fantasy Sports Platform | Win upto 10L",
    description:
        "Halaplay is a daily fantasy sports platform for fantasy cricket. Register now and get ₹250 off on league join. Create your team, join leagues and win big cash prizes",
    image: "/assets/seo_logo.png",
    url: getCurrentURL(),
    canonical: getCurrentURL(),
    openGraph: {
        title: "Halaplay - India's Leading Fantasy Sports Platform | Win upto 10L",
        description:"Halaplay is a daily fantasy sports platform for fantasy cricket. Register now and get ₹250 off on league join. Create your team, join leagues and win big cash prizes",
        type: "website",
        locale: "en_IN",
        url:getCurrentURL(),
        site_name: "HalaPlay",
        images: [
            {
                url: "/assets/seo_logo.png",

                alt: "Og Image Alt"
            }
        ]
    },
    twitter: {
        handle: "@HalaPlayDotCom",
        site: "@HalaPlayDotCom",
        cardType: "summary_large_image",
        creator: "@HalaPlayDotCom",
        image:"/assets/seo_logo.png"
    },
    additionalMetaTags: [

        {
            name: "twitter:player",
        content:"https://www.youtube.com/c/halaplay"},
       { name: 'keywords',
        content: "Halaplay, fantasy sports, cricket, football, basketball, kabaddi, win big, cash prizes, India's leading, daily contests, safe, secure, user-friendly,real moneys"
        }]
};
export const aboutus_SEO = {
    title: "About HalaPlay – Your Daily Fantasy Sports Destination",
    description:
        "HalaPlay is India’s most loved Daily Fantasy Sports destination. Best opportunity to use your skill of the game and join exciting contests for fantasy game to win real money!",
    image: "/assets/seo_logo.png",
    keywords:"Halaplay, fantasy sports, cricket, football, basketball, kabaddi, win big, cash prizes, India's leading, daily contests, safe, secure, user-friendly, real moneys",
    url: getCurrentURL(),
    canonical: getCurrentURL(),
       additionalMetaTags: [
 {
            name: "twitter:player",
        content:"https://www.youtube.com/c/halaplay"},

       { name: 'keywords',
        content: "Halaplay, fantasy sports, cricket, football, basketball, kabaddi, win big, cash prizes, India's leading, daily contests, safe, secure, user-friendly,real moneys"

           }
    ],
    openGraph: {
        title: "About HalaPlay – Your Daily Fantasy Sports Destination",
        description:"HalaPlay is India’s most loved Daily Fantasy Sports destination. Best opportunity to use your skill of the game and join exciting contests for fantasy game to win real money!",
        type: "website",
        locale: "en_IN",
        url: getCurrentURL(),
        site_name: "HalaPlay",
        images: [
            {
                url: "/assets/seo_logo.png",

                alt: "Og Image Alt"
            }
        ]
    },
    twitter: {
        handle: "@HalaPlayDotCom",
        site: "@HalaPlayDotCom",

        cardType: "summary_large_image",
        creator: "@HalaPlayDotCom",
        image:"/assets/seo_logo.png"
    }
}
export const rules_SEO = {
    title: "HalaPlay: Online Fantasy Game Rules & Scoring Criteria",
    description:
        "Learn more about the HalaPlay fantasy point system, rules & scoring criteria and win upto ₹10,00,000 daily. Download the app & play online now.",
    image: "/assets/seo_logo.png",
    keywords:"Halaplay, fantasy sports, cricket, football, basketball, kabaddi, win big, cash prizes, India's leading, daily contests, safe, secure, user-friendly, real moneys",
    url: getCurrentURL(),
    canonical: getCurrentURL(),
       additionalMetaTags: [

 {
            name: "twitter:player",
        content:"https://www.youtube.com/c/halaplay"},
       { name: 'keywords',
        content: "Halaplay, fantasy sports, cricket, football, basketball, kabaddi, win big, cash prizes, India's leading, daily contests, safe, secure, user-friendly,real moneys"

}],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: getCurrentURL(),
        site_name: "HalaPlay",
        images: [
            {
                url: "/assets/seo_logo.png",

                alt: "Og Image Alt"
            }
        ]
    },
    twitter: {
          handle: "@HalaPlayDotCom",
        site: "@HalaPlayDotCom",
        cardType: "summary_large_image",
        creator: "@HalaPlayDotCom",
        image:"/assets/seo_logo.png"
    }
}