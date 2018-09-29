const createTestCafe = require('testcafe');
const log = console.log;

createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        const testing = {
            testcafe: testcafe,
            runner: testcafe.createRunner(),
            running: null,
            remoteConnection: testcafe.createBrowserConnection()
        };

        testing.runner
            .src('./tests/**/*.js')
            .browsers(['chrome'])
            .reporter('list')
            .run()
            // .then(failedCount => {
            //     log("   Failed Test: ", failedCount);
            //     testing.testcafe.close();
            // })
            .catch(error => {
                log("   An unexpected error has occured: ", error);
            });
    });