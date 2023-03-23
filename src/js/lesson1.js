export default {
    template: `      
        <input type="text" v-model="greeting" />
        <p>{{ greeting }} ({{ greeting.length }})</p>
    `,
    
    data() {
      return {
        greeting: "hello world"
      };
    },
  
    mounted() {
      setTimeout(() => {
        this.greeting = "changed";
      }, 1000);
    }
}