
new Vue({
    el: '#crud',

    created: function() {
		this.getKeeps();
    },

    data:{
        keeps: [],
    },

    methods: {

        getKeeps: function(){
            urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response =>{
                this.keeps = response.data
            })
        },

        deleteKeeps: function(keep){
            url = 'tasks/'+ keep.id;
            axios.delete(url).then( response => {
                this.getKeeps();
            });

        }
    },
});