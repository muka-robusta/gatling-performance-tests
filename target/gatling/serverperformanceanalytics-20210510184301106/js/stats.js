var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33000",
        "ok": "28835",
        "ko": "4165"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "100",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "5221",
        "ok": "5221",
        "ko": "4919"
    },
    "meanResponseTime": {
        "total": "1109",
        "ok": "995",
        "ko": "1893"
    },
    "standardDeviation": {
        "total": "1323",
        "ok": "1305",
        "ko": "1171"
    },
    "percentiles1": {
        "total": "316",
        "ok": "140",
        "ko": "1884"
    },
    "percentiles2": {
        "total": "1988",
        "ok": "1647",
        "ko": "2834"
    },
    "percentiles3": {
        "total": "3910",
        "ok": "3918",
        "ko": "3741"
    },
    "percentiles4": {
        "total": "4508",
        "ok": "4507",
        "ko": "4548"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18599,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1574,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8662,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 4165,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "436.894",
        "ko": "63.106"
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
        "ok": "28835",
        "ko": "4165"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "100",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "5221",
        "ok": "5221",
        "ko": "4919"
    },
    "meanResponseTime": {
        "total": "1109",
        "ok": "995",
        "ko": "1893"
    },
    "standardDeviation": {
        "total": "1323",
        "ok": "1305",
        "ko": "1171"
    },
    "percentiles1": {
        "total": "316",
        "ok": "144",
        "ko": "1884"
    },
    "percentiles2": {
        "total": "1984",
        "ok": "1645",
        "ko": "2834"
    },
    "percentiles3": {
        "total": "3910",
        "ok": "3918",
        "ko": "3741"
    },
    "percentiles4": {
        "total": "4508",
        "ok": "4507",
        "ko": "4548"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18599,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1574,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8662,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 4165,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "436.894",
        "ko": "63.106"
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
