<script setup lang="ts">
import {computed} from 'vue';import {exerciseIllustrations} from '../core/exercise-media';
const props=withDefaults(defineProps<{exerciseId:string;name:string;compact?:boolean}>(),{compact:false});
const media=computed(()=>exerciseIllustrations[props.exerciseId]);
</script>
<template><div v-if="media" class="movement-guide" :class="{'movement-guide-compact':compact}"><figure class="exercise-illustration"><svg :viewBox="media.viewBox" preserveAspectRatio="xMidYMid meet" role="img" :aria-label="name+': position 1, '+media.positions[0].label+'; position 2, '+media.positions[1].label" xmlns="http://www.w3.org/2000/svg"><image :href="media.src" x="0" y="0" width="1254" height="1254"/></svg></figure><template v-if="!compact"><ol class="position-cues"><li v-for="(position,i) in media.positions" :key="position.label"><span>{{i+1}}</span><div><strong>{{position.label}}</strong><p>{{position.cue}}</p></div></li></ol><div class="return-cue"><span>↩</span><p><strong>Return & repeat.</strong> {{media.returnCue}}</p></div><p class="media-note">AI-generated illustrations. Use the written cues; these are not technique-certified videos.</p></template></div></template>
