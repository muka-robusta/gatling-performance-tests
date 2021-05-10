var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33000",
        "ok": "28692",
        "ko": "4308"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "100",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "4288",
        "ok": "3840",
        "ko": "4288"
    },
    "meanResponseTime": {
        "total": "307",
        "ok": "151",
        "ko": "1344"
    },
    "standardDeviation": {
        "total": "601",
        "ok": "295",
        "ko": "975"
    },
    "percentiles1": {
        "total": "104",
        "ok": "102",
        "ko": "1152"
    },
    "percentiles2": {
        "total": "137",
        "ok": "114",
        "ko": "2023"
    },
    "percentiles3": {
        "total": "1686",
        "ok": "202",
        "ko": "3160"
    },
    "percentiles4": {
        "total": "3124",
        "ok": "1651",
        "ko": "3966"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28232,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 392,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 4308,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "507.692",
        "ok": "441.415",
        "ko": "66.277"
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
        "ok": "28692",
        "ko": "4308"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "100",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "4288",
        "ok": "3840",
        "ko": "4288"
    },
    "meanResponseTime": {
        "total": "307",
        "ok": "151",
        "ko": "1344"
    },
    "standardDeviation": {
        "total": "601",
        "ok": "295",
        "ko": "975"
    },
    "percentiles1": {
        "total": "104",
        "ok": "102",
        "ko": "1152"
    },
    "percentiles2": {
        "total": "137",
        "ok": "114",
        "ko": "2023"
    },
    "percentiles3": {
        "total": "1686",
        "ok": "202",
        "ko": "3160"
    },
    "percentiles4": {
        "total": "3124",
        "ok": "1651",
        "ko": "3966"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28232,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 392,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 4308,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "507.692",
        "ok": "441.415",
        "ko": "66.277"
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
