var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33000",
        "ok": "28838",
        "ko": "4162"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "100",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "5098",
        "ok": "5098",
        "ko": "4829"
    },
    "meanResponseTime": {
        "total": "1099",
        "ok": "1003",
        "ko": "1763"
    },
    "standardDeviation": {
        "total": "1348",
        "ok": "1328",
        "ko": "1296"
    },
    "percentiles1": {
        "total": "299",
        "ok": "141",
        "ko": "1517"
    },
    "percentiles2": {
        "total": "1872",
        "ok": "1637",
        "ko": "2622"
    },
    "percentiles3": {
        "total": "4069",
        "ok": "4005",
        "ko": "4320"
    },
    "percentiles4": {
        "total": "4645",
        "ok": "4617",
        "ko": "4703"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18610,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1588,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8640,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 4162,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "436.939",
        "ko": "63.061"
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
        "total": "33000",
        "ok": "28838",
        "ko": "4162"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "100",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "5098",
        "ok": "5098",
        "ko": "4829"
    },
    "meanResponseTime": {
        "total": "1099",
        "ok": "1003",
        "ko": "1763"
    },
    "standardDeviation": {
        "total": "1348",
        "ok": "1328",
        "ko": "1296"
    },
    "percentiles1": {
        "total": "300",
        "ok": "141",
        "ko": "1517"
    },
    "percentiles2": {
        "total": "1872",
        "ok": "1637",
        "ko": "2622"
    },
    "percentiles3": {
        "total": "4070",
        "ok": "4005",
        "ko": "4320"
    },
    "percentiles4": {
        "total": "4645",
        "ok": "4617",
        "ko": "4703"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18610,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1588,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8640,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 4162,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "436.939",
        "ko": "63.061"
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
