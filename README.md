# alert

---

通过这个插件可以为所有警告框增加关闭功能。

---

## 用法

通过JavaScript启用警告框关闭功能：

```javascript
$(".alert").alert()
```

### 标记

只需为关闭按钮设置`data-dismiss="alert"`即可自动为警告框赋予关闭功能。

```html
<a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
```

### 方法

#### $().alert()

为所有警告框加入关闭功能。如果希望警告框被关闭时呈现动画效果，请确保为其添加了`.fade` 和 `.in`。

#### .alert('close')

关闭警告框。

```javascript
$(".alert").alert('close')
```

### 事件

SeaUI中的警告框暴露了一组事件，允许你进行监听。

<table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th style="width: 150px;">事件类型</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>close.bs.alert</td>
            <td>当<code>close</code>函数被调用之后，此事件被立即触发。</td>
          </tr>
          <tr>
            <td>closed.bs.alert</td>
            <td>当警告框被关闭之后（同时CSS过渡效果执行完毕），此事件被触发。</td>
          </tr>
        </tbody>
</table>

```javascript
$('#my-alert').bind('closed.bs.alert', function () {
  // do something…
})
```