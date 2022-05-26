"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{4114:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-33d73a8b",path:"/docs/configuration/authentifications/",title:"Authentifications",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/README.md",git:{updatedTime:1653595265e3,contributors:[{name:"Rodrigo Rodriguez Ramos",email:"51171995+rdrck47@users.noreply.github.com",commits:1}]}}},1989:(e,a,n)=>{n.r(a),n.d(a,{default:()=>i});const s=(0,n(6252).uE)('<h1 id="authentifications" tabindex="-1"><a class="header-anchor" href="#authentifications" aria-hidden="true">#</a> Authentifications</h1><ul><li><code>akhq.security.default-group</code>: Default group for all the user even unlogged user. By default, the default group is <code>admin</code> and allow you all read / write access on the whole app.</li></ul><p>By default, security &amp; roles is disabled and anonymous user have full access, i.e. <code>micronaut.security.enabled: false</code>. To enable security &amp; roles set <code>micronaut.security.enabled: true</code> and configure desired type of authentication (basic auth, LDAP, etc.).</p><p>If you need a read-only application, simply add this to your configuration files :</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">default-group</span><span class="token punctuation">:</span> reader\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),t={},i=(0,n(3744).Z)(t,[["render",function(e,a){return s}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[n,s]of a)e[n]=s;return e}}}]);