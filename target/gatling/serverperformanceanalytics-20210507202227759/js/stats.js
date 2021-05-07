var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "240000",
        "ok": "141160",
        "ko": "98840"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "2726"
    },
    "maxResponseTime": {
        "total": "123303",
        "ok": "123303",
        "ko": "122746"
    },
    "meanResponseTime": {
        "total": "52719",
        "ok": "48277",
        "ko": "59063"
    },
    "standardDeviation": {
        "total": "34108",
        "ok": "35162",
        "ko": "31475"
    },
    "percentiles1": {
        "total": "55945",
        "ok": "57192",
        "ko": "54169"
    },
    "percentiles2": {
        "total": "77079",
        "ok": "72826",
        "ko": "89443"
    },
    "percentiles3": {
        "total": "112466",
        "ok": "115749",
        "ko": "108739"
    },
    "percentiles4": {
        "total": "119728",
        "ok": "120219",
        "ko": "116803"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15626,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1141,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 124393,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 98840,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "781.759",
        "ok": "459.805",
        "ko": "321.954"
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
        "total": "240000",
        "ok": "141160",
        "ko": "98840"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "2726"
    },
    "maxResponseTime": {
        "total": "123303",
        "ok": "123303",
        "ko": "122746"
    },
    "meanResponseTime": {
        "total": "52719",
        "ok": "48277",
        "ko": "59063"
    },
    "standardDeviation": {
        "total": "34108",
        "ok": "35162",
        "ko": "31475"
    },
    "percentiles1": {
        "total": "55958",
        "ok": "57171",
        "ko": "54140"
    },
    "percentiles2": {
        "total": "77083",
        "ok": "72830",
        "ko": "89442"
    },
    "percentiles3": {
        "total": "112484",
        "ok": "115749",
        "ko": "108740"
    },
    "percentiles4": {
        "total": "119728",
        "ok": "120219",
        "ko": "116804"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15626,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1141,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 124393,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 98840,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "781.759",
        "ok": "459.805",
        "ko": "321.954"
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
