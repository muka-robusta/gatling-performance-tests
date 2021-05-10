var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "153000",
        "ok": "92340",
        "ko": "60660"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "1581"
    },
    "maxResponseTime": {
        "total": "121255",
        "ok": "120981",
        "ko": "121255"
    },
    "meanResponseTime": {
        "total": "45293",
        "ok": "37867",
        "ko": "56598"
    },
    "standardDeviation": {
        "total": "36399",
        "ok": "35754",
        "ko": "34410"
    },
    "percentiles1": {
        "total": "37263",
        "ok": "25519",
        "ko": "52873"
    },
    "percentiles2": {
        "total": "71086",
        "ok": "68642",
        "ko": "87457"
    },
    "percentiles3": {
        "total": "115808",
        "ok": "115742",
        "ko": "115843"
    },
    "percentiles4": {
        "total": "120146",
        "ok": "119581",
        "ko": "120379"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16458,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1524,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74358,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 60660,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "768.844",
        "ok": "464.02",
        "ko": "304.824"
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
        "ok": "92340",
        "ko": "60660"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "1581"
    },
    "maxResponseTime": {
        "total": "121255",
        "ok": "120981",
        "ko": "121255"
    },
    "meanResponseTime": {
        "total": "45293",
        "ok": "37867",
        "ko": "56598"
    },
    "standardDeviation": {
        "total": "36399",
        "ok": "35754",
        "ko": "34410"
    },
    "percentiles1": {
        "total": "37230",
        "ok": "25486",
        "ko": "52873"
    },
    "percentiles2": {
        "total": "71093",
        "ok": "68644",
        "ko": "87454"
    },
    "percentiles3": {
        "total": "115813",
        "ok": "115742",
        "ko": "115845"
    },
    "percentiles4": {
        "total": "120149",
        "ok": "119581",
        "ko": "120379"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16458,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1524,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74358,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 60660,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "768.844",
        "ok": "464.02",
        "ko": "304.824"
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
