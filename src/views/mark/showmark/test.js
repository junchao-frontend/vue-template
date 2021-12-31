/* eslint-disable no-tabs */
const test = `
<h4><a id="_0"></a>文字阴影</h4>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">h2</span> {
	<span class="hljs-attribute">text-shadow</span>:<span class="hljs-built_in">rgba</span>(150,9,238,.2) <span class="hljs-number">3px</span> <span class="hljs-number">2px</span> <span class="hljs-number">3px</span>;
}
// 水平偏移 垂直偏移 模糊量
</code></div></pre>
<h4><a id="_9"></a>空白处理和文本溢出</h4>
<pre><code class="lang-">white-space: pre-line nowrap
div{
            border: 1px solid red;
            width: 180px;
            white-space: nowrap;不换行
            overflow: hidden;
            text-overflow: ellipsis;将文本溢出的部分变成...
        }
</code></pre>
`
export { test }
