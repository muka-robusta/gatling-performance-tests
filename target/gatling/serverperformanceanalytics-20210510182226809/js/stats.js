var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "153000",
        "ok": "93620",
        "ko": "59380"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "2240"
    },
    "maxResponseTime": {
        "total": "123349",
        "ok": "123317",
        "ko": "123349"
    },
    "meanResponseTime": {
        "total": "47147",
        "ok": "42042",
        "ko": "55194"
    },
    "standardDeviation": {
        "total": "34651",
        "ok": "33389",
        "ko": "35076"
    },
    "percentiles1": {
        "total": "39140",
        "ok": "33478",
        "ko": "48190"
    },
    "percentiles2": {
        "total": "73451",
        "ok": "64759",
        "ko": "82249"
    },
    "percentiles3": {
        "total": "114908",
        "ok": "111650",
        "ko": "116842"
    },
    "percentiles4": {
        "total": "121246",
        "ok": "120760",
        "ko": "122542"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4997,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 794,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 87829,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 59380,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "742.718",
        "ok": "454.466",
        "ko": "288.252"
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
        "ok": "93620",
        "ko": "59380"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "2240"
    },
    "maxResponseTime": {
        "total": "123349",
        "ok": "123317",
        "ko": "123349"
    },
    "meanResponseTime": {
        "total": "47147",
        "ok": "42042",
        "ko": "55194"
    },
    "standardDeviation": {
        "total": "34651",
        "ok": "33389",
        "ko": "35076"
    },
    "percentiles1": {
        "total": "39153",
        "ok": "33506",
        "ko": "48202"
    },
    "percentiles2": {
        "total": "73460",
        "ok": "64759",
        "ko": "82232"
    },
    "percentiles3": {
        "total": "114913",
        "ok": "111660",
        "ko": "116841"
    },
    "percentiles4": {
        "total": "121246",
        "ok": "120759",
        "ko": "122542"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4997,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 794,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 87829,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 59380,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "742.718",
        "ok": "454.466",
        "ko": "288.252"
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
