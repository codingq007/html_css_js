var list = [];

for (var i = 1; i <= 45; i++) {
  list.push(i);
}

var result = [];

for (var i = 0; i < 6; i++) {
  // list의 길이가 최대 6이 감소된다. list.length는 45, 44, 43, 42, 41, 40으로 1씩 감소
  // 범위가 축소되는 과정 => (0 ~ 44, 0 ~ 43, 0 ~ 42, 0 ~ 41, 0 ~ 40, 0 ~ 39)
  var index = Math.floor(Math.random() * list.length);

  // 랜덤으로 선택한 인덱스의 값
  var num = list[index];

  // 배열에서 인덱스의 값 제거
  list.splice(index, 1);

  result.push(num);
}


result.sort(function(a, b) {
  return a - b;
});


for (var i = 0; i < 6; i++) {
  document.write('<span class="ball">' + result[i] + '</span>');
}


