const tabFilters = ["SEARCH_TAB_ALL", "SEARCH_TAB_SHIPMENTS", "SEARCH_TAB_CONTAINERS", "SEARCH_TAB_COMPLETED_SHIPMENT", "SEARCH_TAB_ACTIVE_SHIPMENTS", "SEARCH_TAB_ACTIVE_CONTAINERS", "SEARCH_TAB_COMPLETED_CONTAINERS"];

const shipmentTabFilters = ["SEARCH_TAB_SHIPMENTS", "SEARCH_TAB_ACTIVE_SHIPMENTS", "SEARCH_TAB_COMPLETED_SHIPMENT"];
const containerTabFilters = ["SEARCH_TAB_CONTAINERS", "SEARCH_TAB_ACTIVE_CONTAINERS", "SEARCH_TAB_COMPLETED_CONTAINERS"];

const searchTabs = {
  all: "SEARCH_TAB_ALL",
  containers: "SEARCH_TAB_CONTAINERS",
  shipments: "SEARCH_TAB_SHIPMENTS",
  completedShipments: "SEARCH_TAB_COMPLETED_SHIPMENT",
  completedContainers: "SEARCH_TAB_COMPLETED_CONTAINERS",
  activeShipments: "SEARCH_TAB_ACTIVE_SHIPMENTS",
  activeContainers: "SEARCH_TAB_ACTIVE_CONTAINERS",
};

const textFiltersLabelMapper = {
  SEARCH_FILTERS_SHIPMENT_ID: "Shipment ID",
  SEARCH_FILTERS_PRODUCT_DESC: "Product Description",
  SEARCH_FILTERS_BOL_NO: "Bill of Lading",
  SEARCH_FILTERS_PURCHASE_ORDER: "Purchase Order Number",
  SEARCH_FILTERS_VESSEL: "Vessel",
  SEARCH_FILTERS_FLIGHT_NUMBER:"Flight Number",
  SEARCH_FILTERS_CONTAINER_NO: "Container ID",
  SEARCH_FILTERS_KXEMAIL: "Importer",
  SEARCH_FILTERS_TRUCK_NUMBER :"Truck Number",
  SEARCH_FILTERS_BORDER_CROSSING:"Border Crossing"
};

const cardFiltersLabelMapper = {
  SEARCH_FILTERS_SHIPMENT_ID: "Ship ID",
  SEARCH_FILTERS_PRODUCT_DESC: "Prod Desc",
  SEARCH_FILTERS_BOL_NO: "BOL",
  SEARCH_FILTERS_PURCHASE_ORDER: "PO",
  SEARCH_FILTERS_VESSEL: "Vessel",
  SEARCH_FILTERS_FLIGHT_NUMBER:"Flight Number",
  SEARCH_FILTERS_TRUCK_NUMBER :"Truck Number",
  SEARCH_FILTERS_KEYWORD: "Key Word",
  SEARCH_FILTERS_START_DATE_OF_UNLADING: "ETA",
  SEARCH_FILTERS_CONTAINER_NO: "CONT",
  SEARCH_FILTERS_KXEMAIL: "Importer",
  SEARCH_FILTERS_CONTAINER_EVENT: "Container",
  SEARCH_FILTERS_BORDER_CROSSING:"Border Crossing"
};

const inputFilters = ["SEARCH_FILTERS_SHIPMENT_ID", "SEARCH_FILTERS_CONTAINER_NO", "SEARCH_FILTERS_PRODUCT_DESC", "SEARCH_FILTERS_BOL_NO", "SEARCH_FILTERS_PURCHASE_ORDER", "SEARCH_FILTERS_VESSEL","SEARCH_FILTERS_FLIGHT_NUMBER"];

const textFilters = ["SEARCH_FILTERS_SHIPMENT_ID", "SEARCH_FILTERS_PRODUCT_DESC", "SEARCH_FILTERS_PURCHASE_ORDER", "SEARCH_FILTERS_VESSEL","SEARCH_FILTERS_FLIGHT_NUMBER","SEARCH_FILTERS_TRUCK_NUMBER",  "SEARCH_FILTERS_BORDER_CROSSING"];

