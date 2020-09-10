/*
Description:
  Replies to a request for a joke and has a delay for the punchline

Commands:
  hubot Tell me a joke
  hubot know any good jokes?

Author:
  theycallmesef

Environment Variables:
  HUBOT_JOKES_URL - (Optional) Url to json file with jokes

*/

var jokejson = require('../lib/jokes.json');
var jokesdataurl = process.env.HUBOT_JOKES_URL;

module.exports = (robot) => {

  // ---- Return json from web request ----
  // "url" is passed in, "callback" is the return
  function GetUrlData(url, callback) {
    let jdata
    robot.logger.info("joke-delay-punchline: Gathering json data from form api");
    // Get json of form submissions
    robot.http(url)
      .header('Accept', 'application/json')
      .get()((err, res, body) => {
      if (err) {
        // send error message to room
        robot.logger.error(`joke-delay-punchline: Error connecting: ${res}`);
        return;
      } else {
        try {
          jdata = JSON.parse(body);
        } catch(e) {
          robot.logger.error(`joke-delay-punchline: Error retreving data: ${e}`);
          return;
        };
        // send results to return function
        robot.logger.info(`joke-delay-punchline: Data retrived from API`);
        callback(jdata);
      };
    });
  };

  function TellJoke(msg, jokedata) {
    let rjoke, message
    if (jokedata.acknowledge) {
      msg.send(msg.random(jokedata.acknowledge));
    };
    rjoke = jokedata.jokes[Math.floor(Math.random() * jokedata.jokes.length)];
    msg.send(rjoke.joke + "...");
    message = "..." + rjoke.punchline
    if (jokedata.laugh){
      message += " " + msg.random(jokedata.laugh)
    };
    setTimeout(() => {
      msg.send(message);
    }, 6000);
  };

  robot.respond(/\b((tell .*a )|\b((do you )?know (a|any) ))jokes?\b/i, msg => {
    msg.finish();
    let rjoke, message
    if (jokesdataurl) {
      GetUrlData(jokesdataurl, (jokedurlata) => {
        TellJoke(msg, jokedurlata);
      });
    } else {
      TellJoke(msg, jokejson);
    };
  });
};
