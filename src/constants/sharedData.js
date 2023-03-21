

export const NAV_ITEMS = [
    {
        label: 'Blogs',

    },
    {
        label: 'Point System',

    },
    {
        label: 'How to Play',
    },
    {
        label: 'Offers',
    },
];
export const FANTASY_BENEFITS = [{
    title: "Instant Withdrawal",
    text: "Enjoy lightning fast withdrawal experience"
    // icon: TbCricket
},
{
    title: "Flexible Team Creation",
    text: "Now you can select only 1 player from Bat, Bwl, AllR, WK "
    //icon: TbCricket
},
{
    title: "VIP",
    text: "Pay lowest entry fee & get upto 97% winnings"
    // icon: TbCricket
},
{
    title: "Auto Join",
    text: "Join multiple leagues from single request"
    // icon: TbCricket
}]
export const EARN_MORE = [{
    title: "Deposit Offer",
    text: "Get League Join offer on 1st Deposit"
    // icon: TbCricket
},
{
    title: "Signup Offer",
    text: "Get ₹250 Discount on Registration"
    //icon: TbCricket
},
{
    title: "Refer & Earn",
    text: "Earn upto 13000 everytime you refer friend"
    // icon: TbCricket
},
{
    title: "4+1 Offer",
    text: "Join with 4 & get 5th Entry Free"
    // icon: TbCricket
}]
export const cardColors = [
"rgb(112,111,211)",
 "rgb(22,160,133)",
"rgb(41,128,185)",

"rgb(140,122,230)"
]
export const FAQ_ITEMS = [
    {
        question: "What is Fantasy Cricket?",
        answer: "Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches."
    },

    {
        question: "How to play Fantasy cricket?",
        answer: "To play fantasy cricket, select a match, create a team of 11 players, join a contest, monitor your team's performance, score points, and win prizes."
    },

     {
        question: "Which player to select?",
        answer: "When selecting players for your fantasy cricket team, you should consider several factors, such as the player's recent form, performance in the previous matches, playing conditions, and role in the team. The recent form of a player is an important factor to consider because it reflects their current level of performance. A player who has been performing well in recent matches is likely to continue their good form."
    },

    {
        question: "What are the tips and tricks to win?",
         answer: "Tips to win in a fantasy game include drafting strategically, staying updated with news and injuries, managing your team actively, and being patient throughout the game."
    },

    {
        question: "Will i be able to withdraw money?",
         answer: "As a fantasy game platform, we allow users to withdraw money based on our specific policies and guidelines. Users are encouraged to review our terms and conditions to understand the withdrawal process and any associated fees. Our platform also offers various payment methods for withdrawal, such as bank transfer or e-wallet options."
    },

    {
        question: "Which contest to join?",
         answer: "As a fantasy game platform, we offer a variety of contests for users to join based on their interests and preferences. We recommend exploring the different types of contests available on our platform, such as daily, weekly, or season-long contests, and choosing the one that aligns with your game strategy and level of involvement. Users can also filter contests based on entry fees, prize pools, and number of participants to find the one that fits their needs."
    },

    {
        question: "Is it legal to play Fantasy Cricket?",
         answer: "As a fantasy game platform, we strive to operate within legal and ethical boundaries. The legality of fantasy cricket may vary depending on the jurisdiction and local laws. In many countries, fantasy cricket is considered a game of skill rather than a game of chance, which makes it legal to play. However, we advise users to review their local laws and regulations to ensure compliance with any relevant rules or restrictions. As a responsible platform, we also take measures to promote fair play and prevent any fraudulent or illegal activities on our platform."
    },
]
export const TESTIMONIAL_DATA = [
    { id: 1, title: "Won 7 Lakhs", name: "Rahul", text: "Fantasy cricket is the best platform to play fantasy cricket. I have been playing on this platform since last 2 years and I have never faced any issue. I have won many times and I have also won big prizes. I would recommend this platform to all my friends and family members." },
    { id: 2, title: "Won 7 Lakhs", name: "Rahul", text: "Fantasy cricket is the best platform to play fantasy cricket. I have been playing on this platform since last 2 years and I have never faced any issue. I have won many times and I have also won big prizes. I would recommend this platform to all my friends and family members." },
    { id: 3, title: "Won 7 Lakhs", name: "Rahul", text: "Fantasy cricket is the best platform to play fantasy cricket. I have been playing on this platform since last 2 years and I have never faced any issue. I have won many times and I have also won big prizes. I would recommend this platform to all my friends and family members." },
]
export const defaultCarouselSettings = {
                    dots: false,
                    infinite: false,
                    swipeToSlide: true,
                    speed: 500,
                    autoplay: false,
    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth:true,
                    initialSlide: 0,
                    adaptiveHeight: true,

                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                dots:true,
                                slidesToShow: 2,
                                className: "center",
                                  variableWidth:false,
                                slidesToScroll: 2,
                                initialSlide: 2,
                                centerMode: true,
                                infinite:true,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                dots: true,
                                  className: "center",
                                infinite: true,
                                variableWidth:false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                            }
                        }
                    ]
                }