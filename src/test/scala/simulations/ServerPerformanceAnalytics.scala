package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class ServerPerformanceAnalytics extends Simulation {

  var httpConfig = http.baseUrl("http://18.206.194.115:8080/file-api/")
    .header("Accept", "text/plain")

  def getKilobyteOfData() = {
    exec(
      http("Get a kilobyte of data")
        .get("1024")
        .check(status.is(200))
    )
  }

  val scn = scenario("Test of performance")
    .exec(getKilobyteOfData())

  setUp(
    scn.inject(
      nothingFor(1 seconds),
      rampUsersPerSec(100) to (2000) during(1 minutes),
      constantUsersPerSec(1500) during (1 minutes)
    ).protocols(httpConfig.inferHtmlResources())
  )
}
