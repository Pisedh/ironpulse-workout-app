<script setup lang="ts">
defineProps<{selected?:string}>();defineEmits<{select:[muscle:string]}>();
</script>
<template><svg class="body-map" viewBox="0 0 260 380" role="img" aria-label="Stylized front body map; choose a muscle using the buttons below">
<defs><linearGradient id="bodyTone" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#697164"/><stop offset="1" stop-color="#30372e"/></linearGradient></defs>
<g fill="url(#bodyTone)" stroke="#9aa58e" stroke-width=".7"><path d="M116 29Q130 19 144 29L146 52 138 65H122L114 52Z"/><path d="M122 65L120 76 103 82 94 103 102 130 106 160 102 182 113 200H147L158 182 154 160 158 130 166 103 157 82 140 76 138 65"/><path d="M102 84Q85 78 76 104L63 151 53 191 42 216 47 227 60 217 69 195 84 160 95 125"/><path d="M158 84Q175 78 184 104L197 151 207 191 218 216 213 227 200 217 191 195 176 160 165 125"/><path d="M113 194L102 211 101 257 107 289 102 332 96 351 100 360 120 359 123 338 126 290 130 247 134 290 137 338 140 359 160 360 164 351 158 332 153 289 159 257 158 211 147 194"/></g>
<g class="muscle-regions" stroke="#101710" stroke-width="2" :class="selected">
<path :fill="selected==='Chest'||selected==='Upper chest'?'#c4f568':'#7a9163'" d="M105 91Q114 84 128 91L128 119Q111 124 101 110Z M132 91Q146 84 155 91L159 110Q149 124 132 119Z"/>
<path :fill="selected==='Shoulders'?'#c4f568':'#596b4c'" d="M98 84Q81 84 77 109L92 112Z M162 84Q179 84 183 109L168 112Z"/>
<path :fill="selected==='Biceps'?'#c4f568':'#687c53'" d="M77 115L90 117 81 151 68 156Z M183 115L170 117 179 151 192 156Z"/>
<path :fill="selected==='Core'?'#c4f568':'#596b4c'" d="M115 128H128V142H112Z M132 128H145L148 142H132Z M112 146H128V160H114Z M132 146H148L146 160H132Z M115 164H128V179L120 182Z M132 164H145L140 182 132 179Z"/>
<path :fill="selected==='Legs'?'#c4f568':'#687c53'" d="M109 209L124 211 120 267 109 278 106 249Z M151 209L136 211 140 267 151 278 154 249Z"/>
<path :fill="selected==='Calves'?'#c4f568':'#596b4c'" d="M110 294L122 291 118 334 108 338Z M150 294L138 291 142 334 152 338Z"/>
</g><g stroke="#889779" stroke-width=".5" opacity=".5"><path d="M130 77V187M106 204L130 214 154 204M110 285H124M136 285H150"/></g></svg></template>