const allFilters = {
  SEARCH_FILTERS_KEYWORD: null,
  SEARCH_FILTERS_CONTAINER_NO: null,
  SEARCH_FILTERS_SHIPMENT_ID: null,
  SEARCH_FILTERS_PRODUCT_DESC: null,
  SEARCH_FILTERS_BOL_NO: null,
  SEARCH_FILTERS_PURCHASE_ORDER: null,
  SEARCH_FILTERS_VESSEL: null,
  SEARCH_FILTERS_FLIGHT_NUMBER: null,
  SEARCH_FILTERS_TRUCK_NUMBER :null,
  SEARCH_FILTERS_BORDER_CROSSING:null,
  SEARCH_FILTERS_START_DATE_OF_UNLADING: null,
  SEARCH_FILTERS_END_DATE_OF_UNLADING: null,
  SEARCH_FILTERS_KXEMAIL: [],
};

const demurrageChargeTypes = {
  noCharges: "NO_CHARGES",
  hasCharges: "HAS_CHARGES",
  possibleCharges: "POSSIBLE_CHARGES",
};

const searchDirections = {
  descending: "DESC",
  ascending: "ASC",
};

const ESCR_Status = {
  accepted: "ACCEPTED",
  pending: "PENDING FILING",
  hold: "FILING HOLD",
};

const UKC88_Status = {
  accepted: "ACCEPTED",
  released: "RELEASED",
  pending: "PENDING FILING",
  amendment: "PENDING AMENDMENT",
};

const markerTypes = {
  vessel: "vessel",
  port: "port",
  airport: "airport",
  truck: "truck",
  container: "container",
  plane: "plane",
  watermark : "watermark",
  crossBorderPort:"crossBorderPort",
  truckWareHousePort:"truckWareHousePort",
  rail : "rail"

};

const shipmentPhases = {
  lading: "SHIPMENT_PHASE_FIRST_MILE",
  transit: "SHIPMENT_PHASE_TRANSIT_WATER",
  unlading: "SHIPMENT_PHASE_ON_DOCK",
  completed: "SHIPMENT_PHASE_COMPLETED",
};

const modals = {
  myFreightForwarders: "myFreightForwarders",
  myCustomers: "myCustomers",
  myBrokers: "myBrokers",
  myPersonalProfile: "myPersonalProfile",
  drayageCompanyProfile: "drayageCompanyProfile",
  myCompany: "myCompany",
  businessSize: "businessSize",
  paymentInformation: "paymentInformation",
  paymentHistory: "paymentHistory",
  customsStatements: "customsStatements",
  shippingInformation: "shippingInformation",
  shippingDestinations: "shippingDestinations",
  manufacturers: "manufacturers",
  bondInformation: "bondInformation",
  communications: "communications",
  manageUsers: "manageUsers",
  myInvoices: "myInvoices",
  deliveryOrder: "deliveryOrder",
  docs: "docs",
  serviceArea: "serviceArea",
  accessorialCharges: "accessorialCharges",
  mytruckers: "mytruckers"
};

const userTypes = {
  freightForwarder: "FREIGHT_FORWARDER",
  superFF: "SUPER_FREIGHT_FORWARDER",
  customer: "CUSTOMER_USER",
  apiCaller:"API_CALLER_USER"
};

const actorTabs = {
  myActors: "myActors",
  pendingApproval: "pendingApproval",
  addActor: "addActor",
  responseReceived: "responseReceived",
  invited: "invited",
};

const channelErrorMessages = {
  "Broker already linked to Freight Forwarder": "User is already a connection.",
  "Error : Email not allowed": "Please provide a valid email address.",
  "Broker already added": "User is already a connection.",
  "Broker already linked": "User is already a connection.",
  "Customer already exists,pending request": "Connection request already pending for this user.",
  "Wrong type of user trying to be added": "Email provided is registered as a different role.",
  "FF already added": "User is already a connection.",
  "Broker already linked to Customer": "User is already a connection.",
  "FF already linked to Customer": "User is already a connection.",
  "Freight Forwarder already linked": "User is already a connection.",
  "Freight Forwarder already exists,pending approval": "Connection request already pending for this user.",
  "Freight Forwarder already exists,pending request": "Connection request already pending for this user.",
  "Broker already exists,pending approval": "Connection request already pending for this user.",
};

