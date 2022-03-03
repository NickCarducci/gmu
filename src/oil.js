import React from "react";
const oilprice = [
  [1900, 1.19],
  [1901, 0.96],
  [1902, 0.8],
  [1903, 0.94],
  [1904, 0.86],
  [1905, 0.62],
  [1906, 0.73],
  [1907, 0.72],
  [1908, 0.72],
  [1909, 0.7],
  [1910, 0.61],
  [1911, 0.61],
  [1912, 0.74],
  [1913, 0.95],
  [1914, 0.81],
  [1915, 0.64],
  [1916, 1.1],
  [1917, 1.56],
  [1918, 1.98],
  [1919, 2.01],
  [1920, 3.07],
  [1921, 1.73],
  [1922, 1.61],
  [1923, 1.34],
  [1924, 1.43],
  [1925, 1.68],
  [1926, 1.88],
  [1927, 1.3],
  [1928, 1.17],
  [1929, 1.27],
  [1930, 1.19],
  [1931, 0.65],
  [1932, 0.87],
  [1933, 0.67],
  [1934, 1],
  [1935, 0.97],
  [1936, 1.09],
  [1937, 1.18],
  [1938, 1.13],
  [1939, 1.02],
  [1940, 1.02],
  [1941, 1.14],
  [1942, 1.19],
  [1943, 1.2],
  [1944, 1.21],
  [1945, 1.22],
  [1946, 1.41],
  [1947, 1.93],
  [1948, 2.6],
  [1949, 2.54],
  [1950, 2.51],
  [1951, 2.53],
  [1952, 2.53],
  [1953, 2.68],
  [1954, 2.78],
  [1955, 2.77],
  [1956, 2.79],
  [1957, 3.09],
  [1958, 3.01],
  [1959, 2.9],
  [1960, 2.88],
  [1961, 2.89],
  [1962, 2.9],
  [1963, 2.89],
  [1964, 2.88],
  [1965, 2.86],
  [1966, 2.88],
  [1967, 2.92],
  [1968, 2.94],
  [1969, 3.09],
  [1970, 3.18],
  [1971, 3.39],
  [1972, 3.39],
  [1973, 3.89],
  [1974, 6.87],
  [1975, 7.67],
  [1976, 8.19],
  [1977, 8.57],
  [1978, 9],
  [1979, 12.64],
  [1980, 21.59],
  [1981, 31.77],
  [1982, 28.52],
  [1983, 26.19],
  [1984, 25.88],
  [1985, 24.09],
  [1986, 12.51],
  [1987, 15.4],
  [1988, 12.58],
  [1989, 15.86],
  [1990, 20.03],
  [1991, 16.54],
  [1992, 15.99],
  [1993, 14.25],
  [1994, 13.19],
  [1995, 14.62],
  [1996, 18.46],
  [1997, 17.23],
  [1998, 10.87],
  [1999, 15.56],
  [2000, 26.72],
  [2001, 21.84],
  [2002, 22.51],
  [2003, 27.56],
  [2004, 36.77],
  [2005, 50.28],
  [2006, 59.69],
  [2007, 66.52],
  [2008, 94.04],
  [2009, 56.35],
  [2010, 74.71],
  [2011, 95.73],
  [2012, 94.52],
  [2013, 95.99],
  [2014, 87.39],
  [2015, 44.39],
  [2016, 38.29],
  [2017, 48.05],
  [2018, 61.4],
  [2019, 55.59],
  [2020, 36.86]
  //[2021, 65.9]
];

