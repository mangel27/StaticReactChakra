

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
export const EARN_MORE = [{
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
export const FANTASY_BENEFITS = [{
    title: "Deposit Offer",
    text: "Get League Join offer on 1st Deposit"
    // icon: TbCricket
},
{
    title: "Signup Offer",
    text: "Get Rs 250 Discount on Registration"
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
    "green.300", "red.300", "blue.300", "yellow.300", "purple.300", "pink.300", "orange.300", "cyan.300", "teal.300", "gray.300"
]
export const FAQ_ITEMS = [
    {
        question: "What is Fantasy Cricket?",
        answer: "What is Fantasy Cricket"
    },
    {
        question: "How to play Fantasy cricket?",
        answer: "How to  play fantasy cricket"
    }
]
export const TESTIMONIAL_DATA = [
    { id: 1, title: "Won 7 Lakhs", name: "Rahul", text: "Fantasy cricket is the best platform to play fantasy cricket. I have been playing on this platform since last 2 years and I have never faced any issue. I have won many times and I have also won big prizes. I would recommend this platform to all my friends and family members." },
    { id: 2, title: "Won 7 Lakhs", name: "Rahul", text: "Fantasy cricket is the best platform to play fantasy cricket. I have been playing on this platform since last 2 years and I have never faced any issue. I have won many times and I have also won big prizes. I would recommend this platform to all my friends and family members." },
    { id: 3, title: "Won 7 Lakhs", name: "Rahul", text: "Fantasy cricket is the best platform to play fantasy cricket. I have been playing on this platform since last 2 years and I have never faced any issue. I have won many times and I have also won big prizes. I would recommend this platform to all my friends and family members." },
]
export const defaultCarouselSettings = {
                    dots: true,
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
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                    centerPadding:'10px',
                            }
                        }
                    ]
                }