```
from(Promise.resolve(1)) // 流的源头
......
.subscribe(x => console.log(x)); // 流的终点
```


```
// 流的聚合
mergeMap(from(Promise.resolve(1)), from(Promise.resolve(2)))
......
.subscribe(x => console.log(x))
```

```
// 流的拆分
const obs$ = from(Promise.resolve(1)
obs$.subscribe(x => console.log(x))
obs$.subscribe(x => console.log(++x))
```