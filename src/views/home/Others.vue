<template>
    <div class="Others">
        <Headers msg="测试msg"></Headers>
        <router-view></router-view>
    </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
export default {
  name: 'Others',
  components: {
    Headers
  }
}
</script>
