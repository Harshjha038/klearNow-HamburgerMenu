export const shortDateFormatterV2WithoutTz = ({ seconds }) => {
    // console.log("shortDateFormatterV2WithoutTz, Got time as ", seconds)
    const date = new Date(seconds);
    console.log("Got date as ", date)
  
    const utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    console.log("Got date as2 ", utcDate)
  
    return new Date(utcDate);
};

let timeoutPromise = async (ms, promise) => {
    if (!promise) return Promise.resolve(null);
    let timeout = new Promise((resolve, reject) => {
      let id = setTimeout(() => {
        clearTimeout(id);
        resolve(null);
      }, ms);
    });
  
    // Returns a race between our timeout and the passed in promise
    return Promise.race([promise, timeout]);
};

/*
 * Tabs for opened opportunity
 */
export const SELECTED_TABS = {
	NEW: "NEW",
	SUBMITTED: "SUBMITTED",
	ACTIVE: "ACCEPTED",
	REJECTED: "REJECTED",
  
}

export const DRAYAGE_APP = {
  KLEARDRAY_CUSTOMER : "KLEARDRAY_CUSTOMER",
  KLEARDRAY_PARTNER : "KLEARDRAY_PARTNER",
  KLEARDRAY_SALES : "KLEARDRAY_SALES",
}

/*
 * Header for tabs from various apps in OpportunityOpened
 */

export const OpportunityOpenedColumnValues = {
  KLEARDRAY_CUSTOMER : {
    NEW:[
      "approxVolume", "proposedB", "totalPrice"
    ]
  },

  KLEARDRAY_PARTNER : {
    NEW : [
      
      {
        "name" : "approxVolume",
        "classname1" : "sec-col",
        "classname2" : "cont-num"
      },
      {
        "name" : "proposedBid",
        "classname1" : "third-col",
        "classname2" : "price"
      },
      {
        "name" : "proposedBid",
        "classname1" : "fourth-col",
        "classname2" : "price-total"
      },
    ],
    SUBMITTED : [
      {
        "name" : "approxVolume",
        "classname1" : "sec-col",
        "classname2" : "cont-num"
      },
      {
        "name" : "proposedBid",
        "classname1" : "third-col",
        "classname2" : "price"
      },
      {
        "name" : "proposedBid",
        "classname1" : "fourth-col",
        "classname2" : "price-total"
      },
      {
        "name" : "proposedBid",
        "classname1" : "fourth-col",
        "classname2" : "price-total"
      },
      {
        "name" : "proposedBid",
        "classname1" : "fourth-col",
        "classname2" : "price-total"
      }
    ],
    ACTIVE : [],
    REJECTED : []
  },

  KLEARDRAY_SALES : {

  },
}


export const OpportunityOpenedHeaader = {
  KLEARDRAY_CUSTOMER : {
    NEW:[
      {
        "upper":"APPROX VOLUME", 
        "lower" : "Cont.Per Month",
        "classLevel1" : "oppor-header-sec",
        "classLevel2" : "sec-col-header-text",
        "classLevel3" : "lower", 
      },
      {
        "upper": "BID",
        "lower": "Per Container"
      }
    

    ]

  },

  KLEARDRAY_PARTNER : {
    NEW : [
      {
        "upper" : "APPROX VOLUME", 
        "lower" : "Cont.Per Month",
        "classLevel1" : "oppor-header-sec",
        "classLevel2" : "sec-col-header-text",
        "classLevel3" : "lower", 

      },{
        "upper" : "SUGGESTED BID", 
        "lower" : "Per Cont.",
        "classLevel1" : "",
        "classLevel2" : "sec-col-header-text",
        "classLevel3" : "lower", 
      },{
        "upper" : "APPROX TOTAL BUSINESS", 
        "lower" : "",
        "classLevel1" : "",
        "classLevel2" : "sec-col-header-text",
        "classLevel3" : "", 
      }
    ],
    SUBMITTED : [
      {
        "upper" : "APPROX VOLUME", 
        "lower" : "Cont.Per Month",
        "classLevel1" : "oppor-header-sec",
        "classLevel2" : "sec-col-header-text",
        "classLevel3" : "lower", 
      },{
        "upper" : "SUGGESTED BID", 
        "lower" : "Per Cont.",
        "classLevel1" : "",
        "classLevel2" : "sec-col-header-text",
        "classLevel3" : "lower", 
      },{
        "upper" :"APPROX TOTAL BUSINESS",   
        "lower" : "",
        "classLevel1" : "oppor-header-sec",
        "classLevel2" : "third-col-header-text",
        "classLevel3" : "", 
      },
      {
        "upper" : "SUBMITTED BID" ,
        "lower" : "",
        "classLevel1" : "",
        "classLevel2" : "third-col-header-text",
        "classLevel3" : "", 
      },
      {
        "upper" : "TOTAL",
        "lower" : "",
        "classLevel1" : "",
        "classLevel2" : "third-col-header-text",
        "classLevel3" : "", 
      }
    ],
    ACTIVE : [],
    REJECTED : []
  },

  KLEARDRAY_SALES : {

  },
}

export const getTableDataForTab = (app, tab, destinationData) => {
  switch(app) {
    case DRAYAGE_APP.KLEARDRAY_PARTNER:
      switch (tab) {
          case SELECTED_TABS.NEW:
            return [
               {
                  "class1" : "sec-col",
                  "class2" : "cont-num",
                  "value" : destinationData.approxVolume
               },
               {

               }
            ]           
      }
  }
}


export {
    timeoutPromise,
}