const scacCodes = {
  "11DX": "11DX",
  "22AA": "22AA",
  ABFS: "ABFS",
  ACLU: "ACLU",
  ACSU: "ACSU",
  AKMR: "AKMR",
  ALLV: "ALLV",
  ANNU: "ANNU",
  ANRM: "ANRM",
  ANTC: "ANTC",
  APLU: "APLU",
  ARFW: "ARFW",
  ARKU: "ARKU",
  AROF: "AROF",
  AYAF: "AYAF",
  BAXG: "BAXG",
  BCLU: "BCLU",
  BKFB: "BKFB",
  BLOJ: "BLOJ",
  BNAF: "BNAF",
  BTEY: "BTEY",
  CBNP: "CBNP",
  CDNK: "CDNK",
  CEGL: "CEGL",
  CENF: "CENF",
  CGSQ: "CGSQ",
  CHIW: "CHIW",
  CHKA: "CHKA",
  CHNJ: "CHNJ",
  CHRP: "CHRP",
  CHVW: "CHVW",
  CJRF: "CJRF",
  CJRF: "CJRF",
  CJRQ: "CJRQ",
  CLIB: "CLIB",
  "CMCU/CAMN": "CMCU/CAMN",
  CMDU: "CMDU",
  CNIU: "CNIU",
  CNPC: "CNPC",
  COSU: "COSU",
  COTO: "COTO",
  CPGP: "CPGP",
  CPJQ: "CPJQ",
  CSXT: "CSXT",
  CTII: "CTII",
  CWAS: "CWAS",
  CWCE: "CWCE",
  CWIM: "CWIM",
  CWSE: "CWSE",
  CWWE: "CWWE",
  DAAE: "DAAE",
  DBGB: "DBGB",
  DMLI: "DMLI",
  DOLQ: "DOLQ",
  DOLR: "DOLR",
  DYLT: "DYLT",
  EGLV: "EGLV",
  "EIMU/EIMW": "EIMU/EIMW",
  ELOI: "ELOI",
  EQLI: "EQLI",
  ESPU: "ESPU",
  EUKO: "EUKO",
  EWCF: "EWCF",
  EXLA: "EXLA",
  EXPD: "EXPD",
  FDCC: "FDCC",
  FDE: "FDE",
  "FDEG/FDXG": "FDEG/FDXG",
  FESO: "FESO",
  FICS: "FICS",
  FLJF: "FLJF",
  FTNA: "FTNA",
  FWFG: "FWFG",
  FXFE: "FXFE",
  FXFW: "FXFW",
  FXNL: "FXNL",
  GBEA: "GBEA",
  GBXI: "GBXI",
  GESC: "GESC",
  GFAL: "GFAL",
  GMLS: "GMLS",
  GPTC: "GPTC",
  GRIU: "GRIU",
  GSLU: "GSLU",
  HAEI: "HAEI",
  HDMU: "HDMU",
  HJBT: "HJBT",
  HLCU: "HLCU",
  HOYO: "HOYO",
  HRCF: "HRCF",
  HRZU: "HRZU",
  HUAU: "HUAU",
  HUBT: "HUBT",
  HYDU: "HYDU",
  IDMC: "IDMC",
  IEXA: "IEXA",
  IILU: "IILU",
  INML: "INML",
  INOC: "INOC",
  ITFC: "ITFC",
  KAEJ: "KAEJ",
  KHNN: "KHNN",
  KKLU: "KKLU",
  KMTU: "KMTU",
  KNIG: "KNIG",
  KOSL: "KOSL",
  LDYN: "LDYN",
  LDYQ: "LDYQ",
  LGLT: "LGLT",
  LMCU: "LMCU",
  MAEU: "MAEU",
  MATS: "MATS",
  MCCQ: "MCCQ",
  MCPU: "MCPU",
  MFTU: "MFTU",
  MGMC: "MGMC",
  MISC: "MISC",
  MRUB: "MRUB",
  MSCU: "MSCU",
  MTEN: "MTEN",
  NAFT: "NAFT",
  NAVI: "NAVI",
  NIDU: "NIDU",
  NODA: "NODA",
  NOSU: "NOSU",
  NSAU: "NSAU",
  NSLU: "NSLU",
  NXPL: "NXPL",
  "NYKU/NYKS": "NYKU/NYKS",
  ODFL: "ODFL",
  ONEY: "ONEY",
  OOLU: "OOLU",
  PAMT: "PAMT",
  PAYL: "PAYL",
  PCIU: "PCIU",
  PDME: "PDME",
  PENS: "PENS",
  PFLP: "PFLP",
  PLGQ: "PLGQ",
  PLLU: "PLLU",
  PMOL: "PMOL",
  PNEP: "PNEP",
  PRIJ: "PRIJ",
  PRML: "PRML",
  PSHI: "PSHI",
  PSQL: "PSQL",
  PYLE: "PYLE",
  RCKI: "RCKI",
  RDSS: "RDSS",
  RGLN: "RGLN",
  ROWL: "ROWL",
  RUSS: "RUSS",
  RXLI: "RXLI",
  RYOM: "RYOM",
  SAFM: "SAFM",
  SAIA: "SAIA",
  SCIU: "SCIU",
  SCYE: "SCYE",
  SDYA: "SDYA",
  SEFN: "SEFN",
  SEJJ: "SEJJ",
  SKII: "SKII",
  SKLU: "SKLU",
  SLAQ: "SLAQ",
  SMLU: "SMLU",
  "SNCY/SNLU/SCNN": "SNCY/SNLU/SCNN",
  STVV: "STVV",
  SUDU: "SUDU",
  SWFT: "SWFT",
  TCKM: "TCKM",
  THZS: "THZS",
  TOHO: "TOHO",
  TOTE: "TOTE",
  TPNW: "TPNW",
  TRKU: "TRKU",
  UALC: "UALC",
  UBCU: "UBCU",
  UDRY: "UDRY",
  UPGF: "UPGF",
  "UPSS/UPSZ/UPSN/UPSC": "UPSS/UPSZ/UPSN/UPSC",
  UQEP: "UQEP",
  "USAU/USAX": "USAU/USAX",
  USIT: "USIT",
  USLU: "USLU",
  USNW: "USNW",
  USPS: "USPS",
  USXI: "USXI",
  UYSN: "UYSN",
  VCTS: "VCTS",
  VLOQ: "VLOQ",
  VSRD: "VSRD",
  WDLS: "WDLS",
  WECU: "WECU",
  WLWH: "WLWH",
  WWSU: "WWSU",
  "XPOC/XPOL": "XPOC/XPOL",
  XUI: "XUI",
  YMLU: "YMLU",
  ZIMU: "ZIMU",
};