const oilbarrels = [
  [1901, 69389],
  [1902, 88767],
  [1903, 100461],
  [1904, 117081],
  [1905, 134717],
  [1906, 126494],
  [1907, 166095],
  [1908, 178527],
  [1909, 183171],
  [1910, 209557],
  [1911, 220449],
  [1912, 222935],
  [1913, 248446],
  [1914, 265763],
  [1915, 281104],
  [1916, 300767],
  [1917, 335316],
  [1918, 355928],
  [1919, 378367],
  [1920, 442929],
  [1921, 472183],
  [1922, 557531],
  [1923, 732407],
  [1924, 713940],
  [1925, 620373],
  [1926, 770874],
  [1927, 901129],
  [1928, 901474],
  [1929, 1007323],
  [1930, 898011],
  [1931, 851081],
  [1932, 785159],
  [1933, 905656],
  [1934, 908065],
  [1935, 993942],
  [1936, 1098513],
  [1937, 1277653],
  [1938, 1213254],
  [1939, 1264256],
  [1940, 1503176],
  [1941, 1404182],
  [1942, 1385479],
  [1943, 1505613],
  [1944, 1677904],
  [1945, 1713655],
  [1946, 1733424],
  [1947, 1856987],
  [1948, 2020185],
  [1949, 1841940],
  [1950, 1973574],
  [1951, 2247711],
  [1952, 2289836],
  [1953, 2357082],
  [1954, 2314988],
  [1955, 2484428],
  [1956, 2617283],
  [1957, 2616901],
  [1958, 2448987],
  [1959, 2574590],
  [1960, 2574933],
  [1961, 2621758],
  [1962, 2676189],
  [1963, 2752723],
  [1964, 2786822],
  [1965, 2848514],
  [1966, 3027763],
  [1967, 3215742],
  [1968, 3329042],
  [1969, 3371751],
  [1970, 3517450],
  [1971, 3453914],
  [1972, 3455368],
  [1973, 3360903],
  [1974, 3202585],
  [1975, 3056779],
  [1976, 2976180],
  [1977, 3009265],
  [1978, 3178216],
  [1979, 3121310],
  [1980, 3146365],
  [1981, 3128624],
  [1982, 3156715],
  [1983, 3170999],
  [1984, 3249696],
  [1985, 3274553],
  [1986, 3168252],
  [1987, 3047378],
  [1988, 2979123],
  [1989, 2778773],
  [1990, 2684687],
  [1991, 2707039],
  [1992, 2624632],
  [1993, 2499033],
  [1994, 2431476],
  [1995, 2394268],
  [1996, 2366017],
  [1997, 2354831],
  [1998, 2281919],
  [1999, 2146732],
  [2000, 2130707],
  [2001, 2117511],
  [2002, 2096588],
  [2003, 2061995],
  [2004, 1991394],
  [2005, 1892095],
  [2006, 1856340],
  [2007, 1851974],
  [2008, 1829880],
  [2009, 1955194],
  [2010, 2001805],
  [2011, 2071085],
  [2012, 2387461],
  [2013, 2736608],
  [2014, 3209106],
  [2015, 3445992],
  [2016, 3237056],
  [2017, 3415257],
  [2018, 3993288],
  [2019, 4485653],
  [2020, 4129563]
];

class OIL extends React.Component {
  constructor(props) {
    super(props);

    //let testing = [];
    let noData = [];
    let date = [];
    let barrels = [];
    let prices = [];
    oilbarrels.map((year, i) => {
      date.push(year[0]);
      barrels.push(year[1]);
      return noData.push([year[0], 0]);
    });
    oilprice.map((year, i) => {
      date.push(year[0]);
      prices.push(year[1]);
      return noData.push([year[0], 0]);
    });
    /*let dataDataData = {};
    Object.keys(dataData).forEach((label, i) => {
      const yearData = Object.values(label)[i];
      if (!dataDataData[yearData[0]]) dataDataData[yearData[0]] = 0;
      dataDataData[yearData[0]] = dataDataData[yearData[0]] + yearData[1];
    });*/
    var lowPrices = Math.min(...prices);
    var lowBarrels = Math.min(...barrels);
    var lowDate = Math.min(...date);
    var highPrices = Math.max(...prices);
    var highBarrels = Math.max(...barrels);
    var highDate = Math.max(...date);
    //console.log(dataData);
    var state = {
      highPrices,
      highBarrels,
      oilbarrels,
      oilprice,
      noData,
      yAxisPrice: highPrices - lowPrices,
      xAxisPrice: highDate - lowDate,
      yAxisBarrels: highBarrels - lowBarrels,
      xAxisBarrels: highDate - lowDate,
      lowBarrels,
      lowPrices,
      highDate,
      lowDate
    };
    this.state = state;
  }
  render() {
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };

    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };
    //console.log(this.state.oilprice);
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      0
    ]);
    console.log(this.state.oilprice);
    const oilprice = this.state.oilprice.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxisPrice) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowPrices) / this.state.yAxisPrice) * 150
    ]);
    const oilbarrels = this.state.oilbarrels.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxisBarrels) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBarrels) / this.state.yAxisBarrels) * 150
    ]);
    return (
      <div
        style={{
          width: "100%",
          minHeight: "230px",
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            width: "calc(100% - 16px)",
            padding: "4px 8px",
            top: "0px",
            display: "flex",
            position: "absolute",
            left: "0px",
            flexDirection: "column",
            zIndex: "1",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          <div
            style={{
              padding: "4px 8px",
              position: "absolute",
              right: "0px"
            }}
          >
            OIL: ${this.state.lowPrices}-{this.state.highPrices}
          </div>
          {shortNumber(this.state.lowBarrels)}-
          {shortNumber(this.state.highBarrels)} barrels
          <div
            style={{
              height: "min-content",
              display: "flex",
              position: "relative",
              right: "0px"
            }}
          >
            {this.state.lowDate}
            &nbsp;-&nbsp;
            {this.state.highDate}
          </div>
        </div>
        <div style={{ transform: "translate(0px,220px)" }}>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={4}
                    height={4}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={0}
                    key={i}
                  />
                )
            )}
            {oilprice.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="red"
                    fill="red"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {oilbarrels.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="yellow"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
        {/*<div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            width: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          ></div>
          </div>*/}
      </div>
    );
  }
}

export default OIL;
