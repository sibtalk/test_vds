<template>
  <nuxt/>
</template>

<script>
export default {

}
</script>

<style>
::selection {background: #777;color:#fff;}
::-moz-selection {background: #777;color:#fff;}
::-webkit-selection {background: #777; color:#fff;}

::-webkit-input-placeholder {
	text-indent: 0;
	-webkit-transition: text-indent .8s ease;
	-o-transition: text-indent .8s ease;
	transition: text-indent .8s ease;
}

::-moz-placeholder {
	text-indent: 0;
	-webkit-transition: text-indent .8s ease;
	-o-transition: text-indent .8s ease;
	transition: text-indent .8s ease;
}

:-moz-placeholder {
	text-indent: 0;
	-webkit-transition: text-indent .8s ease;
	-o-transition: text-indent .8s ease;
	transition: text-indent .8s ease;
}

:-ms-input-placeholder {
	text-indent: 0;
	-webkit-transition: text-indent .8s ease;
	-o-transition: text-indent .8s ease;
	transition: text-indent .8s ease;
}

:focus::-webkit-input-placeholder {
	text-indent: 500px;
	color: transparent;
	-webkit-transition: .5s ease;
	-o-transition: .5s ease;
	transition: .5s ease;
}

:focus::-moz-placeholder {
	text-indent: 500px;
	color: transparent;
	-webkit-transition: .5s ease;
	-o-transition: .5s ease;
	transition: .5s ease;
}

:focus:-moz-placeholder {
	text-indent: 500px;
	color: transparent;
	-webkit-transition: .5s ease;
	-o-transition: .5s ease;
	transition: .5s ease;
}

:focus:-ms-input-placeholder {
	text-indent: 500px;
	color: transparent;
	-webkit-transition: .5s ease;
	-o-transition: .5s ease;
	transition: .5s ease;
}
::-webkit-scrollbar-button {
	width: 10px;
	height: 0px;
	background-repeat: no-repeat;
}

::-webkit-scrollbar-track {
	background-color: #dadada;
}

::-webkit-scrollbar-thumb {
	border-radius: 5px;
	background-color: rgb(162, 162, 162);
}

::-webkit-scrollbar-thumb:hover {
	background-color: #5a5a5a;
}

::-webkit-resizer {
	width: 10px;
	height: 0px;
	background-repeat: no-repeat;
}


::-webkit-scrollbar {
	width: 9px;
}

/* ********************************************************************************************** */


html,body,#__nuxt,#__layout{
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}
.v-application--wrap{
  min-height: auto;
}
/* .v-treeview-node__label:hover{
  cursor: pointer;
} */
.v-treeview-node__root {
  min-height: 32px;
}
.mdi-folder-open,
.mdi-folder{
  color: #f1c447!important;
}
.v-icon.v-icon::after {
    height: 70%;
    left: 3px;
    top: 3px;
    width: 70%;
}

</style>
