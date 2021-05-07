var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "153000",
        "ok": "92643",
        "ko": "60357"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "460"
    },
    "maxResponseTime": {
        "total": "66642",
        "ok": "66442",
        "ko": "66642"
    },
    "meanResponseTime": {
        "total": "22130",
        "ok": "17944",
        "ko": "28556"
    },
    "standardDeviation": {
        "total": "18282",
        "ok": "17398",
        "ko": "17733"
    },
    "percentiles1": {
        "total": "18495",
        "ok": "14942",
        "ko": "28119"
    },
    "percentiles2": {
        "total": "33922",
        "ok": "25606",
        "ko": "42818"
    },
    "percentiles3": {
        "total": "59012",
        "ok": "57868",
        "ko": "59575"
    },
    "percentiles4": {
        "total": "63580",
        "ok": "62309",
        "ko": "64555"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19990,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2794,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 69859,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "count": 60357,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "746.341",
        "ok": "451.917",
        "ko": "294.424"
    }
},
contents: {
"req_get-a-kilobyte--d6cad": {
        type: "REQUEST",
        name: "Get a kilobyte of data",
path: "Get a kilobyte of data",
pathFormatted: "req_get-a-kilobyte--d6cad",
stats: {
    "name": "Get a kilobyte of data",
    "numberOfRequests": {
        "total": "153000",
        "ok": "92643",
        "ko": "60357"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "460"
    },
    "maxResponseTime": {
        "total": "66642",
        "ok": "66442",
        "ko": "66642"
    },
    "meanResponseTime": {
        "total": "22130",
        "ok": "17944",
        "ko": "28556"
    },
    "standardDeviation": {
        "total": "18282",
        "ok": "17398",
        "ko": "17733"
    },
    "percentiles1": {
        "total": "18492",
        "ok": "14954",
        "ko": "28123"
    },
    "percentiles2": {
        "total": "33918",
        "ok": "25604",
        "ko": "42818"
    },
    "percentiles3": {
        "total": "59040",
        "ok": "57820",
        "ko": "59575"
    },
    "percentiles4": {
        "total": "63581",
        "ok": "62318",
        "ko": "64555"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19990,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2794,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 69859,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "count": 60357,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "746.341",
        "ok": "451.917",
        "ko": "294.424"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