const defaultContainerStates = {
  UNLOAD_FROM_VESSEL: {
    color: "GRAY_MILESTONE",
    nodeId: "UNLOAD_FROM_VESSEL",
  },
  READY_FOR_PICKUP: {
    color: "GRAY_MILESTONE",
    nodeId: "READY_FOR_PICKUP",
  },
  GATE_OUT: {
    color: "GRAY_MILESTONE",
    nodeId: "GATE_OUT",
  },
  GATE_IN: {
    color: "GRAY_MILESTONE",
    nodeId: "GATE_IN",
  },
};

const firstMileJobStates = {
  STATE_ISF_READY: "STATE_ISF_READY",
  STATE_ISF_FILED: "STATE_ISF_FILED",
  STATE_ISF_ACCEPTED: "STATE_ISF_ACCEPTED",
  STATE_ISF_ACCEPTED_WITH_WARNINGS: "STATE_ISF_ACCEPTED_WITH_WARNINGS",
  STATE_KX_ISF_FEE_DONE: "STATE_KX_ISF_FEE_DONE",
  STATE_ISF_REJECTED: "STATE_ISF_REJECTED",
};

const waterTransitJobStates = {
  STATE_SHIPMENT_VESSEL_DEPARTED: "STATE_SHIPMENT_VESSEL_DEPARTED",
  STATE_SHIPMENT_VESSEL_ARRIVAL_NOTICE: "STATE_SHIPMENT_VESSEL_ARRIVAL_NOTICE",
  STATE_CARGO_RELEASE_READY: "STATE_CARGO_RELEASE_READY",
  STATE_CARGO_RELEASE_FILED: "STATE_CARGO_RELEASE_FILED",
  STATE_CARGO_RELEASE_ACCEPTED: "STATE_CARGO_RELEASE_ACCEPTED",
  STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS: "STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS",
  STATE_KX_ES_FEE_DONE: "STATE_KX_ES_FEE_DONE",
  STATE_CARGO_RELEASE_REJECTED: "STATE_CARGO_RELEASE_REJECTED",
  STATE_ENTRY_SUMMARY_READY: "STATE_ENTRY_SUMMARY_READY",
  STATE_ENTRY_SUMMARY_FILED: "STATE_ENTRY_SUMMARY_FILED",
  STATE_ENTRY_SUMMARY_ACCEPTED: "STATE_ENTRY_SUMMARY_ACCEPTED",
  STATE_ENTRY_SUMMARY_ACCEPTED_WITH_WARNINGS: "STATE_ENTRY_SUMMARY_ACCEPTED_WITH_WARNINGS",
  STATE_ENTRY_SUMMARY_REJECTED: "STATE_ENTRY_SUMMARY_REJECTED",
  STATE_ASSIGNED_TO_BROKER: "STATE_ASSIGNED_TO_BROKER",
  STATE_CBP_FEE_DONE: "STATE_CBP_FEE_DONE",
  STATE_OTHER_CBP_FEE_DONE: "STATE_OTHER_CBP_FEE_DONE",
  STATE_BROKER_FEE_DONE: "STATE_BROKER_FEE_DONE",
  STATE_ARRIVAL_NOTICE_RECEIVED: "STATE_ARRIVAL_NOTICE_RECEIVED",
  STATE_ENTRY_SUMMARY_ENTRY_NUMBER_NOT_GENERATED: "STATE_ENTRY_SUMMARY_ENTRY_NUMBER_NOT_GENERATED",
  STATE_SHIPMENT_DELIVERED: "STATE_SHIPMENT_DELIVERED",
};

