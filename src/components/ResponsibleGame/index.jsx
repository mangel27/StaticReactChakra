import { Box, Text, Divider, Heading } from "@chakra-ui/react";

const ResonsibleGame = () => {
  return (
    <>
      <Box p={5} bg="#f0f3f8">
        <div style={{ height: "100%" }}>
            <Heading variant="title" color="inherit" style={{ flex: 1 }}>
              Responsible Gaming
            </Heading>
          <div className="hala-body-with-header">
            <div style={{ flex: 1, padding: 10 }}>
              <ol style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li>
                  <Text fontWeight={"bold"} fontSize="xl">
                    Our Motto : Responsible Gaming
                  </Text>
                  <Text>We care for our players!</Text>
                  <Text>
                    HalaPlay provides its players with a responsible gaming
                    environment. Not only it is our mission to provide our
                    players with the most entertaining game experience, but it
                    is also our duty to help prevent compulsive usage as this
                    platform is meant for entertainment only.
                  </Text>
                  <Text>
                    Our players’ well-being is of utmost importance to us, and
                    we request all our players to follow the best practices
                    listed below to play responsibly.
                  </Text>
                  <Text>You acknowledge & understand,</Text>
                  <Text>
                    1. Age Above 18 years: Players must be above 18+ years of
                    age to play skill games.
                  </Text>
                  <Text>
                    2. Element of Financial Risk: This game involves an element
                    of financial risk and may be addictive. Please play
                    responsibly and at your own risk.
                  </Text>
                  <Text>
                    3. Entertainment Gaming Platform: Play online Daily Fantasy
                    Sports for entertainment but not as an income source.
                  </Text>
                  <Text>
                    4. Stick to Deposit Limits: Set aside a monthly/weekly limit
                    on the entertainment budget. Keep a track of the money spent
                    and spend only the entertainment budget for playing online
                    Daily Fantasy Sports
                  </Text>
                  <Text>
                    5. Frequent Withdrawals: Please make sure to place
                    withdrawals frequently.
                  </Text>
                  <Text>
                    6. Track Time: Please keep a track of the time being spent
                    on the platform in order to adequately balance it with the
                    time spent on other leisure activities.
                  </Text>
                  <Text>
                    7. Prioritize What’s Important: Never prioritize playing
                    online Daily Fantasy Sports over other important activities
                    that impact daily life. We never encourage our players to
                    consider gameplay as a profession.
                  </Text>
                  <Text>
                    8. Take a Break: Practice taking regular breaks, especially
                    when losing multiple games. Remember winning and losing are
                    a part of the game.
                  </Text>
                  <Text>9. Stop: Never play to recover or chase losses.</Text>
                </li>
                <Divider
                  variant="middle"
                  style={{ margin: 5, marginBottom: 20 }}
                />
                <li>
                  <Text fontWeight={"bold"} fontSize="xl">
                    How HalaPlay practices RESPONSIBLE GAMING?
                  </Text>
                  <Text gutterBottom paragraph>
                    HalaPlay has a dedicated “Responsible Gaming Team” (RG TEAM)
                    to take care of our players and to ensure all our players
                    are playing responsibly.
                  </Text>
                  <Text gutterBottom paragraph>
                    Our team consists of well-trained executives who identify
                    responsible gaming issues & safeguard user experience while
                    helping players to have fun playing at HalaPlay.
                  </Text>
                  <Text gutterBottom paragraph>
                    Mentioned below is the list of measures taken to ensure the
                    safety of our players :
                  </Text>
                  <Text gutterBottom paragraph></Text>
                  <Text>
                    10. Limiting Deposits: There is an option for players to set
                    daily and monthly playing limits.
                  </Text>
                  <Text>
                    a. Players who are willing to have limits on their accounts
                    can drop in an email to the RG team at rgcare@halaplay.com &
                    our team will help you out to play responsibly.
                  </Text>
                  <Text>
                    11. Guidance: Our team also identifies who have issues
                    following responsible gaming frequently and guides them
                    accordingly.
                  </Text>
                  <Text>
                    12. Restricted States: We adhere to the rules and
                    regulations as set by the government; therefore, players who
                    are a resident of Telangana, Meghalaya, Andhra Pradesh,
                    Arunachal Pradesh, Assam, Odisha, Nagaland & Sikkim, cannot
                    play on our tables.
                  </Text>
                  <Text>
                    13. Responsible Gaming Limits: Weekly and monthly deposit
                    and loss limits are set to make sure that such players with
                    responsible gaming issues play within their limits.
                  </Text>
                  <Text>
                    14. Self-Exclusion: With the Self-Exclusion feature, players
                    can temporarily restrict themselves from online gaming.
                  </Text>
                  <Text>
                    a. During the Self-Exclusion period, players will not be
                    able to add cash, play games, or log in at the HalaPlay
                    platform
                  </Text>
                  <Text>
                    b. Once confirmed, the request for ‘Self-Exclusion’ is
                    irreversible for the requested period.
                  </Text>
                  <Text>
                    15. Account Suspension: In exceptional cases, accounts are
                    suspended in case a player is continuously failing to stick
                    to responsible gaming policy. Such accounts can be opened
                    only after a cool-off period of 7 to 30 days.
                  </Text>
                  <Text>
                    16. Need More Information? Please write to us at
                    rgcare@halaplay.com for further assistance.
                  </Text>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ResonsibleGame;
