
new Vue({
    el: '#crud',

    created: function() {
		this.getKeeps();
    },

    data:{
		keeps: [],
		fillKeep: {id:'',keep:''},
		newKeep:'',
		errors: ''
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
			   toastr.success("Eliminado com sucesso  "+keep.id);
			});		
		},
		createKeep: function(){
			url = 'tasks/';
			axios.post(url,{
				keep: this.newKeep
			}).then( response =>{
				this.getKeeps();
				this.newKeep = '';
				this.error = [];
				$('#create').modal('hide');
				toastr.success(' Tarefa criada com sucesso!');
			}).catch( error => {
				this.errors = error.response.data
			});
		},

		editKeep: function(keep){
			this.fillKeep.id  = keep.id;
			this.fillKeep.keep = keep.keep;
			$('#edit').modal('show');
		},

		updateKeep: function(id){
			url = 'tasks/'+ id;
			axios.put(url, this.fillKeep).then( response=>{
				this.getKeeps();
				this.fillKeep = {id:'',keep:''};
				this.error = [];
				$('#edit').modal('hide');
				toastr.success('Atualizado com sucesso!');
			}).catch( error => {
				this.errors = error.response.data
 			});
		} 
    },
});