const shipmentPhaseTruckerJobStates = {
  STATE_SHIPMENT_VESSEL_ARRIVED: "STATE_SHIPMENT_VESSEL_ARRIVED",
  STATE_SHIPMENT_UNDER_INSPECTION: "STATE_SHIPMENT_UNDER_INSPECTION",
  STATE_SHIPMENT_READY_FOR_PICKUP: "STATE_SHIPMENT_READY_FOR_PICKUP",
  STATE_SHIPMENT_TRUCKER_PHASE: "STATE_SHIPMENT_TRUCKER_PHASE",
};


const opsProcessEvents = {
  // SHIPMENT_OPS_PROCESS
  STATE_OPS_NONE: "NEW",
  STATE_OPS_NEW: "NEW",
  STATE_OPS_SKIPPED: "OPS SKIPPED",
  STATE_OPS_ASSIGNED: "OPS ASSIGNED",
  STATE_OPS_IN_PROCESS: "OPS IN PROGRESS",
  STATE_OPS_STUCK: "OPS STUCK",
  STATE_OPS_READY: "OPS READY",
  STATE_OPS_DONE: "OPS DONE",

  // SHIPMENT_US_ISF_PROCESS
  STATE_ISF_NONE: "ISF NEW",
  STATE_ISF_NEW: "ISF NEW",
  STATE_ISF_ASSIGNED: "ISF ASSIGNED",
  STATE_ISF_IN_PROCESS: "ISF IN PROCESS",
  STATE_ISF_STUCK: "ISF STUCK",
  STATE_ISF_READY: "ISF READY",
  STATE_ISF_FILED: "ISF FILED",
  STATE_ISF_SKIPPED: "ISF SKIPPED",
  STATE_ISF_ACCEPTED: "ISF ACCEPTED",
  STATE_ISF_ACCEPTED_WITH_WARNINGS: "ISF ACCEPTED WITH WARNING",
  STATE_ISF_ACCEPTED_NO_BILL_MATCH: "ISF ACCEPTED NO BILL MATCH",
  STATE_ISF_ACCEPTED_BILL_MATCH: "ISF ACCEPTED BILL MATCH",
  STATE_ISF_REJECTED: "ISF REJECTED",
  STATE_ISF_RETRACT_FILED: "ISF RETRACT FILED",
  STATE_ISF_RETRACT_ACCEPTED: "ISF RETRACT ACCEPTED",
  STATE_ISF_RETRACT_REJECTED: "ISF RETRACT REJECTED",
  STATE_ISF_REPLACE_FILED: "ISF REPLACE FILED",
  STATE_ISF_REPLACE_ACCEPTED: "ISF REPLACE ACCEPTED",
  STATE_ISF_REPLACE_REJECTED: "ISF REPLACE REJECTED",

  // SHIPMENT_BROKER_PROCESS
  STATE_BROKER_NONE: "NO BROKER",
  STATE_BROKER_READY: "BROKER READY",
  STATE_BROKER_IN_QUEUE: "BROKER PENDING",
  STATE_ASSIGNED_TO_BROKER: "BROKER PROCESSING",

  // SHIPMENT_US_CR_PROCESS / CA
  STATE_CARGO_RELEASE_NONE: "CR NEW",
  STATE_CARGO_RELEASE_NEW: "CR NEW",
  STATE_CARGO_RELEASE_ASSIGNED: "CR ASSIGNED",
  STATE_CARGO_RELEASE_IN_PROCESS: "CR IN PROGRESS",
  STATE_CARGO_RELEASE_STUCK: "CR STUCK",
  STATE_CARGO_RELEASE_READY: "CR READY",
  STATE_CARGO_RELEASE_FILED: "CR FILED",
  STATE_CARGO_RELEASE_ACCEPTED: "CR ACCEPTED",
  STATE_CARGO_RELEASE_ACCEPTED_NO_BILL_MATCH: "CR ACCEPTED NO BILL MATCH",
  STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS: "CR ACCEPTED WITH WARNINGS",
  STATE_CARGO_RELEASE_REJECTED: "CR REJECTED",
  STATE_CARGO_RELEASE_ACKNOWLEDGED: "CR ACKNOWLEDGED",
  STATE_CARGO_RELEASE_RETRACT_FILED: "CR RETRACT FILED",
  STATE_CARGO_RELEASE_RETRACT_ACCEPTED: "CR RETRACT ACCEPTED",
  STATE_CARGO_RELEASE_RETRACT_REJECTED: "CR RETRACT REJECTED",
  STATE_CARGO_RELEASE_REPLACE_FILED: "CR REPLACE FILED",
  STATE_CARGO_RELEASE_REPLACE_ACCEPTED: "CR REPLACE ACCEPTED",
  STATE_CARGO_RELEASE_REPLACE_REJECTED: "CR REPLACE REJECTED",
  STATE_CARGO_RELEASE_CANCEL_FILED: "CR CANCEL FILED",
  STATE_CARGO_RELEASE_CANCEL_ACCEPTED: "CR CANCEL ACCEPTED",
  STATE_CARGO_RELEASE_CANCEL_REJECTED: "CR CANCEL REJECTED",
  STATE_CARGO_RELEASE_CHANGE_FILED: "CR CHANGE FILED",
  STATE_CARGO_RELEASE_CHANGE_ACCEPTED: "CR CHANGE ACCEPTED",
  STATE_CARGO_RELEASE_CHANGE_REJECTED: "CR CHANGE REJECTED",
  STATE_CARGO_RELEASE_AMEND_FILED: "CR AMEND FILED",
  STATE_CARGO_RELEASE_AMEND_ACCEPTED: "CR AMEND ACCEPTED",
  STATE_CARGO_RELEASE_AMEND_REJECTED: "CR AMEND REJECTED",

  // SHIPMENT_US_ES_PROCESS / CA
  STATE_ENTRY_SUMMARY_NONE: "ES NEW",
  STATE_ENTRY_SUMMARY_NEW: "ES NEW",
  STATE_ENTRY_SUMMARY_IN_PROCESS: "ES IN PROCESS",
  STATE_ENTRY_SUMMARY_STUCK: "ES STUCK",
  STATE_ENTRY_SUMMARY_READY: "ES READY",
  STATE_ENTRY_SUMMARY_FILED: "ES FILED",
  STATE_ENTRY_SUMMARY_ACCEPTED: "ES ACCEPTED",
  STATE_ENTRY_SUMMARY_ACCEPTED_NO_BILL_MATCH: "ES ACCEPTED NO BILL MATCH",
  STATE_ENTRY_SUMMARY_REJECTED: "ES REJECTED",
  STATE_ENTRY_SUMMARY_RETRACT_FILED: "ES RETRACT FILED",
  STATE_ENTRY_SUMMARY_RETRACT_ACCEPTED: "ES RETRACT ACCEPTED",
  STATE_ENTRY_SUMMARY_RETRACT_REJECTED: "ES RETRACT REJECTED",
  STATE_ENTRY_SUMMARY_REPLACE_FILED: "ES REPLACE FILED",
  STATE_ENTRY_SUMMARY_REPLACE_ACCEPTED: "ES REPLACE ACCEPTED",
  STATE_ENTRY_SUMMARY_REPLACE_REJECTED: "ES REPLACE REJECTED",

  // EXPIDITOR_OPS_PROCESS
  STATE_OPERATOR_1_ASSIGNED: "STATE_OPERATOR_1_ASSIGNED",
  STATE_OPERATOR_2_ASSIGNED: "STATE_OPERATOR_2_ASSIGNED",
  STATE_OPERATOR_1_IN_PROCESS: "STATE_OPERATOR_1_IN_PROCESS",
  STATE_OPERATOR_2_IN_PROCESS: "STATE_OPERATOR_2_IN_PROCESS",
  STATE_OPERATOR_1_STUCK: "STATE_OPERATOR_1_STUCK",
  STATE_OPERATOR_2_STUCK: "STATE_OPERATOR_2_STUCK",
  STATE_OPERATOR_1_READY: "STATE_OPERATOR_1_READY",
  STATE_OPERATOR_2_READY: "STATE_OPERATOR_2_READY",

  // SHIPMENT_SUPERVISOR_PROCESS
  STATE_SUPERVISOR_NONE: "SUPERVISOR NEW",
  STATE_SUPERVISOR_IN_PROCESS: "SUPERVISOR IN PROCESS",
  STATE_SUPERVISOR_DONE: "SUPERVISOR COMPLETE",

  // LATE FINDS - Jake added, verify w/ sangeeta
  STATE_BROKER_ASSIGNED: "BROKER ASSIGNED",
  STATE_ENTRY_ACCOUNTING_FILED: "ENTRY ACCOUNT FILED",
  STATE_SKIP_OPS: "OPS SKIPPED",
  STATE_SAVE_DONE: "SAVE DONE",
  STATE_ARRIVAL_NOTICE_RECEIVED: "ARRIVAL NOTICE RECEIVED",
  STATE_ENTRY_ACCOUNTING_IN_PROCESS: "ENTRY ACCOUNTING IN PROCESS",
  STATE_ENTRY_ACCOUNTING_FILED: "ENTRY ACCOUNTING FILED",
  STATE_ENTRY_ACCOUNTING_REJECTED: "ENTRY ACCOUNTING REJECTED",
  STATE_ENTRY_ACCOUNTING_ACCEPTED: "ENTRY ACCOUNTING ACCEPTED",
  STATE_ADD_DOCUMENT: "DOC STITCHED",
  STATE_ADD_DOCUMENT_DONE: "DOC DATA ADDED",
  STATE_DO_NEW: "DO NEW",
  STATE_DO_IN_PROCESS: "DO IN PROCESS",
  STATE_DO_DONE: "DO DONE",
  STATE_DO_APPROVED: "DO APPROVED",
  STATE_DO_PUBLISHED: "DO PUBLISHED",
  STATE_DO_GENERATE_PDF: "DO PDF GENERATED",
  STATE_SAVE_DONE: "SAVE DONE",
  STATE_CHECKPOINT_FAILED: "BROKER ASSIGNMENT FAILED",
  PAYMENT_BROKER_FEE_ES_ACCEPTED: "BROKER PAYMENT",

  //PREPROCESSING EVENTS
  STATE_PREP_MERGED: "MERGED",
  STATE_PREP_SIMHASH_MATCHED: "DOC MATCH",
  STATE_PREP_IN_PROCESS: "IN PROCESS",
  STATE_PREP_NEW: "NEW",
  STATE_PREP_MANUAL_MATCH: "MANUAL MATCH",
  STATE_PREP_NEW_CREATED: "NEW CREATED",

  // DO EVENTS
  STATE_DO_PUBLISHED: "PUBLISHED",
  STATE_DO_DONE: "DONE",
  STATE_DO_IN_PROCESS: "IN PROCESS",
  STATE_DO_GENERATE_PDF: "PDF GENERATED",
  STATE_DO_NEW: "NEW",
};

export { UKC88_Status, searchTabs, firstMileJobStates, waterTransitJobStates, shipmentPhaseTruckerJobStates, shipmentTabFilters, containerTabFilters, demurrageChargeTypes, shipmentPhases, ESCR_Status, inputFilters, tabFilters, textFiltersLabelMapper, textFilters, allFilters, cardFiltersLabelMapper, searchDirections, markerTypes, modals, userTypes, actorTabs, scacCodes, channelErrorMessages, defaultContainerStates, opsProcessEvents };
