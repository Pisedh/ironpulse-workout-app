<script setup lang="ts">
import {ref} from 'vue';import {useRegisterSW} from 'virtual:pwa-register/vue';import {useApp} from '../stores/app';import Icon from './Icon.vue';
const app=useApp(),busy=ref(false),error=ref('');
const {offlineReady,needRefresh,updateServiceWorker}=useRegisterSW();
async function update(){busy.value=true;try{await app.save();await updateServiceWorker(true);}catch{error.value='Unable to update safely. Please try again after saving.';busy.value=false;}}
</script>
<template><aside v-if="needRefresh||offlineReady" class="app-update" role="status"><Icon :name="needRefresh?'Download':'ShieldCheck'"/><div><strong>{{needRefresh?'An update is ready.':'Ready for offline use.'}}</strong><p>{{needRefresh?'Your saved progress stays on this device.':'Exercise pictures and app files have been downloaded.'}}</p><p v-if="error">{{error}}</p></div><button v-if="needRefresh" class="button primary" :disabled="busy||!!app.active||!app.ready" @click="update">{{app.active?'Finish workout to update':'Update now'}}</button><button class="icon-button" aria-label="Dismiss update message" @click="offlineReady=false;needRefresh=false"><Icon name="X" :size="17"/></button></aside></template>
