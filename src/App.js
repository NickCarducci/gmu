import React from "react";
//import Cable from "./Dropwire";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.gov = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/gov") {
          window.scroll(0, this.gov.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    /*const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    const scrollPath = (scrollPath) =>
      [this.state.hoverPath, this.state.scrollPath].includes(scrollPath)
        ? "2px solid"
        : "0px solid";
    const hoverpathe = (ev) =>
      ev.target &&
      ev.target.href &&
      this.setState({
        hoverPath: ev.target.href.split(`${window.location.origin}/`)[1]
      });*/
    const space = " ";
    return (
      <div
        style={{
          overflowX: "hidden",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <a
          style={{
            shapeOutside: "rect()",
            float: "right",
            maxWidth: "100%",
            padding: "0px 10px",
            //fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif"
            //color: "rgb(230,230,255)"
            //backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://vaults.biz/gmu"
        >
          General Maintenance Unit
        </a>
        12 industry-variance, normally. Conviction (policymaking, capacity of
        warn tort jail)
        <br />
        <br />
        minimal viable product, Tranquil and voluntary trade
        <br />
        <br />
        inflation 0y/1x efficiency, GDP/hour-GDP/p, trust-breaking hypocrisy
        standing,{space}
        <a href="https://qr.ae/pGQqKJ">[choring-]criminals</a>
        {space}abound
        <br />
        <br />
        Diagnosing mental-health by drug use and then uppers as sad
        <br />
        <br />
        duress, oath, moot, Conviction (evidence, corrections of warn tort jail)
        <br />
        <br />
        geohash/mo precinct spoof, sure, 3% under $2k and capital loss
        deflation, don't cancel and allow universities off the hook, for force
        majeure intent donee beneficiary freedom
        <br />
        <br />
        Omg that is none of your business. Get cops out of investment banks and
        closed source pharmacies licensure. Teapharmacy.party/drugs
        <br />
        <br />
        Ween cops off bonds (and good will): truncated production tax for
        science perpetual motion machine or free rider immutable is Public, not
        operational monopsony like per diem incarceration bias - net loss bonds
        <br />
        <br />
        Eat my ass, it lowers Alzheimer’s presentation, cross section India:
        <br />
        <br />
        smd be happy; rather
        <br />
        <br />
        All you can hold is hold. Leave us alone douche
        <br />
        <br />
        11/12 industry-variable conviction process-making, evidence bearing
        immediate jail or review, now THAT is bail removal.
        <br />
        <br />
        NOT KNOWN HAZARD OPEN INGREDIENT LISTS! required by Tranquil and
        voluntary trade no prescripotion nor science process-making
      </div>
    );
  }
}
