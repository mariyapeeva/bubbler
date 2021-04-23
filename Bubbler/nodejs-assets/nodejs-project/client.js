var Client = require('ssh2').Client;
// var fs = require('fs');

var conn = new Client();
conn.on('error', function(err) {
    console.log('SSH - Connection Error: ' + err);
});
conn.on('end', function() {
    console.log('SSH - Connection Closed');
});

var test = '60812421c5ef1a50e027ccfc,608121fbc5ef1a50e027ccf4,60812102c5ef1a50e027ccf1,6081218ac5ef1a50e027ccf3,6080d31cc5ef1a50e027cce3,60812128c5ef1a50e027ccf2,60811c38c5ef1a50e027cce9,60806df6ff96910359f9ab52,607e22315dad53f018a93b72,607ddae616c4e51e732fff08,607dda5b16c4e51e732fff04,607dda8916c4e51e732fff06,607dd88116c4e51e732ffe3e,607dcea416c4e51e732ffdfc,607dc51116c4e51e732ffdba,607dc4bd16c4e51e732ffdb8,607dc40016c4e51e732ffdb6,607dc2ef16c4e51e732ffdb4,607dc2c416c4e51e732ffcc4,607dc0db16c4e51e732ffcc0,607dc08116c4e51e732ffcbe,607dbf8f16c4e51e732ffcbc,607dbf0916c4e51e732ffbdc,607dbe1316c4e51e732ffba4,607d9f4716c4e51e732ffb62,607d9e2c16c4e51e732ffb60,607d9daa16c4e51e732ffb5e,607d978e16c4e51e732ffac5,608056feff96910359f9ab2b,607da04616c4e51e732ffb69,607d965e16c4e51e732ffa32,607d955a16c4e51e732ffa03,607d93eb16c4e51e732ff9d5,607d937e16c4e51e732ff9a8,607d933616c4e51e732ff97c,607d92d016c4e51e732ff951,607ec8b31d36f4247b21bde6,607d8d93cb85c11e36f18de6,607d8d4acb85c11e36f18dbe,607ec61165763e08bead35ca,607ec61765763e08bead35cb,607d8a4d16dc0d1ccb768197,607d893216dc0d1ccb768173,607d852c16dc0d1ccb76814f,607d83de16dc0d1ccb76814d,607dbbc016c4e51e732ffb9f,607d81e403ed8a1aef0b1e99,607d80b9b879be03ae741ba0,607d76c0b879be03ae741b7f,607d75e2b879be03ae741b61,607d75b2b879be03ae741b45,607d6cb2b879be03ae741b29,607f521dfdd9cd0f6d40325c,607d6a1330bc7ef6145d81be,607f520dfdd9cd0f6d40325b,607ff17618dded818e644801,607ff20018dded818e644802,607fe7aa18dded818e6447fd,607fef8218dded818e6447fe,607ff6e8c7c0a9331006ce72,607ff5acc7c0a9331006ce70,607dfc133ee06d20ce3544fe 2021-04-22T07:22:09.907Z,2021-04-22T07:12:59.353Z,2021-04-22T07:08:50.491Z,2021-04-22T07:11:06.630Z,2021-04-22T01:36:28.666Z,2021-04-22T07:09:28.530Z,2021-04-22T06:48:24.552Z,2021-04-21T18:24:54.559Z,2021-04-20T00:37:05.656Z,2021-04-19T19:32:54.178Z,2021-04-19T19:30:35.493Z,2021-04-19T19:31:21.392Z,2021-04-19T19:22:41.584Z,2021-04-19T18:40:36.687Z,2021-04-19T17:59:45.966Z,2021-04-19T17:58:21.453Z,2021-04-19T17:55:12.128Z,2021-04-19T17:50:39.031Z,2021-04-19T17:49:56.295Z,2021-04-19T17:41:47.358Z,2021-04-19T17:40:17.428Z,2021-04-19T17:36:15.917Z,2021-04-19T17:34:01.959Z,2021-04-19T17:29:55.267Z,2021-04-19T15:18:31.348Z,2021-04-19T15:13:48.905Z,2021-04-19T15:11:38.747Z,2021-04-19T14:45:34.463Z,2021-04-21T16:46:54.869Z,2021-04-19T15:22:46.243Z,2021-04-19T14:40:30.101Z,2021-04-19T14:36:10.556Z,2021-04-19T14:30:03.453Z,2021-04-19T14:28:14.219Z,2021-04-19T14:27:02.547Z,2021-04-19T14:25:20.208Z,2021-04-20T12:27:31.691Z,2021-04-19T14:02:59.546Z,2021-04-19T14:01:46.876Z,2021-04-20T12:16:17.631Z,2021-04-20T12:16:23.292Z,2021-04-19T13:49:01.243Z,2021-04-19T13:44:18.717Z,2021-04-19T13:27:08.256Z,2021-04-19T13:21:34.617Z,2021-04-19T17:20:00.908Z,2021-04-19T13:13:08.923Z,2021-04-19T13:08:09.716Z,2021-04-19T12:25:36.685Z,2021-04-19T12:21:54.985Z,2021-04-19T12:21:06.031Z,2021-04-19T11:42:42.150Z,2021-04-20T22:13:49.737Z,2021-04-19T11:31:31.835Z,2021-04-20T22:13:33.911Z,2021-04-21T09:33:42.390Z,2021-04-21T09:36:00.283Z,2021-04-21T08:51:54.338Z,2021-04-21T09:25:22.620Z,2021-04-21T09:56:56.220Z,2021-04-21T09:51:40.876Z,2021-04-19T21:54:27.155Z privcmsglists_find'

var state;
conn.on('ready', function() {
    console.log('Client :: ready')
    // ${id} ${updated_at}
    conn.exec('./exec.js 6082bf57b4bea14f6037d7fb 2021-04-23T13:29:41.287Z privcmsglists_find', function(err, stream) {
      if (err) throw err;
      stream.on('close', function(code, signal) {
        conn.end();
      }).on('data', function(data) {
        console.log('STDOUT: ' + data);
        state = data; 
      }).stderr.on('data', function(data) {
        console.log('STDERR: ' + data);
      });
    });
    
});

conn.connect({
  host: '192.168.0.140',
  port: 8002,
  username: 'root',
  password: 'test'
  // privateKey: { key: fs.readFileSync('id_rsa.pub'), passphrase: '001025_Mp' },
});


