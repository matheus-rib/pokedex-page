(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-716c680a","chunk-7271c56d"],{"005f":function(t,e,a){"use strict";var s=a("60dc"),n=a.n(s);n.a},"0806":function(t,e,a){},"0c17":function(t,e,a){},"1a49":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"card card-text-color",attrs:{to:{name:"pokemons.show",params:{pokemonName:t.pokemon.name}}}},[a("div",{staticClass:"card-header text-size"},[t._v(t._s(t._f("normalize")(t.pokemon.name)))])])},n=[],i={props:{pokemon:{type:Object,required:!0}}},o=i,r=(a("b7bb"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"123b255a",null);e["default"]=c.exports},2527:function(t,e,a){},"2e28":function(t,e,a){"use strict";var s=a("2527"),n=a.n(s);n.a},"34df":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-action btn-primary s-circle fab",on:{click:t.scrollToElement}},[a("i",{staticClass:"fas fa-chevron-up fa-2x"})])},n=[],i={props:{element:{default:null},offset:{type:Number,default:0}},methods:{scrollToElement(){this.$smoothScroll({scrollTo:this.element,offset:this.offset})}}},o=i,r=(a("76be"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"6b1722f5",null);e["a"]=c.exports},"5f01":function(t,e,a){},"60dc":function(t,e,a){},6560:function(t,e,a){"use strict";var s=a("5f01"),n=a.n(s);n.a},"676f":function(t,e,a){"use strict";var s=a("0c17"),n=a.n(s);n.a},"76be":function(t,e,a){"use strict";var s=a("86d1"),n=a.n(s);n.a},"7dd9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"header",staticClass:"container grid-xl"},[t.loading?a("div",{staticClass:"loading loading-lg"}):a("div",[a("div",{staticClass:"header"},[a("go-back-button",{attrs:{to:{name:"home"},tooltip:"Back to home"}}),a("div",{staticClass:"pokemons-count text-size"},[t._v("Total pokemons count: "+t._s(t.totalPokemonsEntries))])],1),a("div",{staticClass:"columns"},[t._l(t.pokemonsList,(function(t){return a("div",{key:t.entry_number,staticClass:"column col-3 col-lg-6 col-sm-12"},[a("row",{attrs:{pokemon:t}})],1)})),t.showScrollToTopButton?a("scroll-to-top-button",{attrs:{element:t.$refs.header,offset:-200}}):t._e()],2),t.pokemonsList&&t.pokemonsListPages>1?a("paginator",{attrs:{page:t.page,totalPages:t.pokemonsListPages},on:{"change-page":t.changePage}}):t._e()],1)])},n=[],i=a("2f62"),o=a("1a49"),r=a("89ea"),c=a("8456"),l=a("34df"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item c-hand",class:{disabled:t.firstPage},on:{click:t.previousPage}},[t._m(0)]),a("li",{staticClass:"page-item c-hand",class:{active:t.firstPage}},[a("a",{on:{click:function(e){return t.toPage(1)}}},[t._v("1")])]),t.currentPage-t.limitPages>1?a("li",{staticClass:"page-item"},[a("a",[t._v("...")])]):t._e(),t._l(t.pages,(function(e){return a("div",{key:e},[e>1&&e<t.pages&&e-t.currentPage<t.limitPages&&t.currentPage-e<t.limitPages?a("li",{staticClass:"page-item c-hand",class:{active:e===t.currentPage}},[a("a",{on:{click:function(a){return t.toPage(e)}}},[t._v(t._s(e))])]):t._e()])})),t.pages-t.currentPage>t.limitPages?a("li",{staticClass:"page-item"},[a("a",[t._v("...")])]):t._e(),t.pages>1?a("li",{staticClass:"page-item c-hand",class:{active:t.lastPage}},[a("a",{on:{click:function(e){return t.toPage(t.pages)}}},[t._v(t._s(t.pages))])]):t._e(),a("li",{staticClass:"page-item c-hand",class:{disabled:t.lastPage},on:{click:t.nextPage}},[t._m(1)])],2)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-button"},[a("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-button"},[a("i",{staticClass:"fas fa-chevron-right"})])}],f={props:{page:{type:[Number,String],required:!0},totalPages:{type:[Number,String],required:!0},limitPages:{type:Number,default:3}},computed:{currentPage(){return Number(this.page)},pages(){return Number(this.totalPages)},firstPage(){return Boolean(this.currentPage<=1)},lastPage(){return Boolean(this.currentPage>=this.pages)}},methods:{previousPage(){this.firstPage||this.navigateToPage(this.currentPage-1)},toPage(t){t!==this.currentPage&&this.navigateToPage(t)},nextPage(){this.lastPage||this.navigateToPage(this.currentPage+1)},async navigateToPage(t){await this.$router.push({to:this.$route,query:{...this.$route.query,page:t}}),this.$emit("change-page",t)}}},g=f,h=(a("676f"),a("2877")),m=Object(h["a"])(g,u,p,!1,null,"7db899a8",null),d=m.exports,v=a("dc85"),b={data(){return{loading:!1,page:0,pageYScroll:0}},components:{Row:o["default"],FilterField:r["a"],EmptyContainer:c["a"],ScrollToTopButton:l["a"],Paginator:d,GoBackButton:v["a"]},computed:{...Object(i["c"])("pokemons",["pokemonsList","pokemonsListPages","totalPokemonsEntries"]),showScrollToTopButton(){return this.pageYScroll>130}},methods:{...Object(i["b"])("pokemons",["fetchPokemonsList"]),onScroll(){this.pageYScroll=window.scrollY},async changePage(t){await this.fetchData(t)},async fetchData(t){try{this.loading=!0,await this.fetchPokemonsList(t),this.page=t}catch(e){this.$toaster.error(e.message)}finally{this.loading=!1}}},async created(){window.onscroll=this.onScroll,this.page=this.$route.query.page||1,this.fetchData(this.page)}},P=b,_=(a("2e28"),Object(h["a"])(P,s,n,!1,null,"a52907f4",null));e["default"]=_.exports},8456:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty"},[t.icon?a("div",{staticClass:"empty-icon"},[a("i",{class:t.icon})]):t._e(),a("p",{staticClass:"empty-title h5"},[t._v(t._s(t.title))]),a("p",{staticClass:"empty-subtitle"},[t._v(t._s(t.subtitle))]),t._t("action")],2)},n=[],i={props:{icon:{type:String,default:"fas fa-times fa-5x color-danger"},title:{type:String,default:"No results"},subtitle:{type:String,default:"No matching results for your search."}}},o=i,r=(a("005f"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"2af3055c",null);e["a"]=c.exports},"86d1":function(t,e,a){},"89ea":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"has-icon-right",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInputModel,expression:"searchInputModel"}],staticClass:"form-input input-sm",attrs:{placeholder:t.placeholder},domProps:{value:t.searchInputModel},on:{input:function(e){e.target.composing||(t.searchInputModel=e.target.value)}}}),a("i",{staticClass:"form-icon fas fa-search c-hand",on:{click:t.search}})])},n=[],i={data(){return{searchInputModel:""}},props:{placeholder:{type:String,default:"Pesquisar"}},methods:{search(){this.$emit("search",this.searchInputModel)}}},o=i,r=(a("b5f9"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"6e8d5295",null);e["a"]=c.exports},b5f9:function(t,e,a){"use strict";var s=a("f3eb"),n=a.n(s);n.a},b7bb:function(t,e,a){"use strict";var s=a("0806"),n=a.n(s);n.a},dc85:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"tooltip tooltip-right",attrs:{to:t.to,"data-tooltip":t.tooltip}},[a("i",{staticClass:"fas fa-chevron-left"})])},n=[],i={props:{to:{type:Object,required:!0},tooltip:{type:String,required:!0}}},o=i,r=(a("6560"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"73fa3602",null);e["a"]=c.exports},f3eb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-716c680a.f2874c79.js.map