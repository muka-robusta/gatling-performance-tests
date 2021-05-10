var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "153000",
        "ok": "92895",
        "ko": "60105"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "1778"
    },
    "maxResponseTime": {
        "total": "119676",
        "ok": "119466",
        "ko": "119676"
    },
    "meanResponseTime": {
        "total": "46608",
        "ok": "39074",
        "ko": "58253"
    },
    "standardDeviation": {
        "total": "35706",
        "ok": "34768",
        "ko": "33967"
    },
    "percentiles1": {
        "total": "39481",
        "ok": "28300",
        "ko": "56001"
    },
    "percentiles2": {
        "total": "75374",
        "ok": "69324",
        "ko": "91693"
    },
    "percentiles3": {
        "total": "111306",
        "ok": "110263",
        "ko": "111566"
    },
    "percentiles4": {
        "total": "117622",
        "ok": "117624",
        "ko": "117577"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15764,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1393,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 75738,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 60105,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "765",
        "ok": "464.475",
        "ko": "300.525"
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
        "ok": "92895",
        "ko": "60105"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "1778"
    },
    "maxResponseTime": {
        "total": "119676",
        "ok": "119466",
        "ko": "119676"
    },
    "meanResponseTime": {
        "total": "46608",
        "ok": "39074",
        "ko": "58253"
    },
    "standardDeviation": {
        "total": "35706",
        "ok": "34768",
        "ko": "33967"
    },
    "percentiles1": {
        "total": "39468",
        "ok": "28304",
        "ko": "56004"
    },
    "percentiles2": {
        "total": "75309",
        "ok": "69362",
        "ko": "91694"
    },
    "percentiles3": {
        "total": "111305",
        "ok": "110263",
        "ko": "111573"
    },
    "percentiles4": {
        "total": "117621",
        "ok": "117624",
        "ko": "117577"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15764,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1393,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 75738,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 60105,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "765",
        "ok": "464.475",
        "ko": "300.525"
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
