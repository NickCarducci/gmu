import React from "react";
import Cable from "./Dropwire";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
//import Gist from "react-gist";
import NYPD from "./nypd";
import OIL from "./oil";
import EDU from "./edu";
import Spanish from "./flu";
import Vax from "./vax";
import firebase from "./init-firebase.js";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  getDoc,
  updateDoc,
  setDoc,
  increment
} from "firebase/firestore";
import Wages from "./wages";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    const firestore = getFirestore(firebase);
    this.state = {
      firestore,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.edu = React.createRef();
    this.primary = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);

    onSnapshot(doc(this.state.firestore, "countData", "only"), (doc) => {
      if (doc.exists()) {
        var foo = doc.data();
        foo.id = doc.id;
        this.setState({ signatures: foo.count });
      }
    });
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
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
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
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.first !== "" &&
      this.state.last !== "" &&
      this.state.address !== "" &&
      this.state.city !== "" &&
      this.state.zip !== ""
    ) {
      /*console.log("do");
      firebase
        .firestore()
        .collection("signatures")
        .where("first", "==", this.state.first)
        .where("middle", "==", this.state.middle)
        .where("last", "==", this.state.last)
        .where("address", "==", this.state.address)
        .where("city", "==", this.state.city)
        .where("zip", "==", this.state.zip)
        .get()
        .then((doc) => {
          if (doc.exists) {
            window.alert("you've signed! 🎉");
          } else {*/

      addDoc(collection(getFirestore(firebase), "signatures"), {
        first: this.state.first,
        middle: this.state.middle,
        last: this.state.last,
        address: this.state.address,
        city: this.state.city,
        zip: this.state.zip
      }).then(() => {
        this.setState({ finished: true });
        const counts = collection(getFirestore(firebase), "countData");

        getDoc(doc(counts, "only"))
          .then((dc) => {
            if (dc.exists()) {
              updateDoc(doc(counts, "only"), {
                count: increment(1)
              });
            } else {
              setDoc(doc(counts, "only"), {
                count: increment(1)
              });
            }
          })
          .then(() => {
            window.alert("you've signed! 🎉");
            this.setState({ finished: true });
          })
          .catch((err) => {
            console.log(err.message);
            this.setState({ finished: true });
          });
      });
    } else
      return window.alert(
        "please complete required fields, all except middle name"
      );
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/edu") {
          window.scroll(0, this.edu.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
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
    /*const scrollPath = (scrollPath) =>
      [this.state.hoverPath, this.state.scrollPath].includes(scrollPath)
        ? "2px solid"
        : "0px solid";
    const hoverpathe = (ev) =>
      ev.target &&
      ev.target.href &&
      this.setState({
        hoverPath: ev.target.href.split(`${window.location.origin}/`)[1]
      });*/
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
        <h3
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
        >
          <a href="https://analsolutions.net">analsolutions.net</a>
        </h3>
        the rent and cost of living is going up, as an individual, beer and
        crisps.
        <br />
        <br />
        SNL of a schizophrenic Paralympian rights
        <br />
        <br />
        that is one way to make use of old generation armor.
        <br />
        <br />
        is there still food being supplied, that keep people going?
        Front-running their industry?
        <br />
        <br />
        <a href="https://qr.ae/pGdUME">Efficiency</a>
        {space}is not growth. jobs is not a sign of strength, if there is
        laborless-demand calamity
        <h2>
          Degrowth is because you set people free and they become creative, -
          <a href="https://qr.ae/pGdUvN">GDP</a>/p
        </h2>
        <div
          ref={this.primary}
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
          //href="https://carducci.us/primary"
        >
          <h2>
            {/*Where do you live, bitch?I will find you */}Are you a New Jersey
            voter?
          </h2>
          <h2>Submit your signature! {this.state.signatures}/800</h2>
          {this.state.finished ? (
            <div>
              <h2>Thank you! keep in touch:</h2>
              <h3>nick@carducci.sh</h3>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={(e) => this.setState({ first: e.target.value })}
                placeholder="first name"
              />
              <input
                onChange={(e) => this.setState({ middle: e.target.value })}
                placeholder="middle name"
              />
              <input
                onChange={(e) => this.setState({ last: e.target.value })}
                placeholder="last name"
              />
              <br />
              <input
                onChange={(e) => this.setState({ address: e.target.value })}
                placeholder="address"
              />
              <input
                onChange={(e) => this.setState({ city: e.target.value })}
                placeholder="city"
              />
              <input
                onChange={(e) => this.setState({ zip: e.target.value })}
                placeholder="zip"
              />
              <div style={{ fontSize: "12px" }}>
                This provisional signature to get on US Senate ballot in 2024
                for 2025 will be contestable if <br />
                voter identity is ambiguous{" "}
                <a href="https://voter.svrs.nj.gov/registration-check">
                  https://voter.svrs.nj.gov/registration-check
                </a>
              </div>
              <button type="submit">submit</button>
              {/*<div style={{ color: "grey", fontSize: "10px" }}>
            this is on firebase but only shows you signed if you enter the
            same info...
        </div>*/}
            </form>
          )}
        </div>
        "G-d looks in favor of those suffering in Ukraine," what, from being
        old/mad, they blame their inability to Save, upon?
        <h1>WHO'S FRANK??</h1>
        The Mafia ran "trash, skimmed{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MDBh">garments</a>,
        rackets, prostitution," people were glorifying the{space}
        <a href="https://qr.ae/pGdOmI">coop-life</a>
        {space}
        If he wanted to he would, we were building a wall, stopping
        closed-source ingredient lists, quite frankly, it is dishonest.
        <br />
        <br />
        The factor of labor-skew is much smaller than those who use it to corner
        the market, by demand-unbound by labor (financial-userers: insurers,
        lenders, landlords), govrent%/GDP, royalty%/barrels,
        SSAMedicareTax%/outlays, (cash/debt)*income **reverse amortization** or
        **capital loss deflation**. Poverty (PCE/labor) coincides with balance
        sheet equality.
        <br />
        <br />
        Public insurance is an investment bank, with price controls that only
        work (do not suppress quality-skew/discerning trade) because supply
        already doesn’t equal demandlabor-demand. Pennywise but a pound short of
        banning insurance and invoices for they are technically illegal,
        surrendered freedom, by bid and outright.
        <br />
        <br />
        firesale and elasticity makes no progress, per hour (-GDP/p)
        <br />
        $200b semiconductor repatriation is free rider mutable 1y/0x - HOMEOWNER
        ASSISTANCE TO PREVENT COMMERCE, LIQUIDITY, LARGE ITEM SALES TAX,
        SURRENDER BID AND OUTRIGHT LOITERING, FREEDOMS TO
        <br />
        {/**Blue eyes is less discerning for honesty as impertenancy */}
        No more scapegoating adjunications, or it'll be your head!! Yield back
        upon unreasonable, for we will reinitialize 1775-1787 scope of
        requirements
        <br />
        Repairs and favors can help rehabilitation, for favors innovate-GDP/p,
        nominally but also furthermore when coalecses to land owners,
        essentially, for branded-IP is nearly science, lower
        <br />
        <br />
        <NYPD
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        How do you help a jobless individual due to a pandemic?
        <br />
        Nick Carducci BA in Political Science & Economics, Johns Hopkins
        University (Graduated 2015)
        <br />
        Let them keep their own copy and donate, with goods that they do not
        firesale (then, as 1y/0x elastic as cash), or with hours; so,
        contribute. Intern for them. Favors are imputable-GDP/p lowering.
        <br />
        <br />
        favors, scientific contributions, and copy are included in tech
        advancement, -GDP/p or -GDP/hour
        <br />
        19% aren't disabled; .7% has Multiple Sclerosis and acute flaccid
        paralysis. Rich kids of Russian oligarchs are relenting. Stop sending my
        mom my disability, she is making additions to her house!
        <br />
        Reeling from the pandemic, 1/7 children in poverty is low equality.
        <br />
        -40% expenditures/income average.
        <br />
        <a href="https://www.bls.gov/opub/ted/2012/ted_20120222.htm?view_full">
          Food insecurity
        </a>
        {space}-25% (51% food, 30% clothes, 29% utilities, 25% school), in a
        year when school expenditures{space}
        <a href="https://worldpopulationreview.com/state-rankings/per-pupil-spending-by-state">
          again
        </a>
        {space}increase by{space}
        <a href="https://www.census.gov/newsroom/press-releases/2021/public-school-spending-per-pupil.html">
          5%
        </a>
        <hr ref={this.edu} />
        <EDU
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        {space}
        {/**https://www.census.gov/data/tables/2019/econ/school-finances/secondary-education-finance.html */}
        , inequality -40%, productivity{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MAJ3">-20%/yr+</a>
        {space}and efficiency{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MAJT">1/hours-GDP/p</a>,
        {space}
        <a href="https://fred.stlouisfed.org/graph/?g=MAO7">
          (+supervisory non-farm)
        </a>
        <br />
        Stop scapegoating age and mental acuity for laborless-demand in
        financial-usurers: lenders (loitering), landlords (implausible landlord
        lease) and insurers (false bid pool).
        <br />
        <br />
        ​leases are exclusive cause of oil prices, was being blocked on LIVE:
        Fed Chair Powell testifies before the Senate Banking Committee on
        monetary policy on Yahoo Finance (3/3/2022)
        <h4>
          obviously the main factor in oil by wells is leases; trust-breaking
          hypocrisy
        </h4>
        <OIL
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/fjxavdt3ygoo4x9/Screen%20Shot%202022-03-04%20at%205.52.25%20PM.png?dl=0"
          }
          float={"right"}
          title="oil consumption per person"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        We all spent $3.27/day
        <br />
        On oil (25% of that is yours, dollar owners, for $.00054, =
        18mbarrels*$60/barrel/$2t currency)
        <h4>
          Wouldn’t you like royalties for some of that, they make what 30% in
          wages and zippideedoodas
        </h4>
        Blue eyes is less discerning for honesty as impertenancy
        <br />
        $5.4/day for $10k in checking, or{space}
        <a href="https://www.nrdc.org/experts/josh-axelrod/course-correction-federal-oil-and-gas-leasing-needs-fixing">
          20%
        </a>
        {space}of that (3.65%/yr+ return - input costs)
        <br />
        <br />
        <a href="https://www.eia.gov/petroleum/wells/">map of wells (purple)</a>
        {space}&bull;{space}
        <a href="https://www.eia.gov/todayinenergy/detail.php?id=44356">
          report
        </a>
        {space}royalties as if transaction-fee-based); discount SSA&Medicare
        income by outlays, across the board, don't worry, wealth is more
        relative than utilitarian, and sprints have two parts of material and
        labor, amortization writes down to deflate unjustifiable gains - by
        monopsony or
        <br />
        <br />
        NJ Consumer Fraud Act:
        <br />
        "Why are there people suffering from poverty?"
        <br />
        Nick Carducci - Product Research at Scopebook (2021–present)
        <br />
        Poverty is average expenditures-to-income, which are immutable
        characteristics of a sprint, scope, or book, or **operating costs, cash
        flow, or profit and loss time-periods**, but not balance sheet, which is
        like a disparity table, for they can amortize to zero and are gained in
        relativity. 1/2 material-labor always variable, known hazard
        <br />
        <br />
        <Spanish
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <br />
        <br />
        "How can we increase the economy using taxation?"
        <br />
        Nick Carducci - Candidate at U.S. Senate (2020–present)
        <br />
        Increasing the economy by measure of GDP/p is tech deprecation, by
        actual or nominal increase in Demand, which is a dead-weight-box upon
        GDP/hour-GDP/p 0y/1x efficiency, so you would just tax more than free
        rider immutable, sewage-, police- and lawsuits-spending would require.
        <br />
        <br />
        <h4 style={{ float: "left", width: "200px" }}>
          Truncated Production Tax
          <br />
          <br />
          <a href="https://teapharmacy.party/drugs">open ingredient lists</a>
        </h4>
        <h4 style={{ float: "right", width: "200px" }}>
          no state vig{space}&bull;{space}ween cops off bonds TRUNCATED
          PRODUCTION TAX 2024{space}&bull;{space}free-rider-mutable 1y/0x
          trust-breaking hypocrisy carducci.us/primary
          <br />
          <br />
          reverse amortization or capiral loss deflation for govrent%/GDP
        </h4>
        My plan would be to adjust not writing down but past income. I actually
        do call it *Reverse Amortization*, or *Capital Loss Deflation*. For
        surrendered donee-beneficiary freedom outright, loitering,
        **(cash/debt)*income**, every year back. For SSA, deflate by
        **(tax%/SSA-outlays)**. *Same with Medicare*. I think that may be it.
        **(Royalties%/barrel)**, instead of *leases to the treasury*. Separate
        Savers (of *currency*, not *money* nor *savings*) from Treasury.
        <br />
        <br />
        Paralytic polio shows same Multiple sclerosis presentation
        <div
          style={{
            borderLeft: "3px solid",
            paddingLeft: "5px"
          }}
        >
          , .7% are disabled, not 19%, stop scapegoating poor Savings for age
          and madness
        </div>
        <h4>inseminate the cell - on stage! humanharvest.info/polio</h4>
        <Vax
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        Bacteria cannot be more severe viral pneumonia
        <br />
        Hospitalizations and vaccine per capita correlate positively. Maybe just
        behavioral correlation, not causation - when using all-cause PIC.
        Alzheimer’s is caused by sewage.
        <br />
        Financial-userers, lenders landlords and insurers are surrendering
        donee-beneficiaries outright and bid. Leases={">"}$oil
        <br />
        We are asymptomatically testing for the first time, proving it isn’t
        correlated. 1% die, 50% sniffle
        <br />
        Non-exclusive byproduct or not even correlated when testing asymptomatic
        ally don’t send doctor to do econometrist job
        <h4>
          the right of contract; liable for diligence in surrendered freedoms by
          bid, or outright
        </h4>
        <hr />
        Nick Carducci - CEO & Founder at Thumbprint.us - Social Calendar
        (2012–present)
        <br />
        "Which economic system works best?"
        <br />
        1/12 industry-vertical against horizontal merger, regulations; the
        lovely monopsony and skills-trading economists.
        <br />
        <br />
        We are always impacting, elsewise self-harm; imputable favors,
        scientific contribution, even copy.
        <br />
        <br />
        Open ingredient lists, NFC Motor Vehicle ween cops off bonds spoofable
        precinct 3% under $2k truncated production tax, reverse amortize
        govrent%/outlays and (cash/debt)*income just the same, allow
        whistleblowers on such 11/12 minimal viable product GENERAL MAINTENANCE
        UNIT, duress, moot and without permission, and 1/12 as
        like-“collateral,” to provide partners with security in
        non-general-income max-royalty, to replace future potential debt
        arrangements, thereafter.
        <hr />
        Nick Carducci - Legal Writer & Software Engineer at Vaults.biz
        (2020–present)
        <br />
        "What industries only exist because of economic inequality?"
        <br />
        Insurers, lenders and landlords imbue enumerable and able to reverse
        amortize, loss, by,
        <br />
        <br />
        &bull;{space}implausible use leases,
        <br />
        &bull;{space}false bid pool loss,
        <br />
        &bull;{space}lenders loitering,
        <br />
        all of which are technically illegal for surrendering others’ freedoms,
        like counterfeit in contract, liable of the contractor, that is the
        buyer, of a scope of work, or with currency.
        <br />
        <br />
        <div
          style={{
            borderLeft: "3px solid",
            paddingLeft: "5px"
          }}
        >
          If the estimates are higher than the original contract price, the
          homeowner may seek the difference as an ascertainable loss.
        </div>
        <br />
        should not be tortious. Known hazards. Consumer fraud, known hazard,
        force majeure - the difference is intent, let alone donee beneficiary
        (others' standing-grounds).
        <Cable
          style={{ width: "100%" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/c9e74wex0s58qx4/old%20people%20work.jpeg?dl=0"
          }
          float={null}
          title="https://fred.stlouisfed.org/graph/?g=MDZy"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          style={{ width: "100%" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/234613ckwgiez3i/ssa%20general%20fund.jpeg?dl=0"
          }
          float={null}
          title="SSA trust fund balance geronimo 2020- $2t"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://analsolutions.net">
          blind trust over currency policy-making (SSAMedicareTax%/outlays
          capital loss deflation)
        </a>
        <br />
        put country ahead of government, corporation and mortgage. 50 average
        age small business. restoring Salt will put money back into pockets of
        labor, where it belongs. Actually, I'm on the other edge, the
        bottom-bottom line, sprints are 1/2 material-labor
        <Wages
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        why would you believe governments that say expected deaths are famines?
        and People only live longer by proper sewage (cross-ref India-U.S.).
        They make money just building and blowing up fireworks that they{space}
        <a href="https://qr.ae/pGdaNd">debt spend and tax for</a>. Profits are
        only made by subjugating labor-demand.
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
          href="https://gmunit.us"
        >
          gmunit.us
        </a>
      </div>
    );
  }
}
