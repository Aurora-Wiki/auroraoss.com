(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{595:function(t,e,n){},640:function(t,e,n){"use strict";n(595)},658:function(t,e,n){"use strict";n.r(e);n(54),n(112),n(183);var r=n(75),a=n(592),s=n.n(a),o={data:function(){return{changelogStore:"Failed to load data from GitHub."}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("getStoreReleaseData");case 3:n=e.sent,r=n.data,t.$data.changelogStore=s()(r.body).replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g,"<a href='https://github.com/$2' target='_blank' rel='noopener'>@$2</a>"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},i=(n(640),n(28)),c=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"guide changelogStore"},[e("p",{staticClass:"title"},[e("notes-icon"),this._v("\n\t\tChangelog\n\t")],1),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.changelogStore)}}),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"note"},[e("p",[this._v("\n\t\t\tView the full release\n\t\t\t"),e("a",{attrs:{href:"https://github.com/marchingon12/AuroraStore/releases/latest",target:"_blank",rel:"noopener"}},[this._v("here")])])])}],!1,null,null,null);e.default=c.exports}}]);