import React from "react";
import Cable from "./Dropwire";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Gist from "react-gist";
import NYPD from "./nypd";
import OIL from "./oil";
import EDU from "./edu";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    document.cookie = "";
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
        Getting after Putin to scapegoat oligarchs, doesn't destroy wealth, only
        income
        <br />
        <br />
        going rogue: psychotic people enjoy pain, pitfall-investigate
        (whistleblower) unconsious hysteria
        <br />
        Putin: "Ukraine did this by joining NATO."
        <br />
        Discount income by{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MBbk">
          government and leases, commercial, wells, and subsidies
        </a>
        <h4>
          600k of 18m barrels a day is peanuts! Wouldn???t you do this for KYC?
        </h4>
        "Life sentence, 9 years, 7 years, people are no longer guilty by
        association, yet state vicg torts is the capacity-to-victim, alone.
        <br />
        ...Did get the tech needed to move forward in your life.???
        <br />
        Repairs and favors can help rehabilitation, for favors innovate-GDP/p,
        nominally but also furthermore when coalecses to land owners,
        essentially, for branded-IP is nearly science, lower
        <br />
        <br />
        How do you help a jobless individual due to a pandemic?
        <br />
        Nick Carducci BA in Political Science & Economics, Johns Hopkins
        University (Graduated 2015)
        <br />
        Let them keep their own copy and donate, with goods that they do not
        firesale (then, as 1y/0x elastic as cash), or with hours; so,
        contribute. Intern for them. Favors are imputable-GDP/p lowering.
        <br />
        OCD for disorder
        <br />
        A statistician gone mad
        <br />
        <br />
        "The nicest people, I can't believe you are standing on my neck"
        <br />
        <br />
        ???40 mile empty caravan wouldn???t last.??? Brian Kilmeade
        <br />
        <br />
        ???Lower your costs, instead of wages.??? Margin cap! Still wages
        <br />
        <br />
        "Why are there people suffering from poverty?"
        <br />
        Nick Carducci - Product Research at Scopebook (2021???present)
        <br />
        Poverty is average expenditures-to-income, which are immutable
        characteristics of a sprint, scope, or book, or **operating costs, cash
        flow, or profit and loss time-periods**, but not balance sheet, which is
        like a disparity table, for they can amortize to zero and are gained in
        relativity.
        <br />
        <br />
        Strong showing for the economy, data coming in, well ahead of what
        economists predicted.
        <br />
        "Why do we need to measure macroeconomic performance?"
        <br />
        Macroeconomics is the total cash flow (GDP/yr, all
        expenditures+structures+government, *with basing off of state-Lands,
        neighborhood-Land and brand-IP collateral*), yet higher prices are a
        sign of *tech deprecation*, by currency{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MBZv">share split</a>,
        withstanding. Averaging per person fixes for population growth, and per
        person fixes for **productivity** of expenses, yet not the{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MC0U">
          cost of living, or utility
        </a>
        . This is a measure of success for bona fide economists.
        <br />
        real GDP growth is structures and government growth
        <br />
        <br />
        "How can we increase the economy using taxation?"
        <br />
        Nick Carducci - Candidate at U.S. Senate (2020???present)
        <br />
        Increasing the economy by measure of GDP/p is tech deprecation, by
        actual or nominal increase in Demand, which is a dead-weight-box upon
        GDP/hour-GDP/p 0y/1x efficiency, so you would just tax more than free
        rider immutable, sewage-, police- and lawsuits-spending would require.
        <br />
        <br />
        "What are the negative values that lead to poverty?"
        <br />
        Poverty is (expenditures/income average), and crowding out isn???t real
        because labor makes both elastic, proven by GDP/p 0%/yr+ amongst 3%/yr+
        population (e.g.{space}
        <a href="https://vaults.biz/gdp">1800???1913</a>). So, a higher value of
        material than labor, or **lower average labor, from a foreign
        investor**, perhaps.
        <br />
        Efficiency begets a smaller GDP/p, for{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MBph">example</a>
        .
        <br />
        <br />
        ???I???m not a fan of putting people away before they are convicted, but I
        am of a judge doing that.???
        <br />
        <br />
        <h4>
          <a href="https://www.nrdc.org/experts/josh-axelrod/course-correction-federal-oil-and-gas-leasing-needs-fixing">
            .23
          </a>
          *18m*$100/330m=$1/p
        </h4>
        to put more in the marketplace - that is Savers' voting rights and
        roualties, due. don't lease it back to us.
        <br />
        "ban the oil coming from Russia," leases are the same{space}
        <a href="https://data.worldbank.org/indicator/NY.GDP.PETR.RT.ZS?locations=RU">
          % as finance in America
        </a>
        . All credit is a mess, surrendered donee-beneficiary freedom outright.
        There is $170t outstanding and $2t available. Now they are leasing back
        to us our royalty-able dollar fungible across the U.S. just deflate
        capital loss (cash/income)*income and 1/12 industry as ???collateral???
        max-royalty instead. 4-7% 600k/day would not make for 3m/3m exports
        <br />
        <br />
        some kind of logic, what is an unconcious decision, hysteria? sometimes
        that is the ONLY CHOICE
        <br />
        <br />
        Can I join the paralympics as an elderly person? Not when to rent seek
        or truncated production tax is available - 1y/0x plundering/firesale; It
        could happen if labor-demand requests it, otherwise it is 1y/0x douche.
        The currency isn???t share-split, but the purchasing power is
        strengthened, by lower labor costs.
        <br />
        <br />
        Even amidst 3%/yr+ population (
        <a href="https://vaults.biz/gdp">1800???1913</a>), mind you, the crowding
        out only happens when laborless-demand - monetary measures have
        exhausted tech advancement, -GDP/p, hand over fist. Call it 1y/0x price
        elasticity, call it lost purchasing power, but real GDP/p is just{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MBgO">
          government and structures
        </a>
        . Has this been declared real GDP, or is the discount only by growth?
        Isn???t that too short-lived to be an actualization? Why not just say
        GDP-PCE is real GDP?
        <br />
        <br />
        You can even see the tech deprecation of GDP/p in the
        counterproductivity of laborless-demand by imputable-choring slavery,
        re-imposed (<a href="https://vaults.biz/gdp">1814???1870</a>).
        <br />
        <br />
        real GDP is what? GDP discounted by the inflation rate? That is not
        discounting nominal for actual fully. For it is only PCE and doesn???t
        account for loss in productivity, and efficiency.
        <br />
        The official measure is by CPI (PCE index), deflating GDP by GDP, for
        real, would be always 0. real GDP discounts GDP for inflation rate,
        which is expenses+structures+investment-expenses*(inflation%/100).
        <br />
        PCE includes{space}
        <a href="https://www.bls.gov/osmr/research-papers/2017/st170010.htm">
          employer contributions
        </a>
        {space}(again the government telling us insurance by employment
        contribution is, now increasingly, more expensive than a la carte or
        rollover, especially open-ingredient-list) is also counted in CPI, *it
        is the same basket of goods, mean prices*. If you don???t know what
        inflation is, why are you answering this question? Inflation is imbued
        in GDP/p, which is
        {space}
        <a href="https://fred.stlouisfed.org/graph/?g=MBqh">
          expenditures+structures+government
        </a>
        {space}
        and cutting costs (margins) can lower all enumerations of inflation. It
        is not fuzzy. It is math.
        <br />
        <Cable
          style={{ width: "100%", height: "360px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyout
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=MBrO&width=670&height=275"
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=MBrO"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        1/hour-GDP/p is a better metric of efficiency, and
        (income/hour)/median-home for productivity.
        <br />
        It is largely the{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MBrP">same</a>. Do you
        know the differences between them? If not, why do you care if inflation
        is not all-monetary, but by increases in GDP/p? If it is, then tech
        advancement can stop that loss in **purchasing power**. I need to be
        able to call GDP/p growth something, if not **inflation**. I have been
        calling it **tech deprecation**.
        <br />
        "Go to the home, check it out, shut it down."
        <br />
        <br />
        Wayne Messam: ???People are looking to the government for jobs at the
        Federal level. Delitorious affect of overusage of opiods,??? says the
        pharmacist. "Clean drinking water, maximize technology," just put free
        rider mutable 1y/0x elastic warn tort failures in jail.
        <br />
        <br />
        <Cable
          style={{ width: "700px", height: "360px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyout
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=MBbk&width=670&height=275"
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=MBbk"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://fred.stlouisfed.org/graph/?g=MBbk">"Value Added%"</a>
        <br />
        <br />
        "Every constitutional protection has been violated ALL for the Jan 6
        protestors because of a political agenda," says Julia Kelly. Next time I
        will{space}
        <a href="https://truncatedsalestax.gov">shiv</a>
        {space}the person who tries to involuntarily commit me or give me
        medicine I don't want.
        <br />
        <br />
        $10b to Ukraine out of $4t/yr, is not free rider immutable when you are
        setting the margins
        <h4>
          Schizo consistent; is it a "seasonal flu" or a "deadly pandemic?"
        </h4>
        I don't think there is anything we can't do."
        <h4>leasing science, root causes is literally the fees</h4>
        Closed ingredient-lists with named-businesses for reviews of
        estimated-sprints, as just that.
        <br />
        The currency isn???t share-split, but the purchasing power is
        strengthened, by lower labor costs.
        <br />
        Investments in schools infrastructure healthcare, police and kinda
        military, too.
        <br />
        funding police departments and homeless shelters with investment banks
        <br />
        expenditures(GDP)/hour is an artifact of tech deprecation
        <br />
        Chores/favors, scientific contributions, and copy are included in tech
        advancement, -GDP/p or -GDP/hour
        <br />
        19% aren't disabled; .7% has Multiple Sclerosis and acute flaccid
        paralysis. That's it. Stop sending my mom my disability, she is making
        additions to her house!
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
        ???leases are exclusive cause of oil prices, was being blocked on LIVE:
        Fed Chair Powell testifies before the Senate Banking Committee on
        monetary policy on Yahoo Finance (3/3/2022)
        <br />
        <br />
        I think these missiles are old gen
        <br />
        Saveface vig
        <br />
        humanitarian military fiscal monetry aid is defined as washing, itemized
        is mixed. Gov March 11 deadline, how about Truncated Production Tax for
        just domestic.
        <br />
        <br />
        USAID 1y/0x elastic; public curiosity? no, Public review/science
        (rent-free pmm) for executions
        <br />
        Thanks for everything you do to help fellow Americans as a 501c3 that
        dissolves to the state.
        <br />
        <br />
        ???We should be flooding the market with natural gas, $107/barrel, that is
        a modern record, lasts in 36 hours.
        <br />
        We and Europe are buying oil from Russia, today, what the Hell for?"
        <br />
        <br />
        Involuntary commitment is an act of war - scapegoating edp violent to
        others without evidence (to exhibit)
        <br />
        <br />
        we can have our economy stand on its own if we exploit Savers'
        land-deeds. I'm going to hang James Comer from butcher hooks, live!
        <h4>we can't police away poverty and mental health crisis."</h4>
        we have been expending 18m/day barrels, 3m in and out{space}
        <a href="https://qr.ae/pGd2Px">tape painting</a>
        <br />
        Every dollar you have in your{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MzF1">account</a>,
        disburse a percentage of oil sales. Our dollars are fungible, not broad
        m2 that goes into GDP/yr - don???t sell it when 1/3 voters say ???
        <a href="https://qr.ae/pGd24t">no-candidate</a>??? then lease it back to
        us
        <br />
        <br />
        <Cable
          style={{ width: "100%" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/c2dvxgjh1c6dx8o/Screen%20Shot%202022-03-02%20at%205.08.41%20PM.png?dl=0"
          }
          float={null}
          title="https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=MCRFPUS1&f=A"
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
              : "https://www.dl.dropboxusercontent.com/s/sobka0ygs71csh8/Screen%20Shot%202022-03-02%20at%205.09.40%20PM.png?dl=0"
          }
          float={null}
          title="https://checksandbalancesproject.org/seven-things-you-need-to-know-about-oil-production-and-drilling-on-your-public-lands/"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h4>
          savings and money is going to be{space}
          <a href="https://qr.ae/pGdstl">worthless</a>
        </h4>
        Counted-wealth is good-will (last traded parcel, non-concurrentable
        collateralization) and currency fungible lands, alone. Chores/favors,
        scientific contributions and copy are to be imputed!
        <br />
        <br />
        I???m a bookkeeper, we amortize the balance sheet to zero, or at least, a
        concurrentable cash balance ($2t currency to $170t ???good will??? of
        neighborhood-Land or branded-IP) then if we are really aggressive, we
        say ???royalties instead of leasing back our currency fungible
        state-lands!???
        <h4>hypocrisy doesn't only look bad</h4>
        common law has more standing than treaties, especially of surrendered
        donee-beneficiary freedoms (civilians, fines)
        <br />
        <a href="https://qr.ae/pGdKYt">Production is not rents</a>!<br />
        "By definition, economic rent is the difference between the marginal
        product and opportunity cost. When a firm controls valuable production
        resources such as land, labor, and capital, it will use the resources to
        bring it to its{space}
        <a href="https://corporatefinanceinstitute.com/resources/knowledge/economics/economic-rent/">
          optimal production quantity
        </a>
        ."
        <h4>
          The U.S. stated-strategy is to _get_ the Russian people to make
          anti-war-riots. Russian stated-strategy is tax beyond truncated
          production receipt for sewage, police, lawsuit scope
        </h4>
        "bleed his treasury," is already negative on cash balance, assets and
        liabilities are non-concurrentable
        <br />
        <br />
        arresting or else when unequal bond-tax, free rider mutable tax,
        sanctions for without actual executions, is{space}
        <a href="https://thumbprint.us/privacy">blatant</a>
        {space}war crime (Everything you can but not force what others can, to
        not)
        <br />
        <br />
        "antiviral pills at no cost," front running is 1y/0x elastic, when
        buying for others (no demand) or non-rollover (hours/schedule)
        <h4>
          Trump wants to make review for closed source medicine and foreseeable
          force majeure, 1y/0x elastic
        </h4>
        single family zoning is retarded: plausible use is not surrendered
        donee-beneficicary freedom, by bid (like insurance, yet outright
        lending)
        <br />
        <br />
        2m/yr is up from{space}
        <a href="https://humanharvest.info/polio">1m/yr</a>
        {space}normally (in addition to 1m/yr treasury collusion),{space}
        <a href="https://vaults.biz/immi">illegals</a>
        {space}are less criminal per capita, and more productive (by age)
        <br />
        <br />
        <a href="https://checksandbalancesproject.org/seven-things-you-need-to-know-about-oil-production-and-drilling-on-your-public-lands/">
          shoving poop in your face
        </a>
        {space}is an attack, that, nor
        <h4>mental and age is a disability; .7% are actually disabled</h4>
        <NYPD
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        Why is Keystone required when we already consume{space}
        <a href="https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=MCRFPUS1&f=A">
          18m/day
        </a>
        {space}and trade 3m in and 3m out (1.3% from russia, virtue-signalling)?
        {space}
        <a href="https://qr.ae/pGdKYt">Royalties</a>
        {space}for dollars' fungible, no leases to the state, at least
        <h4>
          you can't invoke bail for a later trial, that means you have no
          evidence to exhibit
        </h4>
        "there was no war while Trump was president, 'Conflict began in February
        2014 following the Revolution of Dignity. ...Putin criticized the
        enlargement of NATO as a threat to his country for{space}
        <a href="https://qr.ae/pGdTGc">-$100b tsy bonds</a>
        {space}and demanded Ukraine be barred from ever joining the military
        alliance.'"
        <br />
        <h4>you can't own science and must open ingredient lists</h4>
        Unexpect medical bills are false bid pool surrendered freedom donee
        beneficiary bids, expected, is outright.
        <br />
        AMAC is the leading conservative{space}
        <a href="https://fred.stlouisfed.org/graph/?g=MyXf">benefit</a>
        {space}(2x loaned?) false bid pool pyramid scheme waste.
        <br />
        friends and family discrimination
        <br />
        Wacca wacca wacca the beloved prosecutor.
        <br />
        ???Have they delegated ???or given it unto themselves.???
        <br />
        How many permit-leases do we pay to the government that we can get
        drilling drilling drilling so Putin can???t. Prices go to $100 if we don???t
        drill, for{space}
        <a href="https://qr.ae/pGdKYX">3m/day export 3m/day import</a>, for
        quality balance paint.
        <br />
        <br />
        The absolution of change rate, coming into a derivative(i =2),
        change-rate/change-rate, really doesn???t matter,{space}
        <a href="https://www.google.com/search?q=negative+rate+of+change">
          negative rate of change, by basis
        </a>
        <br />
        <br />
        This is just like involuntary commitment (rollover insurance), eloping
        from medication at Riverview Medical Center (nj 101.5 sponsor). Remember
        to add G-d to curse list -{space}
        <span role="img" aria-label="unicorn free">
          ????????
        </span>
        science 1775-1787. 2 week anon executions and trades for Public review
        <h3>
          down is good, growth GDP/p is bad, art of fact of tech deprecation
        </h3>
        <h4>
          "'stop trading with Russia and fighting with them with two hands!'
        </h4>
        Xi is{space}
        <a href="https://qr.ae/pGdtZw">way ahead of schedule</a>, he is not
        giving away a war with china, that is not a gy (edit, 2/2022: same ten
        minutes, "guy") thinking about defending us, nor comparative advantage
        tech advancement efficiency equality competition 0y/1x GDP/hour-GDP/p."
        <br />
        <br />
        Are they going to operate in other countries only if they do not engage
        in war, maybe that is a little different than war crimes as per
        incentivized by bonds, or surrendered donee-beneficiary freedom bid or
        outright.
        <br />
        <br />
        They can look at different laws and come to different conclusions
        because they countervail eachother
        <h4>
          -$100b Russia investment in foreign monies (all us, balance sheet
          allows you to paint tape!),{space}
          <a href="https://qr.ae/pGdTGc">robust NATO</a>!
        </h4>
        an oil and gas exporter (leased back to us by the government) shales
        revolution (18m/day expenditures barrels, 8m/day trade barrels,
        paint-tape), Trump admin policies, production is down, cancel leases on
        federal land, line the pockets of the treasury instead of russia, with
        consumer surrogates for Supply=Labor-Demand, efficiency, GDP/hour-GDP/p
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
        <a href="https://www.eia.gov/petroleum/wells/">map of wells (purple</a>
        <br />
        <br />
        <a href="https://www.eia.gov/todayinenergy/detail.php?id=44356">
          report
        </a>
        <br />
        <br />
        Now we are building bathrooms in basements
        <br />
        <br />
        ???What will it take to take the assets from all these{space}
        <a href="https://twitter.com/viathumbprint/status/1416803308824633347">
          oligarchs
        </a>
        ? They should merge{space}
        <a href="https://lightte.ch">into</a>
        {space}a government board.??? -Brian Kilmeade
        <br />
        <br />
        <a href="https://gmunit.com">Competitive Enterprise Institute</a>
        {space}says the price of{space}
        <a href="https://magnate.company">oil</a>
        {space}is the governments??? perogative Only laborless-demand is, for
        ask-inventory and bid-opportunity Marginal Utility Indifferences.
        <br />
        <br />
        (*Waves generally*) These are all unfair, not solutions. We need to
        amortize income tax portion **outlaid** for Medicare, and for Social
        Security, and deflate it by such **tax-rate**.
        <br />
        <br />
        Guns blazing
        <br />
        <span role="img" aria-label="cowboy">
          ????
        </span>
        research
        <span role="img" aria-label="bullseye">
          ????
        </span>
        designed
        <br />
        Tax rate depreciation like inflation 1y/0x
        <br />
        unproportional tort, state vic hypocrisy
        <h3>
          exploitative or illegal content is{space}
          <a href="https://thumbprint.us/speech">
            just as graphic and age, or copyrights
          </a>
        </h3>
        Tax for free rider mutable is 1y/0x elastic Is the balance sheet real?
        <br />
        <br />
        The U.N. allows comment section to scapegoat (e.g. "open-lines")
        malfeasance with open comment box, capital loss deflation: reverse
        amortization, (cash/debt)*income every year back, favoring Saveres
        {/*Debt donee beneficiary, false bid pool insurers, implausible use leases 
        landlords, all also 1y/0x elastic, as well as tax free rider immutables 
        trust breaking government hypocrisy */}
        <br />
        <br />
        "'In the context of beyond and in the prayers of those sitting in this
        hall.??????
        <br />
        We are going to make their life a living hell, the people won???t like
        that, so they will HAVE TO riot against the war from the inside,
        <br />
        <br />
        threat of violence or act of harm - drop dead faggot duddy. Address the
        issue, receivable profitables, 1y/0x government funding free rider
        mutable, You don???t need more employees, solving it just takes one
        mathematician. +1/3 its current size truly is{space}
        <a href="https://www.researchgate.net/project/Class-action-suit">
          abject failure of regulators
        </a>
        ; trust breaking busting dishonest or delusional
        <br />
        <h1>
          end to end,{space}
          <a href="https://thumbprint.us/privacy">on-device</a>, encryption is
          NOT an issue before an actual crime has been committed
          {/**mike duffy, pd */}
        </h1>
        <h2>
          THE DATA COLLECTION PRACTICES LED TO EMPLOYERS ADVERTISING MALE JOB
        </h2>
        <h1>Imminent injury or death to individuals</h1>
        <a href="https://teapharmacy.party/drugs" style={{ float: "left" }}>
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/vocp70s470xzkqd/i-better-get-a-little-high-towelie.gif?dl=0"
            }
            float={null}
            title="towlie, 'i better get a little high'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
        </a>
        {/*open ingredient lists*/}
        most employment doesn???t require education, or, at least,
        laborless-demand, might.
        <h4>
          contesxnt is{space}
          <a href="https://www.quora.com/What-are-the-solutions-to-fix-the-social-security-crisis">
            key
          </a>
          {space}
          {/**there has been focus behavior in contextual advertising severely suppressed, DuckDuckGo */}
          if data collection for targeted advertising were banned, access to
          personal data wouldn't determine if companies would succeed or fail in
          the advertising market. What is survellance for except to line the
          pockets of Facebook and Google, inherent advantages, in
          advertising-vertical-part and beyond. Revenue is profit
          <span
            style={{
              color: "red"
            }}
          >
            able
          </span>
        </h4>
        Income tax share of Medicare / Medicare outlays.
        <br />
        Income tax share of SSA / SSA outlays.
        <br />
        <br />
        China has{space}
        <a href="https://qr.ae/pGdhVa">more corporate share of debt to GDP</a>
        {space}than U.S. does???
        <br />
        <br />
        When you provide more oil from labor-borne-demand of Savers, it doesn???t
        increase demand, just price and actually truncated the most discerning
        Marginal Utility Indifferences, fo 1y/0x elasticity of dead-weight box,
        BOB SELLERS ILL POUR MOLTEN GOLD DOWN YOUR THROAT
        <br />
        <br />
        "Do you think the society that you live in contributes to your views
        about yourself? Why or why not?"
        <br />
        Nick Carducci - Injured yet labeled schizophrenic for{space}
        <a href="https://qr.ae/pGdhVi">boycott credit income</a>
        <br />
        GDP/p is tech deprecation, and as a tech maker I want to advance people
        out of jobs. This makes me angry.
        <br />
        <br />
        "Oh you don't want an economic recession, so why invade Ukraine.
        Sanctions do not help by{space}
        <a href="https://qr.ae/pGd1V1">600k/day</a>
        {space}barrels of oil. In that Teddy Rosevelt, broker peace to broker
        war. the model is Teddy, he ended brutal conflict in Russia and Japan.
        Biden is silent and done nothing. Dollar needs to be in the foreign
        reserve currency, we will not intervene-militarily."
        <br />
        <Cable
          style={{ width: "200px", height: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/fb8e2qahxjwaipw/Screen%20Shot%202022-02-28%20at%2012.48.45%20PM.png?dl=0"
          }
          float="right"
          title="Carshield false bid pool non-concurrentable (non-appointmentable, finished non-input competing with consumers intent)"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>Surrendered-bids,</h2>
        "Will the USA be provoked into the war that???s happening?"
        <br />
        Nick Carducci - Bookie at Book.com.co (2019???present)
        <br />
        This war has been happening for 8 years, and is exasperated by NATO
        wishing to include one side, 8 years in. I think that was because of how
        relenting Russia is to securing and borrowing debt, that allows for
        painting the tape with donee-beneficiary-surrendered-freedoms.
        <br />
        <br />
        "He either has a strategy we aren???t keyed in on or he is mentally
        incapacitatedly hysterical and unconscious"
        <br />
        <br />
        Liam Halligan, "business editor," Stock market indices only go up due to
        laborless-demand (unscience $170t 'good-will'
        neighborhood-Land/branded-IP non-concurrentable $2t currency), not a
        success; the west thinks GDP/hour is productivity but I think it is
        expenditures/hour. "Russian interest rates are up nearly 20%, it is
        {space}
        <a href="https://www.quora.com/Why-is-Russias-GDP-to-debt-ratio-so-low-Should-the-USA-be-concerned/answer/Nick-Carducci">
          collapsed and closed
        </a>
        ." Debt is surrendered-freedom and contractor liable, lest thee wish to
        be a{space}
        <a href="https://qr.ae/pGd8SQ">war criminal</a>.
        <br />
        <br />
        Meaningless significance, is not significance
        <br />
        <a href="https://humanharvest.info/polio">
          n{"<"}100 is a meaningless significance
        </a>
        .<br />
        Congressman Brooke???s, the reason why masks don???t do anything is because
        you assume year-to-year, ???excess??? deaths are a problem.
        <br />
        Mo Brooke???s retard let???s be clear, you can???t say the{space}
        <a href="https://vaults.biz/immi">border</a>
        {space}is where people are getting their fentanyl laced heroine and
        marijuana when 2% of automobiles{space}
        <a href="https://teapharmacy.party/drug">aren???t checked</a>, and you
        have a monopsony over healthcare with prescription costs and closed
        ingredient lists. Consent of bills is still the chequeing of a third
        party donee-beneficiary.
        <br />
        <br />
        12 industry-variance, normally. Conviction (policymaking, capacity of
        warn tort jail)
        <br />
        <br />
        minimal viable product, Tranquil and voluntary trade
        <br />
        <br />
        <Cable
          style={{ width: "200px", height: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/1fcq4aa8zxh1x7t/Screen%20Shot%202022-02-28%20at%2011.29.37%20AM.png?dl=0"
          }
          float="left"
          title="A declined submission to PhD economists for all Mohammad Gani, 'Why does GDP/yr=mv1==mv2?'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://qr.ae/pGd1AX">inflation</a>
        {space}0y/1x efficiency, GDP/hour-GDP/p, trust-breaking hypocrisy
        standing,{space}
        <a href="https://qr.ae/pGQqKJ">[choring-]criminals</a>
        {space}abound
        <br />
        <br />
        Diagnosing mental-health by drug use and then uppers as sad
        <h4>
          duress, oath, moot, Conviction (evidence, corrections of warn tort
          jail)
        </h4>
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
        Eat my ass, it lowers Alzheimer???s presentation, cross section India:
        <br />
        smd
        <h2>
          "How can negativity be helpful to society?"
          <br />
          Nick Carducci - CEO & Founder at Thumbprint.us - Social Calendar
          (2012???present)
          <br />
          -GDP/p is tech advancement (pro-people), so negative people are
          grounded-optimists; hardly are narcissists in such a way about
          absolute measures rather than rates or change-rates, unless they are
          critiquing quality, thereafter the assessment is again a rate by
          /(utility-indifference).
        </h2>
        be happy; rather
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
        <h4>Suits for mistaken holds, I???m not sure since the court isn???t</h4>
        laws are bonk, intranational escalation is not a war crime, and
        livelihood encroachment, is internationally{space}
        <span role="img" aria-label="cowguy">
          ????
        </span>
        <br />
        <br />
        Duress and hypocrisy, implicit grounds without laws of
        language-bound-reason, but modularized and perverse consent
        <br />
        <br />
        <a href="https://carducci.us/videos">login.gov</a>
        {space}is malfeasant for convict intranet (repeat offender police
        dashboard) and Motor Vehicle NFC-widget for bridge tolls, so it can be
        non-taxing
        <br />
        <br />
        Even experts are save face-able, by reverse amortization of capital
        loss, deflation (cash/debt)*income{space}
        <a href="https://vaults.biz/gdp">every year back</a>
        <h4>
          meaningless significance, no accounting thur,{space}
          <a href="https://qr.ae/pGQqzh">out of their depth</a>
        </h4>
        <span style={{ color: "orange" }}>technology to stop</span>, the only
        Public thing is science perpetual motion machine or free rider immutable
        is Public, not operational monopsony like per diem incarceration bias -
        net loss bonds
        <br />
        <br />
        <Cable
          style={{ width: "100%", /*minWidth: "200px", */ height: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/rs0dabdf2hvro3j/Screen%20Shot%202022-02-28%20at%202.22.47%20PM.png?dl=0"
          }
          float="left"
          title="Why doesn't the USA get sanctioned after all its war crimes? - https://qr.ae/pGdTGc"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Trump, 2/27/2022:
        <br />
        <div style={{ borderLeft: "3px solid", paddingLeft: "3px" }}>
          ???I???m the guy that ended his pipeline.???
        </div>
        <br />
        Mark Levin, 2/28/2022:
        <div style={{ borderLeft: "3px solid", paddingLeft: "3px" }}>
          He is our enemy, he thinks he is our enemy, and he is right, choke him
          off."
        </div>
        "What is a clear explanation of monetary policy?"
        <br />
        Nick Carducci - Chairperson at Saver Party (2020???present)
        <br />
        Monetary policy is just currency as liability, outstanding, share of the
        state (20% of U.S.), amortized as if actually-dissolved, that, as it
        happens, the politicians lease back to us thru our customer-surrogate
        corporations??? input costs.
        <br />
        Lidia Curanaj, 2/28/2022:
        <br />
        <div style={{ borderLeft: "3px solid", paddingLeft: "3px" }}>
          ???Close the border and open the spigots.???
        </div>
        <br />
        Assets are, as they are, ???good-will??? of neighborhood-Land and
        branded-IP, non-concurrentable ($170t:$2t chequeing), priced by
        liabilities when under the same fund.
        <br />
        <a href="https://qr.ae/pGdpvU">
          There is nothing constitutional of immigration fees
        </a>
        <br />
        Savers' land-deeds (<a href="https://qr.ae/pGQqzl">currency</a>) neither
        is donee-beneficiary-surrendered-freedom a decision for New Jersey, but
        also the Federal and Lending apparatus. 1/12 industry-vertical
        max-royalty is ???collateral??? within bounds of what the contractor can win
        from the signatory, for force-majeure-intent, as well.
        <br />
        <br />
        Treacherous
        <br />
        <br />
        <div style={{ borderLeft: "3px solid", paddingLeft: "3px" }}>
          "Constitutional conservatism versus progressive socialism, American
          marxism, institution is not over the individual, that is not America
          and not Texas, the only state in America with our own Independence
          Day, I hope everyone is out there, participating and voting,??? Alan
          West. ???China sends it to the cartels and bring it{space}
          <a href="https://teapharmacy.party/drugs">thru the border</a>
          {space}and..."
        </div>
        <br />
        Who decides what is a crisis or a danger for your{space}
        <a href="https://qr.ae/pGQqjw">cone</a>?
        <br />
        <br />
        Fine lower court judges for successful appeals!
        <br />
        <br />
        <a href="https://gmunit.com">1775-1787 and 1814-1870</a>
        <br />
        <br />
        0y/1x efficiency
        <br />
        <br />
        Hysterical unconscious decisions vaults.biz/psych
        <br />
        <br />
        Let them take our oil (for dollar royalty), don???t let them rent seek nor
        take it. Just let them take the oil, don???t lease it, if you are going to
        do it. It???s called{space}
        <a href="https://vaults.biz/royalty">max-royalties</a>, concurrentable
        hours-, if that
        <br />
        <br />
        Translate poignancy Imputed carducci.us/primary
        <br />
        <br />
        Engels: ???The bourgeoisie gives nothing outright, but ... makes a bargain
        with the poor, saying: ???If I spend this much upon benevolent
        institutions, I thereby purchase the right not to be troubled any
        further [...by you...] exposing your misery.??????
        <br />
        AM: "They want uniformity, conformity."
        <br />
        Actually we want discretion and discerning particular appropriations
        <br />
        <br />
        Time to price assets to liabilities - donee-beneficiary will repo these
        books
        {/* https://gist.github.com/NickCarducci/a834dbb9110400d2b118ef2fe7984f09*/}
        <Gist id="a834dbb9110400d2b118ef2fe7984f09" />
        <br />
        <h3>
          bookkeepers-
          <a href="https://worldpopulationreview.com/country-rankings/arable-land-by-country">
            anonymous
          </a>
        </h3>
        trust breaking hyposcrisy and duress/surrendered bonk
        <br />
        <Cable
          style={{ width: "100%" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/nny0rmyh975soqo/Screen%20Shot%202022-03-03%20at%202.00.04%20PM.png?dl=0"
          }
          float={null}
          title="bewildering velocity of currency"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
      </div>
    );
  }
}
