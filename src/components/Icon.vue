<script setup lang="ts">
import {Activity,House,Dumbbell,Utensils,ChartNoAxesCombined,Sparkles,Settings,ArrowUpRight,ArrowRight,Plus,Check,X,ChevronRight,Heart,Clock,Flame,ShieldCheck,Download,Search,Target,Sun,Moon,Trash2,Pause,Play,RotateCcw,Menu,Weight,ArrowLeft,WifiOff} from 'lucide-vue-next';
defineProps<{name:string;size?:number}>();
const icons:Record<string,any>={Activity,House,Dumbbell,Utensils,ChartNoAxesCombined,Sparkles,Settings,ArrowUpRight,ArrowRight,Plus,Check,X,ChevronRight,Heart,Clock,Flame,ShieldCheck,Download,Search,Target,Sun,Moon,Trash2,Pause,Play,RotateCcw,Menu,Weight,ArrowLeft,WifiOff};
</script><template><component :is="icons[name]||Activity" :size="size||20" :stroke-width="1.7" aria-hidden="true"/></template>
