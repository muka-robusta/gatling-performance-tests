var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33000",
        "ok": "28585",
        "ko": "4415"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "100",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "4393",
        "ok": "4345",
        "ko": "4393"
    },
    "meanResponseTime": {
        "total": "306",
        "ok": "135",
        "ko": "1408"
    },
    "standardDeviation": {
        "total": "644",
        "ok": "274",
        "ko": "1102"
    },
    "percentiles1": {
        "total": "103",
        "ok": "102",
        "ko": "1165"
    },
    "percentiles2": {
        "total": "120",
        "ok": "107",
        "ko": "2109"
    },
    "percentiles3": {
        "total": "1691",
        "ok": "163",
        "ko": "3613"
    },
    "percentiles4": {
        "total": "3561",
        "ok": "756",
        "ko": "4081"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28307,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 106,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 172,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 4415,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "507.692",
        "ok": "439.769",
        "ko": "67.923"
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
        "ok": "28585",
        "ko": "4415"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "100",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "4393",
        "ok": "4345",
        "ko": "4393"
    },
    "meanResponseTime": {
        "total": "306",
        "ok": "135",
        "ko": "1408"
    },
    "standardDeviation": {
        "total": "644",
        "ok": "274",
        "ko": "1102"
    },
    "percentiles1": {
        "total": "103",
        "ok": "102",
        "ko": "1165"
    },
    "percentiles2": {
        "total": "121",
        "ok": "107",
        "ko": "2110"
    },
    "percentiles3": {
        "total": "1691",
        "ok": "163",
        "ko": "3612"
    },
    "percentiles4": {
        "total": "3561",
        "ok": "756",
        "ko": "4081"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28307,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 106,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 172,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 4415,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "507.692",
        "ok": "439.769",
        "ko": "67.923"
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
