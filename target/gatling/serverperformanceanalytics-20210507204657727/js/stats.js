var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "63000",
        "ok": "41876",
        "ko": "21124"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "503"
    },
    "maxResponseTime": {
        "total": "21998",
        "ok": "21998",
        "ko": "21944"
    },
    "meanResponseTime": {
        "total": "6294",
        "ok": "4496",
        "ko": "9859"
    },
    "standardDeviation": {
        "total": "6232",
        "ok": "6047",
        "ko": "4921"
    },
    "percentiles1": {
        "total": "4116",
        "ok": "1024",
        "ko": "9518"
    },
    "percentiles2": {
        "total": "11310",
        "ok": "9181",
        "ko": "13510"
    },
    "percentiles3": {
        "total": "17588",
        "ok": "17099",
        "ko": "18314"
    },
    "percentiles4": {
        "total": "20481",
        "ok": "20482",
        "ko": "20474"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19247,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2724,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19905,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 21124,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "700",
        "ok": "465.289",
        "ko": "234.711"
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
        "total": "63000",
        "ok": "41876",
        "ko": "21124"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "503"
    },
    "maxResponseTime": {
        "total": "21998",
        "ok": "21998",
        "ko": "21944"
    },
    "meanResponseTime": {
        "total": "6294",
        "ok": "4496",
        "ko": "9859"
    },
    "standardDeviation": {
        "total": "6232",
        "ok": "6047",
        "ko": "4921"
    },
    "percentiles1": {
        "total": "4116",
        "ok": "1024",
        "ko": "9510"
    },
    "percentiles2": {
        "total": "11311",
        "ok": "9178",
        "ko": "13509"
    },
    "percentiles3": {
        "total": "17588",
        "ok": "17075",
        "ko": "18313"
    },
    "percentiles4": {
        "total": "20481",
        "ok": "20482",
        "ko": "20472"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19247,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2724,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19905,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 21124,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "700",
        "ok": "465.289",
        "ko": "234.711"
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
