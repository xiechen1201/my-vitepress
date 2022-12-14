# Hello VitePress

## 目录

[Home](/) <!-- sends the user to the root index.md -->

[foo](/foo/) <!-- sends the user to index.html of directory foo -->

[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->

[bar - three](./bar/three) <!-- you can omit extension -->

[bar - three](./bar/three.md) <!-- you can append .md -->

[bar - four](./bar/four.html) <!-- or you can append .html -->

## 案例

:tada: :100:

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 代码块

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 使用 Vue

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>