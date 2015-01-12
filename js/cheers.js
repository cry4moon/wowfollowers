var test = read.fromCSV('test.csv')

var cheers = require 'cheers'
var d = cheers.get('https://mirror.enha.kr/wiki/%EC%B6%94%EC%A2%85%EC%9E%90%28%EC%9B%94%EB%93%9C%20%EC%98%A4%EB%B8%8C%20%EC%9B%8C%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8%29')
d.select('tr').forEach (x)

for (var k,v in test) {
	Firebase.put(k,v);
}