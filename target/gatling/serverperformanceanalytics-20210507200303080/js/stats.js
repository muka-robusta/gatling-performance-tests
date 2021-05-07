var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180000",
        "ok": "112928",
        "ko": "67072"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "1559"
    },
    "maxResponseTime": {
        "total": "147822",
        "ok": "140893",
        "ko": "147822"
    },
    "meanResponseTime": {
        "total": "54519",
        "ok": "51256",
        "ko": "60014"
    },
    "standardDeviation": {
        "total": "40210",
        "ok": "41595",
        "ko": "37122"
    },
    "percentiles1": {
        "total": "46286",
        "ok": "40408",
        "ko": "55211"
    },
    "percentiles2": {
        "total": "89182",
        "ok": "85739",
        "ko": "89806"
    },
    "percentiles3": {
        "total": "121426",
        "ok": "120465",
        "ko": "127111"
    },
    "percentiles4": {
        "total": "143485",
        "ok": "135832",
        "ko": "146220"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15441,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1164,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 96323,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 67072,
    "percentage": 37
},
    "meanNumberOfRequestsPerSecond": {
        "total": "800",
        "ok": "501.902",
        "ko": "298.098"
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
        "total": "180000",
        "ok": "112928",
        "ko": "67072"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "1559"
    },
    "maxResponseTime": {
        "total": "147822",
        "ok": "140893",
        "ko": "147822"
    },
    "meanResponseTime": {
        "total": "54519",
        "ok": "51256",
        "ko": "60014"
    },
    "standardDeviation": {
        "total": "40210",
        "ok": "41595",
        "ko": "37122"
    },
    "percentiles1": {
        "total": "46294",
        "ok": "40431",
        "ko": "55221"
    },
    "percentiles2": {
        "total": "89080",
        "ok": "86387",
        "ko": "89802"
    },
    "percentiles3": {
        "total": "121486",
        "ok": "120450",
        "ko": "127050"
    },
    "percentiles4": {
        "total": "143486",
        "ok": "135831",
        "ko": "146220"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15441,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1164,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 96323,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 67072,
    "percentage": 37
},
    "meanNumberOfRequestsPerSecond": {
        "total": "800",
        "ok": "501.902",
        "ko": "298.098"
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
