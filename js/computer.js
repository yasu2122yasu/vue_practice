Vue.createApp({
    data: function() {
        return {
            email: 'Y-suzuki@example.com'
        }
    },

    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }

}).mount('#app');