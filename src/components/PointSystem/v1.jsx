import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import Grid from "@material-ui/core/Grid";
import MHeader from "./mheader";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const PointsList = (props) => {
  return (
    <List component="nav">
      {props.data.map((item) => {
        return (
          <ListItem style={{ padding: 5 }}>
            <Grid
              container
              direction="row"
              justify="space-between"
              align="center"
              wrap="nowrap"
            >
              <Grid item style={{ paddingRight: 10 }}>
                <Typography gutterBottom align="left">
                  {item.n}
                </Typography>
              </Grid>
              <Grid item>
                {item.v.indexOf("-") > -1 ? (
                  <Typography align="right" noWrap>
                    <span style={{ color: "red" }} className="fw600">
                      {item.v}
                    </span>
                    <span style={{ color: "grey" }}>{" Points"}</span>
                  </Typography>
                ) : (
                  <Typography align="right" noWrap>
                    <span style={{ color: "green" }} className="fw600">
                      {item.v}
                    </span>
                    <span style={{ color: "grey" }}>{" Points"}</span>
                  </Typography>
                )}
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
};
class MatchCenter extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 0,
    };
    this.football = [
      { n: "For playing 60 minutes or more", v: "2" },
      { n: "For playing less than 60 minutes", v: "1" },
      { n: "For each goal scored by goalkeeper or defender", v: "6" },
      { n: "For each goal scored by midfielder", v: "5" },
      { n: "For each goal scored by forward", v: "4" },
      { n: "For each assist", v: "3" },
      { n: "For cleansheet by goalkeeper or defender", v: "4" },
      { n: "For cleansheet by midfielder", v: "1" },
      { n: "For every 2 shots saved by goalkeeper", v: "1" },
      { n: "For saving penalty", v: "5" },
      { n: "For missing penalty", v: "-2" },
      { n: "For every 2 goals conceded by goalkeeper or defender", v: "-1" },
      { n: "For each yellow card", v: "-1" },
      { n: "For each red card", v: "-3" },
      { n: "For every 2 shots on target", v: "1" },
      { n: "For every 2 fouls drawn", v: "1" },
      { n: "For every 2 fouls committed", v: "-1" },
      { n: "For every 2 successful tackles", v: "1" },
      { n: "For every 2 successful blocks", v: "1" },
      { n: "For every 2 attacking cross", v: "1" },
      { n: "For every 2 interceptions", v: "1" },
      { n: "For every 2 clearance", v: "1" },
      { n: "90%+ pass completion (at least 30 passes attempted)", v: "3" },
      { n: "80 to 89% pass completion (at least 30 passes attempted)", v: "2" },
      { n: "70 to 79% pass completion (at least 30 passes attempted)", v: "1" },
      { n: "For each own goal", v: "-3" },
    ];

    this.kabaddi = [
      { n: "For starting the match", v: "5" },
      { n: "For coming on as substitute", v: "2" },
      { n: "For each successfull raid touch point by raider", v: "3" },
      { n: "For each successfull raid touch point by all-rounder", v: "4" },
      { n: "For each successfull raid touch point by defender", v: "5" },
      { n: "For each successfull raid bonus point by raider", v: "1" },
      { n: "For each successfull raid bonus point by all-rounder", v: "2" },
      { n: "For each successfull raid bonus point by defender", v: "3" },
      { n: "For each successfull tackle by defender", v: "3" },
      { n: "For each successfull tackle by all-rounder", v: "4" },
      { n: "For each successfull tackle by raider", v: "5" },
      { n: "For each successfull super tackle", v: "3" },
      { n: "For each successfull super raid", v: "3" },
      { n: "For each unsuccessful raid", v: "-2" },
      { n: "For green card", v: "-1" },
      { n: "For yellow card", v: "-3" },
      { n: "For red card", v: "-5" },
    ];
    this._100ballBat = [
      { n: "For every run scored", v: "1" },
      { n: "For every 6 hit", v: "2" },
      { n: "For every 4 hit", v: "1" },
      { n: "For runs from 30 to 49", v: "10" },
      { n: "For runs from 50 to 99", v: "20" },
      { n: "For 100 or more runs", v: "30" },
      { n: "For Duck (except bowlers)", v: "-5" },
    ];
    this._100ballBowl = [
      { n: "For every wicket taken", v: "20" },
      { n: "For 3-wicket haul", v: "10" },
      { n: "For 4-wicket haul", v: "20" },
      { n: "For 5-wicket haul", v: "30" },
      { n: "For 6-wicket haul", v: "40" },
      { n: "For 7-wicket haul", v: "50" },
      { n: "For 8-wicket haul", v: "60" },
      { n: "For 9-wicket haul", v: "70" },
      { n: "For 10-wicket haul", v: "80" },
      { n: "For every maiden", v: "20" },
      { n: "Bowled/LBW", v: "5" },

      // {n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},
      // {n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},
    ];
    this._100ballGen = [
      { n: "For playing in match", v: "3" },
      { n: "For every catch", v: "10" },
      { n: "For every stumping", v: "15" },
      { n: "Run out (last 2 player)", v: "10" },
      { n: "3 Catch Bonus", v: "5" },
    ];
    this.t10Bat = [
      { n: "For every run scored", v: "1" },
      { n: "For every 6 hit", v: "2" },
      { n: "For every 4 hit", v: "1" },
      { n: "For runs from 25 to 49", v: "10" },
      { n: "For runs from 50 to 75", v: "25" },
      { n: "For 75 or more runs", v: "40" },
      { n: "For Duck (except bowlers)", v: "-5" },
      { n: "Strike rate 0 to 49.99", v: "-15" },
      { n: "Strike rate 50 to 74.99", v: "-10" },
      { n: "Strike rate 75.00 to 99.99", v: "-5" },
      { n: "Strike rate 100 to 149.99", v: "5" },
      { n: "Strike rate 150.00 to 199.99", v: "10" },
      { n: "Strike rate 200.00 or more", v: "15" },
    ];
    this.t10Bowl = [
      { n: "For every wicket taken", v: "20" },
      { n: "For 2-wicket haul", v: "10" },
      { n: "For 3-wicket haul", v: "20" },
      { n: "For 4-wicket haul", v: "30" },
      { n: "For 5-wicket haul", v: "40" },
      { n: "For 6-wicket haul", v: "50" },
      { n: "For 7-wicket haul", v: "60" },
      { n: "For 8-wicket haul", v: "70" },
      { n: "For 9-wicket haul", v: "80" },
      { n: "For 10-wicket haul", v: "90" },
      { n: "For every maiden", v: "30" },
      { n: "Economy rate 0 to 7.00", v: "15" },
      { n: "Economy rate 7.01 to 10.00", v: "10" },
      { n: "Economy rate 10.01 to 12.00", v: "0" },
      { n: "Economy rate 12.01 to 15.00", v: "-10" },
      { n: "Economy rate 15.01 or above", v: "-15" },
      { n: "Bowled/LBW", v: "5" },
      // {n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},
      // {n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},
    ];
    this.t10Gen = [
      { n: "For playing in match", v: "3" },
      { n: "For every catch", v: "10" },
      { n: "For every stumping", v: "15" },
      { n: "Run out (last 2 player)", v: "10" },
      { n: "3 Catch Bonus", v: "5" },
    ];
    this.t20Bat = [
      { n: "For every run scored", v: "1" },
      { n: "For every 6 hit", v: "2" },
      { n: "For every 4 hit", v: "1" },
      { n: "For runs from 30 to 49", v: "10" },
      { n: "For runs from 50 to 99", v: "20" },
      { n: "For 100 or more runs", v: "30" },
      { n: "For Duck (except bowlers)", v: "-5" },
      { n: "Strike rate 0 to 49.99", v: "-15" },
      { n: "Strike rate 50 to 74.99", v: "-10" },
      { n: "Strike rate 75.00 to 99.99", v: "-5" },
      { n: "Strike rate 100 to 149.99", v: "5" },
      { n: "Strike rate 150.00 to 199.99", v: "10" },
      { n: "Strike rate 200.00 or more", v: "15" },
    ];
    this.t20Bowl = [
      { n: "For every wicket taken", v: "20" },
      { n: "For 3-wicket haul", v: "10" },
      { n: "For 4-wicket haul", v: "20" },
      { n: "For 5-wicket haul", v: "30" },
      { n: "For 6-wicket haul", v: "40" },
      { n: "For 7-wicket haul", v: "50" },
      { n: "For 8-wicket haul", v: "60" },
      { n: "For 9-wicket haul", v: "70" },
      { n: "For 10-wicket haul", v: "80" },
      { n: "For every maiden", v: "20" },
      { n: "Economy rate 0 to 5.00", v: "15" },
      { n: "Economy rate 5.01 to 8.00", v: "10" },
      { n: "Economy rate 8.01 to 10.00", v: "5" },
      { n: "Economy rate 10.01 to 12.00", v: "-5" },
      { n: "Economy rate 12.01 to 15.00", v: "-10" },
      { n: "Economy rate 15.01 or above", v: "-15" },
      { n: "Bowled/LBW", v: "5" },
      // {n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},
      // {n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},{n:'', v:''},
    ];
    this.t20Gen = [
      { n: "For playing in match", v: "3" },
      { n: "For every catch", v: "10" },
      { n: "For every stumping", v: "15" },
      { n: "Run out (last 2 player)", v: "10" },
      { n: "3 Catch Bonus", v: "5" },
    ];

    this.ODIBat = [
      { n: "For every run scored", v: "1" },
      { n: "For every 6 hit", v: "2" },
      { n: "For every 4 hit", v: "1" },
      { n: "For 50 runs", v: "10" },
      { n: "For 100 runs", v: "20" },
      { n: "For 150 runs", v: "30" },
      { n: "For 200 runs", v: "40" },
      { n: "For Duck (except bowlers)", v: "-5" },
      { n: "Strike rate 0 to 24.99", v: "-15" },
      { n: "Strike rate 25 to 49.99", v: "-10" },
      { n: "Strike rate 50 to 74.99", v: "-5" },
      { n: "Strike rate 75 to 99.99", v: "0" },
      { n: "Strike rate 100.00 to 124.99", v: "5" },
      { n: "Strike rate 125 to 149.99", v: "10" },
      { n: "Strike rate 150.00 or more", v: "15" },
    ];
    this.ODIBowl = [
      { n: "For every wicket taken", v: "20" },
      { n: "For 3-wicket haul", v: "10" },
      { n: "For 4-wicket haul", v: "15" },
      { n: "For 5-wicket haul", v: "20" },
      { n: "For 6-wicket haul", v: "30" },
      { n: "For 7-wicket haul", v: "40" },
      { n: "For 8-wicket haul", v: "50" },
      { n: "For 9-wicket haul", v: "60" },
      { n: "For 10-wicket haul", v: "70" },
      { n: "For every maiden", v: "10" },
      { n: "Economy rate 0 to 3.00", v: "15" },
      { n: "Economy rate 3.01 to 5.00", v: "10" },
      { n: "Economy rate 5.01 to 7.00", v: "5" },
      { n: "Economy rate 7.01 to 9.00", v: "-5" },
      { n: "Economy rate 9.01 to 11.00", v: "-10" },
      { n: "Economy rate 11.01 or above", v: "-15" },
      { n: "Bowled/LBW", v: "5" },
    ];
    this.ODIGen = [
      { n: "For playing in match", v: "3" },
      { n: "For every catch", v: "10" },
      { n: "For every stumping", v: "15" },
      { n: "Run out (last 2 player)", v: "10" },
      { n: "3 Catch Bonus", v: "5" },
    ];

    this.TestBat = [
      { n: "For every run scored", v: "1" },
      { n: "For every 6 hit", v: "4" },
      { n: "For every 4 hit", v: "2" },
      { n: "For 50 runs", v: "10" },
      { n: "For 100 runs", v: "20" },
      { n: "For 150 runs", v: "25" },
      { n: "For 200 runs", v: "30" },
      { n: "For 300 runs or more", v: "40" },
      { n: "For Duck (except bowlers)", v: "-5" },
      { n: "0-50 Balls Played", v: "0" },
      { n: "51-100 Balls Played", v: "5" },
      { n: "101-150 Balls Played", v: "10" },
      { n: "150-200 Balls Played", v: "15" },
      { n: "200 Above", v: "20" },
      { n: "Strike rate 0 to 19.99", v: "-10" },
      { n: "Strike rate 20 to 29.99", v: "-5" },
      { n: "Strike rate 30 to 49.99", v: "0" },
      { n: "Strike rate 50 to 69.99", v: "5" },
      { n: "Strike rate 70 to 99.99", v: "10" },
      { n: "Strike rate 100.00 or more", v: "15" },
    ];
    this.TestBowl = [
      { n: "For every wicket taken", v: "20" },
      { n: "For 3-wicket haul", v: "15" },
      { n: "For 4-wicket haul", v: "20" },
      { n: "For 5-wicket haul", v: "25" },
      { n: "For 6-wicket haul", v: "30" },
      { n: "For 7-wicket haul", v: "35" },
      { n: "For 8-wicket haul", v: "40" },
      { n: "For 9-wicket haul", v: "45" },
      { n: "For 10-wicket haul", v: "50" },
      { n: "Economy rate 0 to 1.00", v: "15" },
      { n: "Economy rate 1.01 to 2.00", v: "10" },
      { n: "Economy rate 2.01 to 3.00", v: "5" },
      { n: "Economy rate 3.01 to 5.00", v: "0" },
      { n: "Economy rate 5.01 to 7.00", v: "-5" },
      { n: "Above 7 runs", v: "-10" },
      { n: "Maiden Over", v: "3" },
      { n: "Bowled/LBW", v: "5" },
    ];
    this.TestGen = [
      { n: "For playing in match", v: "3" },
      { n: "For every catch", v: "10" },
      { n: "For every stumping", v: "15" },
      { n: "Run out (last 2 player)", v: "10" },
      { n: "3 Catch Bonus", v: "5" },
    ];
  }

  componentWillMount() {
    this.getSeasonPasses();
  }
  getSeasonPasses() {}
  handleChange = (event, value) => {
    this.setState({ selectedTab: value });
  };

  handleChangeIndex(index) {
    this.setState({ selectedTab: index });
  }

  render() {
    const tabList = ["100Ball", "T10", "T20", "ODI", "Test"];

    return (
      <div style={{ height: "100%" }}>
        <MHeader />

        <Tabs
          value={this.state.selectedTab}
          onChange={this.handleChange.bind(this)}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
          className="hala-tabs-with-header"
        >
          {tabList.map((item, i) => {
            return <Tab label={item} key={i} />;
          })}
        </Tabs>

        <SwipeableViews
          axis="x"
          index={this.state.selectedTab}
          onChangeIndex={this.handleChangeIndex.bind(this)}
          className="hala-body-with-header-tabs"
        >
          <div style={{ flex: 1 }}>
            <Card style={{ flex: 1, margin: 15 }}>
              <CardContent>
                <Typography align="center" variant="subheading">
                  Batting Points
                </Typography>

                <PointsList data={this._100ballBat} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15,paddingTop:0}}>*** A player must score a minimum of 10 runs to be awarded the Strike Rate bonus</Typography> */}

                <Typography align="center" variant="subheading">
                  Bowling Points
                </Typography>
                <PointsList data={this._100ballBowl} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15, paddingTop:0}}>*** A player must bowl a minimum of 1 completed over to be awarded the Economy Rate bonus</Typography> */}
                <Typography align="center" variant="subheading">
                  General Points
                </Typography>
                <PointsList data={this._100ballGen} />
              </CardContent>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * For a Run Out fielder hitting the stump and last assist would
                be rewarded equal points
              </Typography>
            </Card>
          </div>
          <div style={{ flex: 1 }}>
            <Card style={{ flex: 1, margin: 15 }}>
              <CardContent>
                <Typography align="center" variant="subheading">
                  Batting Points
                </Typography>

                <PointsList data={this.t10Bat} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15,paddingTop:0}}>*** A player must score a minimum of 10 runs to be awarded the Strike Rate bonus</Typography> */}

                <Typography align="center" variant="subheading">
                  Bowling Points
                </Typography>
                <PointsList data={this.t10Bowl} />

                <Typography align="center" variant="subheading">
                  General Points
                </Typography>
                <PointsList data={this.t10Gen} />
              </CardContent>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Strike rate will be counted only if player have scored 10 runs
                atleast{" "}
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Economy will be counted only if player have bowled atleast 1
                over
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * For a Run Out fielder hitting the stump and last assist would
                be rewarded equal points{" "}
              </Typography>
            </Card>
          </div>

          <div style={{ flex: 1 }}>
            <Card style={{ flex: 1, margin: 15 }}>
              <CardContent>
                <Typography align="center" variant="subheading">
                  Batting Points
                </Typography>

                <PointsList data={this.t20Bat} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15,paddingTop:0}}>*** A player must score a minimum of 10 runs to be awarded the Strike Rate bonus</Typography> */}

                <Typography align="center" variant="subheading">
                  Bowling Points
                </Typography>
                <PointsList data={this.t20Bowl} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15, paddingTop:0}}>*** A player must bowl a minimum of 1 completed over to be awarded the Economy Rate bonus</Typography> */}
                <Typography align="center" variant="subheading">
                  General Points
                </Typography>
                <PointsList data={this.t20Gen} />
              </CardContent>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Strike rate will be counted only if player have scored 10 runs
                atleast{" "}
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Economy will be counted only if player have bowled atleast 1
                over
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * For a Run Out fielder hitting the stump and last assist would
                be rewarded equal points{" "}
              </Typography>
            </Card>
          </div>
          <div style={{ flex: 1 }}>
            <Card style={{ flex: 1, margin: 15 }}>
              <CardContent>
                <Typography align="center" variant="subheading">
                  Batting Points
                </Typography>

                <PointsList data={this.ODIBat} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15,paddingTop:0}}>*** A player must score a minimum of 10 runs to be awarded the Strike Rate bonus</Typography> */}

                <Typography align="center" variant="subheading">
                  Bowling Points
                </Typography>
                <PointsList data={this.ODIBowl} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15, paddingTop:0}}>*** A player must bowl a minimum of 1 completed over to be awarded the Economy Rate bonus</Typography> */}
                <Typography align="center" variant="subheading">
                  General Points
                </Typography>
                <PointsList data={this.ODIGen} />
              </CardContent>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Strike rate will be counted only if player have scored 10 runs
                atleast{" "}
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Economy will be counted only if player have bowled atleast 1
                over
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * For a Run Out fielder hitting the stump and last assist would
                be rewarded equal points{" "}
              </Typography>
            </Card>
          </div>
          <div style={{ flex: 1 }}>
            <Card style={{ flex: 1, margin: 15 }}>
              <CardContent>
                <Typography align="center" variant="subheading">
                  Batting Points
                </Typography>

                <PointsList data={this.TestBat} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15,paddingTop:0}}>*** A player must score a minimum of 10 runs to be awarded the Strike Rate bonus</Typography> */}

                <Typography align="center" variant="subheading">
                  Bowling Points
                </Typography>
                <PointsList data={this.TestBowl} />
                {/* <Typography align='center' variant='caption' gutterBottom style={{padding:15, paddingTop:0}}>*** A player must bowl a minimum of 1 completed over to be awarded the Economy Rate bonus</Typography> */}
                <Typography align="center" variant="subheading">
                  General Points
                </Typography>
                <PointsList data={this.TestGen} />
              </CardContent>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Strike rate will be counted only if player have scored 10 runs
                atleast{" "}
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Economy will be counted only if player have bowled atleast 1
                over
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * Points will be given for each Innings not complete Test match{" "}
              </Typography>
              <Typography
                align="center"
                variant="caption"
                gutterBottom
                style={{ padding: 15, paddingTop: 0 }}
              >
                * For a Run Out fielder hitting the stump and last assist would
                be rewarded equal points{" "}
              </Typography>
            </Card>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default withRouter(MatchCenter);
