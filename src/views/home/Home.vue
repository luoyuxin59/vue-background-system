<template>
  <div div class="home">
    <Row-List></Row-List> 
  </div>
</template>

<script>
import RowList from './component/RowList'
export default {
  name: '',
  data() {
    return {
    };
  },
  components: {
    RowList,
    
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  background-color: #f0f2f5;

}
</style>
