(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{573:function(t,a,e){},583:function(t,a,e){},584:function(t,a,e){},607:function(t,a,e){"use strict";e(573)},624:function(t,a,e){"use strict";e(583)},625:function(t,a,e){"use strict";e(584)},649:function(t,a,e){"use strict";e(324);var i=e(650),n=e(652),s=e(604),o=(e(186),e(13),e(54),e(33),e(112),e(43),e(619),e(308)),l=e(181),r={name:"AlgoliaSearchBox",props:{options:{type:Object,default:function(){}}},data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,a){var i=this;Promise.all([Promise.all([e.e(0),e.e(3)]).then(e.t.bind(null,653,7)),Promise.all([e.e(0),e.e(3)]).then(e.t.bind(null,654,7))]).then((function(e){var n=Object(l.a)(e,1)[0];n=n.default;var s=t.algoliaOptions,r=void 0===s?{}:s;n(Object(o.a)(Object(o.a)({},t),{},{inputSelector:"#algolia-search-input",algoliaOptions:Object(o.a)({facetFilters:["lang:".concat(a)].concat(r.facetFilters||[])},r),handleSelected:function(t,a,e){var n=new URL(e.url),s=n.pathname,o=n.hash,l=s.replace(i.$site.base,"/");i.$router.push("".concat(l).concat(o))}}))}))},update:function(t,a){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,a)}}},c=(e(624),e(28)),d=Object(c.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[a("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports;function u(t,a){return t.ownerDocument.defaultView.getComputedStyle(t,null)[a]}var h={name:"Navbar",components:{SidebarButton:n.a,NavLinks:s.a,SearchBox:i.a,AlgoliaSearchBox:d},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,a=parseInt(u(this.$el,"paddingLeft"))+parseInt(u(this.$el,"paddingRight")),e=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-a-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},f=(e(625),Object(c.a)(h,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(a){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n\t\t\t"+t._s(t.$siteTitle)+"\n\t\t")]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.$page.frontmatter.hideSearch?e("div"):t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));a.a=f.exports},651:function(t,a,e){"use strict";var i={name:"Home",computed:{data:function(){return this.$page.frontmatter},downloadText:function(){return{link:this.data.downloadLink,text:this.data.downloadText}},faqText:function(){return{link:this.data.faqLink,text:this.data.faqText}}}},n=(e(607),e(28)),s=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"Logo"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n\t\t\t"+t._s(t.data.heroText||"AuroraOSS")+"\n\t\t")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.data.tagline||"Aurora Apps Open-Source Software. Inspired by you. Built for the community.")+"\n\t\t")]):t._e(),t._v(" "),t.data.downloadText||t.data.faqText?e("p",{staticClass:"action"},[t.data.downloadText?e("a",{staticClass:"action-button action-button__Download",attrs:{tabindex:"0",rel:"next",href:t.data.downloadLink}},[e("cloud-download-icon",{attrs:{size:"20px"}}),t._v("\n\t\t\t\t"+t._s(t.data.downloadText)+"\n\t\t\t")],1):t._e(),t._v(" "),t.data.faqText?e("a",{staticClass:"action-button action-button__Faqs",attrs:{tabindex:"0",rel:"next",href:t.data.faqLink}},[e("messages-icon",{attrs:{size:"20px"}}),t._v("\n\t\t\t\t"+t._s(t.data.faqText)+"\n\t\t\t")],1):t._e()]):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("div",{staticClass:"feature__Details"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),e("footer",[t.data.footer?e("div",{staticClass:"footer"},[t._v("\n\t\t\t"+t._s(t.data.footer)+"\n\t\t")]):t._e()])],1)}),[],!1,null,null,null);a.a=s.exports}}]);